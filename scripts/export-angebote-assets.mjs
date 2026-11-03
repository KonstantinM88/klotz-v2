import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = fileURLToPath(new URL("../", import.meta.url));
const manifestPath = join(root, "content/angebote-assets-manifest.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const hash = (buffer) => createHash("sha256").update(buffer).digest("hex");
assert.equal(manifest.assets.length, 5);

for (const asset of manifest.assets) {
  assert.match(asset.src, /^\/images\/angebote-2026\/[a-z0-9-]+\.webp$/);
  const original = await readFile(join(root, asset.original));
  const master = await readFile(join(root, asset.master));
  const masterMetadata = await sharp(master).metadata();
  assert.equal(masterMetadata.width, 1086);
  assert.equal(masterMetadata.height, 1448);

  // Format export only: retain the generated composition and native dimensions.
  const webp = await sharp(master)
    .toColourspace("srgb")
    .webp({ quality: 94, effort: 6, smartSubsample: true })
    .toBuffer();
  const metadata = await sharp(webp).metadata();
  assert.equal(metadata.format, "webp");
  assert.equal(metadata.width, masterMetadata.width);
  assert.equal(metadata.height, masterMetadata.height);
  await sharp(webp).raw().toBuffer();

  const target = join(root, "public", asset.src.slice(1));
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, webp);
  Object.assign(asset, {
    width: metadata.width,
    height: metadata.height,
    bytes: webp.length,
    sha256: hash(webp),
    originalSha256: hash(original),
    masterSha256: hash(master),
    export: { format: "webp", quality: 94, effort: 6, smartSubsample: true },
  });
  console.log(
    JSON.stringify({
      src: asset.src,
      width: metadata.width,
      height: metadata.height,
      bytes: webp.length,
    }),
  );
}

manifest.validation = {
  checkedOn: "2026-10-29",
  files: 5,
  aspectRatio: "3:4",
  fullDecode: "passed",
  nativeDimensionsPreserved: true,
  visualReview:
    "Layout, German text, prices, units and source dimensions reviewed before export.",
};
await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + "\n");

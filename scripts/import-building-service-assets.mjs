import { readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import sharp from "sharp";

// Product-gallery URLs inspected on klotz.mobi on 15.11.2026.
const observed = JSON.parse(
  await readFile("content/building-service-image-sources.json", "utf8"),
);
const manifestPath = "content/assets-manifest.json";
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const sha = (buffer) => createHash("sha256").update(buffer).digest("hex");
const selectedId = process.argv
  .find((arg) => arg.startsWith("--id="))
  ?.slice(5);
for (const asset of observed.filter(
  (item) => !selectedId || item.id === selectedId,
)) {
  const sourceUrl = asset.displaySourceUrl
    .replace(/\/styles\/[^/]+\/public\//, "/")
    .split("?")[0];
  const response = await fetch(sourceUrl);
  if (!response.ok) throw new Error(`${asset.id}: ${response.status}`);
  const original = Buffer.from(await response.arrayBuffer());
  const metadata = await sharp(original).metadata();
  const output = await sharp(original)
    .rotate()
    .resize({ width: 1800, withoutEnlargement: true })
    .webp({ quality: 86, effort: 6 })
    .toBuffer({ resolveWithObject: true });
  const src = `/images/${asset.id}.webp`;
  const originalPath = `content/legacy/originals/${asset.id}.${metadata.format}`;
  await writeFile(originalPath, original);
  await writeFile(`public${src}`, output.data);
  const item = {
    ...asset,
    sourceUrl,
    originalPath,
    src,
    width: output.info.width,
    height: output.info.height,
    bytes: output.data.length,
    originalSha256: sha(original),
    sha256: sha(output.data),
    capturedAt: new Date().toISOString(),
    rightsStatus: "client-presentation-approved",
    rightsNote:
      "Product imagery from KLOTZ legacy galleries, including possible manufacturer images. Presentation permission only; public rights require release.",
    factStatus: "legacy-product-illustration",
  };
  const i = manifest.findIndex((entry) => entry.id === asset.id);
  if (i < 0) manifest.push(item);
  else manifest[i] = item;
  console.log(
    `${asset.id}: ${metadata.width}×${metadata.height} → ${item.width}×${item.height}`,
  );
}
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

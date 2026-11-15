import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import { createHash } from "node:crypto";
import sharp from "sharp";

const section = process.argv.includes("--windows") ? "windows" : "terrace";
const selections = JSON.parse(
  await readFile(`content/${section}-gallery-selections.json`, "utf8"),
);
const baseAssets = JSON.parse(
  await readFile("content/assets-manifest.json", "utf8"),
);
const manifestPath = `content/${section}-gallery-assets-manifest.json`;
const cache = `.lighthouseci/${section}-gallery-source/originals`;
const originalDir = `content/legacy/originals/${section}-gallery`;
const publicDir = `public/images/${section}-gallery`;
await Promise.all(
  [cache, originalDir, publicDir].map((p) => mkdir(p, { recursive: true })),
);
const hash = (buffer) => createHash("sha256").update(buffer).digest("hex");
const exists = async (path) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};
const prior = (await exists(manifestPath))
  ? JSON.parse(await readFile(manifestPath, "utf8"))
  : [];
const assets = [];
let reused = 0;
for (const group of selections) {
  for (const selected of group.items) {
    const originalUrl = selected.displaySourceUrl
      .replace(/\/styles\/[^/]+\/public\//, "/")
      .split("?")[0];
    const parsed = new URL(originalUrl);
    if (
      parsed.origin !== "https://www.klotz.mobi" ||
      !parsed.pathname.startsWith("/sites/default/files/") ||
      /adobestock/i.test(parsed.pathname)
    )
      throw Error("Unapproved gallery source");
    const cached = `${cache}/${hash(originalUrl)}.bin`;
    let bytes,
      sourceUrl = originalUrl,
      sourceVariant = "original";
    if (await exists(cached)) bytes = await readFile(cached);
    else {
      let response = await fetch(originalUrl);
      if (!response.ok) {
        response = await fetch(selected.displaySourceUrl);
        sourceUrl = selected.displaySourceUrl;
        sourceVariant = "legacy-preview";
      }
      if (!response.ok) throw Error(`${selected.id}: ${response.status}`);
      bytes = Buffer.from(await response.arrayBuffer());
      if (sourceVariant === "original") await writeFile(cached, bytes);
    }
    const metadata = await sharp(bytes).metadata();
    const originalSha256 = hash(bytes);
    const existing = [...baseAssets, ...prior, ...assets].find(
      (a) => a.originalSha256 === originalSha256,
    );
    const existingOriginal =
      existing?.originalPath ??
      (existing
        ? `content/legacy/originals/${existing.id}.${metadata.format}`
        : "");
    let src, originalPath, width, height, outputBytes, sha256;
    if (
      existing &&
      (await exists(`public${existing.src}`)) &&
      (await exists(existingOriginal))
    ) {
      src = existing.src;
      originalPath = existingOriginal;
      width = existing.width;
      height = existing.height;
      const output = await readFile(`public${src}`);
      outputBytes = output.length;
      sha256 = hash(output);
      reused++;
    } else {
      originalPath = `${originalDir}/${selected.id}.${metadata.format}`;
      src = `/images/${section}-gallery/${selected.id}.webp`;
      const output = await sharp(bytes)
        .rotate()
        .resize({
          width: 2200,
          height: 1800,
          fit: "inside",
          withoutEnlargement: true,
        })
        .webp({ quality: 88, effort: 6 })
        .toBuffer({ resolveWithObject: true });
      await writeFile(originalPath, bytes);
      await writeFile(`public${src}`, output.data);
      width = output.info.width;
      height = output.info.height;
      outputBytes = output.data.length;
      sha256 = hash(output.data);
    }
    const preview = await sharp(await readFile(`public${src}`))
      .resize({ width: 32, height: 24, fit: "inside" })
      .webp({ quality: 40 })
      .toBuffer();
    assets.push({
      ...selected,
      serviceSlug: group.slug,
      sourceUrl,
      sourceVariant,
      src,
      width,
      height,
      blurDataURL: `data:image/webp;base64,${preview.toString("base64")}`,
      bytes: outputBytes,
      originalPath,
      originalWidth: metadata.width,
      originalHeight: metadata.height,
      originalSha256,
      sha256,
      capturedAt: new Date().toISOString(),
      rightsStatus: "client-presentation-approved",
      factStatus: "legacy-product-illustration",
      rightsNote:
        "KLOTZ legacy product gallery; may include manufacturer imagery. Presentation only. Public and third-party rights require separate confirmation.",
    });
  }
  console.log(`${group.slug}: ${group.items.length} images`);
}
await writeFile(manifestPath, JSON.stringify(assets, null, 2) + "\n");
console.log(
  JSON.stringify({
    assets: assets.length,
    reused,
    newFiles: assets.length - reused,
    previewFallbacks: assets
      .filter((a) => a.sourceVariant !== "original")
      .map((a) => a.id),
  }),
);

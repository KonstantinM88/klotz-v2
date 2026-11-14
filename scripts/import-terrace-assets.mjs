import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

const assets = [
  {
    id: "terrace-pergola",
    sourcePage: "https://www.klotz.mobi/produkte/pergola-mit-sonnentuch",
    displaySourceUrl:
      "https://www.klotz.mobi/sites/default/files/styles/juicebox_medium/public/pergola%20mit%20Sonnentuch_1_0.jpg?itok=hhqo02IZ",
  },
  {
    id: "terrace-markise",
    sourcePage: "https://www.klotz.mobi/markiesen",
    displaySourceUrl:
      "https://www.klotz.mobi/sites/default/files/styles/juicebox_medium/public/ODLA071105_WZ.jpg?itok=48k5wbiY",
  },
];

const manifestPath = "content/assets-manifest.json";
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
await mkdir("content/legacy/originals", { recursive: true });
const hash = (data) => createHash("sha256").update(data).digest("hex");

for (const asset of assets) {
  const originalUrl = asset.displaySourceUrl
    .replace(/\/styles\/[^/]+\/public\//, "/")
    .split("?")[0];
  let sourceUrl = originalUrl;
  let response = await fetch(sourceUrl);
  if (!response.ok) {
    sourceUrl = asset.displaySourceUrl;
    response = await fetch(sourceUrl);
  }
  if (!response.ok) throw new Error(`${asset.id}: HTTP ${response.status}`);
  const original = Buffer.from(await response.arrayBuffer());
  const metadata = await sharp(original).metadata();
  const result = await sharp(original)
    .rotate()
    .resize({ width: 1280, withoutEnlargement: true })
    .webp({ quality: 84, effort: 6 })
    .toBuffer({ resolveWithObject: true });
  const src = `/images/${asset.id}.webp`;
  const originalPath = `content/legacy/originals/${asset.id}.${metadata.format}`;
  await writeFile(originalPath, original);
  await writeFile(`public${src}`, result.data);
  const entry = {
    ...asset,
    sourceUrl,
    originalPath,
    src,
    width: result.info.width,
    height: result.info.height,
    bytes: result.data.length,
    originalSha256: hash(original),
    sha256: hash(result.data),
    capturedAt: new Date().toISOString(),
    rightsStatus: "client-presentation-approved",
    rightsNote:
      "Legacy product illustration used under the client's presentation permission. Public use, including manufacturer imagery, requires a separate rights release.",
    factStatus: "legacy-product-illustration",
  };
  const index = manifest.findIndex((item) => item.id === asset.id);
  if (index < 0) manifest.push(entry);
  else manifest[index] = entry;
  console.log(
    `${asset.id}: ${metadata.width}×${metadata.height} → ${result.info.width}×${result.info.height}, ${result.data.length} bytes`,
  );
}
await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

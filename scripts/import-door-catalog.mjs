import { readFile, writeFile, mkdir, access } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";

const base = "https://konfigurator.klotz.mobi";
const root = process.cwd();
const cache = path.join(root, ".lighthouseci", "door-catalog-import");
const originals = path.join(root, "content/legacy/originals/door-catalog");
const outputs = path.join(root, "public/images/door-catalog");
await Promise.all(
  [cache, originals, outputs].map((p) => mkdir(p, { recursive: true })),
);
const collections = [
  { id: "218", label: "Premium · Vision" },
  { id: "217", label: "Premium · Modern" },
  { id: "16", label: "Premium · Traditional" },
  { id: "289", label: "Design by Porsche Design Studio" },
  { id: "571", label: "Infinity" },
  { id: "75", label: "Ecos" },
  { id: "565", label: "Prime" },
  { id: "432", label: "Stil" },
  { id: "373", label: "Arco Rahmentüren" },
];
const pause = () => new Promise((r) => setTimeout(r, 150));
const clean = (v) =>
  String(v ?? "")
    .replace(/<[^>]*>/g, "")
    .replace(/\s+/g, " ")
    .trim();
const hash = (v) => crypto.createHash("sha256").update(v).digest("hex");
async function exists(file) {
  try {
    await access(file);
    return true;
  } catch {
    return false;
  }
}
async function json(url, key) {
  const file = path.join(cache, `${key}.json`);
  if (await exists(file)) return JSON.parse(await readFile(file, "utf8"));
  const response = await fetch(url);
  if (!response.ok) throw Error(`${response.status}: ${url}`);
  const data = await response.json();
  await writeFile(file, JSON.stringify(data));
  await pause();
  return data;
}
const models = new Map();
function add(item, family, collection) {
  if (!item.id || !item.link?.startsWith(`${base}/model-by-id/`))
    throw Error("Unexpected model record");
  const id = clean(item.id);
  const key = id.toLowerCase().replace(/[^a-z0-9_-]+/g, "-");
  const model = models.get(id) ?? {
    id,
    key,
    family: clean(family),
    title: clean(item.title),
    parentModel: clean(item.parentModel),
    collections: [],
    sourceUrl: item.link,
  };
  if (!model.collections.includes(collection.id))
    model.collections.push(collection.id);
  models.set(id, model);
  if (
    item.obostraniModel &&
    !Array.isArray(item.obostraniModel) &&
    item.obostraniModel.id
  )
    add(item.obostraniModel, family, collection);
}
for (const collection of collections) {
  const source = await json(
    `${base}/models-by-group/${collection.id}`,
    `group-${collection.id}`,
  );
  for (const group of source)
    if (Array.isArray(group.modeli))
      for (const item of group.modeli)
        add(item, group.grupa_title ?? group.naziv_grupe, collection);
    else add(group, group.id ?? group.title, collection);
  console.log(collection.label, source.length, "groups");
}
const entries = [...models.values()];
const manifest = [];
let cursor = 0;
let done = 0;
async function worker() {
  while (cursor < entries.length) {
    const model = entries[cursor++];
    const data = await json(model.sourceUrl, `model-${model.key}`);
    const bounds = {
      minWidth: Number(data.MinSirina),
      maxWidth: Number(data.MaxSirina),
      minHeight: Number(data.MinVisina),
      maxHeight: Number(data.MaxVisina),
    };
    model.dimensions = Object.values(bounds).every(
      (n) => Number.isFinite(n) && n > 0,
    )
      ? bounds
      : null;
    model.description = clean(
      data.translation_name || data.NazMat || model.title,
    );
    model.hasGlass =
      Array.isArray(data.aplikacije?.otvori_stakla) &&
      data.aplikacije.otvori_stakla.length > 0;
    const sourceUrl = `${base}/models/thumbs/${encodeURIComponent(model.id)}-thumb.png`;
    const original = path.join(originals, `${model.key}.png`);
    let buffer;
    if (await exists(original)) buffer = await readFile(original);
    else {
      const response = await fetch(sourceUrl);
      if (response.ok) {
        const downloaded = Buffer.from(await response.arrayBuffer());
        if (downloaded.length > 0) {
          await sharp(downloaded).metadata();
          buffer = downloaded;
          await writeFile(original, buffer);
        }
        await pause();
      } else if (response.status !== 404)
        throw Error(`${response.status}: ${sourceUrl}`);
    }
    if (buffer) {
      const info = await sharp(buffer).metadata();
      const output = await sharp(buffer).webp({ quality: 88 }).toBuffer();
      await writeFile(path.join(outputs, `${model.key}.webp`), output);
      model.image = {
        src: `/images/door-catalog/${model.key}.webp`,
        width: info.width,
        height: info.height,
      };
      manifest.push({
        id: model.id,
        sourceUrl,
        sourcePage: base,
        src: model.image.src,
        width: info.width,
        height: info.height,
        original: `content/legacy/originals/door-catalog/${model.key}.png`,
        originalSha256: hash(buffer),
        sha256: hash(output),
        bytes: output.length,
        rightsStatus: "client-presentation-approved",
        factStatus: "manufacturer-model-illustration",
      });
    } else model.image = null;
    if (++done % 25 === 0)
      console.log(`${done}/${entries.length} models imported`);
  }
}
await Promise.all([worker(), worker()]);
for (const model of entries) {
  model.imageModelId = model.image ? model.id : null;
  const parent = models.get(model.parentModel);
  if (!model.image && parent?.image) {
    model.image = parent.image;
    model.imageModelId = parent.id;
  }
}
const colorGroups = await json(`${base}/boje`, "colors");
const colors = [];
for (const group of colorGroups)
  for (const color of group.boje ?? []) {
    if (
      /^#[a-f0-9]{6}$/i.test(color.RAL_HEX ?? "") &&
      !colors.some((c) => c.id === color.SifMat)
    )
      colors.push({
        id: clean(color.SifMat),
        label: clean(color.translation_name || color.NazMat),
        group: clean(group.naziv_grupe),
        hex: color.RAL_HEX,
        ral: clean(color.RAL),
      });
  }
const forms = await json(`${base}/grundforms`, "forms");
const snapshot = {
  capturedAt: new Date().toISOString(),
  sourceUrl: base,
  status: "legacy",
  collections,
  models: entries,
  colors,
  formIds: forms.map((f) => f.id),
};
await writeFile(
  path.join(root, "content/door-catalog.json"),
  JSON.stringify(snapshot, null, 2) + "\n",
);
await writeFile(
  path.join(root, "content/door-catalog-assets-manifest.json"),
  JSON.stringify(
    {
      sourceUrl: base,
      capturedAt: snapshot.capturedAt,
      assets: manifest.sort((a, b) => a.id.localeCompare(b.id)),
      missingImages: entries.filter((m) => !m.image).map((m) => m.id),
    },
    null,
    2,
  ) + "\n",
);
console.log(
  JSON.stringify({
    models: entries.length,
    families: new Set(entries.map((m) => m.family)).size,
    images: manifest.length,
    colors: colors.length,
    missing: entries.filter((m) => !m.image).map((m) => m.id),
  }),
);

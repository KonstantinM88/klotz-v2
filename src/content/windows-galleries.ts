import selections from "../../content/windows-gallery-selections.json";
import snapshot from "../../content/windows-gallery-assets-manifest.json";
import type { ServiceGalleryContent } from "@/domain/content/service-gallery";
import { buildServiceGalleries, galleryArchiveNote } from "./service-galleries";

export const windowsGalleries = buildServiceGalleries(selections, snapshot);
const materialGroups: Record<
  string,
  { id: string; label: string; source: string }[]
> = {
  fenster: [
    {
      id: "kunststofffenster",
      label: "Kunststoff",
      source: "/kunststofffenster",
    },
    { id: "aluminiumfenster", label: "Aluminium", source: "/alufenster" },
    { id: "holzfenster", label: "Holz", source: "/holzfenster" },
    {
      id: "terrassentueren",
      label: "Terrassen- & Balkontüren",
      source: "/terrassentueren",
    },
  ],
  haustueren: [
    { id: "aluminiumhaustueren", label: "Aluminium", source: "/alutueren" },
    {
      id: "kunststoffhaustueren",
      label: "Kunststoff",
      source: "/kunststofftueren",
    },
    { id: "holzhaustueren", label: "Holz", source: "/holztueren" },
  ],
  innentueren: [
    { id: "cpl-tueren", label: "CPL", source: "/clp" },
    {
      id: "echtholz-furniertueren",
      label: "Echtholz & Furnier",
      source: "/echtholztueren",
    },
    { id: "weisslacktueren", label: "Weißlack", source: "/weisslacktueren" },
    { id: "glastueren", label: "Glas", source: "/glastueren" },
  ],
};
for (const [slug, gallery] of Object.entries(windowsGalleries)) {
  const groups = materialGroups[slug];
  gallery.groups = groups?.map(({ id, label }) => ({
    id,
    label,
    href: `#${id}`,
  }));
  gallery.items = gallery.items.map((item) => {
    const asset = snapshot.find((asset) => asset.id === item.id);
    if (!asset) throw Error(`Missing window gallery source: ${item.id}`);
    const group = groups?.find(
      (group) => new URL(asset.sourcePage).pathname === group.source,
    );
    if (groups && !group) throw Error(`Missing material group: ${item.id}`);
    return {
      ...item,
      groupId: group?.id,
      requestHref: `/projekt-anfragen?leistung=${slug}&bild=${item.id}`,
    };
  });
}
windowsGalleries.einbruchschutz!.note =
  "Gestaltungs- und Produktabbildungen aus dem KLOTZ-Archiv, darunter Herstellerabbildungen. Kein Nachweis einer Schutzklasse. Verfügbarkeit, Sicherheitsausstattung und geeignete Montage werden für das konkrete Element geprüft.";

export const windowsOverviewGallery: ServiceGalleryContent = {
  title: "So kann sich",
  accent: "Zuhause anfühlen.",
  lead: "Ein heller Eingang, ein Fenster mit Charakter, eine Tür mit warmer Holzzeichnung. Sechs ausgewählte Perspektiven zeigen, wie unterschiedlich Bauelemente einen Raum prägen. Entdecken Sie Ihre Richtung und besprechen Sie die passenden Details mit uns.",
  items: [
    windowsGalleries.haustueren!.items[0]!,
    windowsGalleries.innentueren!.items[0]!,
    windowsGalleries.fenster!.items[0]!,
    windowsGalleries.innentueren!.items[1]!,
    windowsGalleries.fenster!.items[1]!,
    windowsGalleries.rolllaeden!.items[0]!,
  ],
  note: galleryArchiveNote,
};

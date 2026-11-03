import { z } from "zod";

const contentStatusSchema = z.enum([
  "verified",
  "legacy",
  "draft",
  "demo",
  "blocked",
]);

const imageSchema = z.object({
  src: z
    .string()
    .refine((value) => value.startsWith("/images/") || URL.canParse(value)),
  alt: z.string(),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  sourceUrl: z.string().url(),
  rightsStatus: z.enum([
    "rights-check",
    "approved",
    "concept",
    "client-presentation-approved",
  ]),
});

export const siteSettingsSchema = z.object({
  name: z.string().min(1),
  legalName: z.string().min(1),
  tagline: z.string().min(1),
  canonicalUrl: z.string().url(),
  phoneDisplay: z.string().min(1),
  phoneHref: z.string().startsWith("tel:"),
  whatsappDisplay: z.string().min(1),
  whatsappHref: z.string().url(),
  email: z.email(),
  address: z.object({
    street: z.string().min(1),
    postalCode: z.string().min(1),
    city: z.string().min(1),
    district: z.string().min(1),
  }),
  serviceAreas: z.array(z.string().min(1)).min(1),
  status: contentStatusSchema,
});

export const serviceCategorySchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  description: z.string().min(1),
  href: z.string().startsWith("/"),
  image: imageSchema,
  status: contentStatusSchema,
});

export const projectSchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  category: z.string().min(1),
  href: z.string().startsWith("/"),
  region: z.string().min(1).optional(),
  summary: z.string().min(1),
  image: imageSchema,
  status: contentStatusSchema,
  factCompleteness: z.enum(["partial", "reviewed"]),
});

export const articleSchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  title: z.string().min(1),
  excerpt: z.string().min(1),
  href: z.string().startsWith("/"),
  topic: z.string().min(1),
  readingTime: z.string().min(1),
  updatedAt: z.iso.date(),
  status: contentStatusSchema,
  image: z
    .object({
      src: z.string().startsWith("/images/"),
      alt: z.string().min(1),
      caption: z.string().min(1),
    })
    .optional(),
});

export const offerPageSchema = z.object({
  id: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  href: z.string().startsWith("/angebote/"),
  kind: z.enum(["products", "funding"]),
  title: z.string().min(1),
  shortTitle: z.string().min(1),
  eyebrow: z.string().min(1),
  excerpt: z.string().min(1),
  lead: z.string().min(1),
  answer: z.string().min(1),
  metaTitle: z.string().min(1),
  metaDescription: z.string().min(1),
  priceSummary: z.string().min(1),
  inquiryTopic: z.enum(["Terrasse & Garten", "Fenster & Türen", "Zaun & Tor"]),
  image: z.object({
    src: z.string().startsWith("/images/angebote-2026/"),
    alt: z.string().min(1),
    width: z.number().positive().int(),
    height: z.number().positive().int(),
    caption: z.string().min(1),
  }),
  products: z.array(
    z.object({
      title: z.string().min(1),
      detail: z.string(),
      fromPriceEUR: z.number().nonnegative(),
      unit: z.string().min(1),
    }),
  ),
  sections: z
    .array(
      z.object({
        id: z.string().regex(/^[a-z0-9-]+$/),
        title: z.string().min(1),
        paragraphs: z.array(z.string().min(1)).min(1),
      }),
    )
    .min(3),
  checklist: z.array(z.string().min(1)).min(3),
  faq: z
    .array(z.object({ question: z.string().min(1), answer: z.string().min(1) }))
    .min(3),
  relatedLinks: z
    .array(
      z.object({ label: z.string().min(1), href: z.string().startsWith("/") }),
    )
    .min(1),
  sources: z
    .array(z.object({ title: z.string().min(1), url: z.string().url() }))
    .min(1),
  updatedAt: z.iso.date(),
  sourcePriceDate: z.string().min(1),
  validUntil: z.iso.date().optional(),
  status: contentStatusSchema,
  publication: z.object({
    contentApproved: z.boolean(),
    commercialApproved: z.boolean(),
    rightsApproved: z.boolean(),
  }),
});

const fallbackSiteUrl = "http://localhost:3000";

// Order: explicit configuration, then the Vercel production domain, then the
// current Vercel deployment. Vercel exposes the last two without protocol.
function configuredSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  const vercelHost =
    process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;
  return vercelHost ? `https://${vercelHost}` : fallbackSiteUrl;
}

export function getSiteUrl(): URL {
  try {
    return new URL(configuredSiteUrl());
  } catch {
    return new URL(fallbackSiteUrl);
  }
}

export function isIndexingAllowed(): boolean {
  // This client presentation contains drafts. Indexing needs a separate launch review.
  return false;
}

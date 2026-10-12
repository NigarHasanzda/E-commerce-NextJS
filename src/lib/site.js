/** Global site config — single source for brand, SEO, and shared copy */
export const siteName = "Panto";

export const siteDescription =
  "Modern minimalist furniture and interior pieces. Shop wooden, glass, and metal tables with fast delivery and curated design.";

export const siteFooterBlurb =
  "Curated furniture for calm, modern spaces—quality materials, simple shopping, and reliable delivery.";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "http://localhost:3000";

export const siteCopyrightYear = new Date().getFullYear();

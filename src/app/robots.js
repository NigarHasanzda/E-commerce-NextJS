import { siteUrl } from "@/lib/site";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/test", "/main"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}

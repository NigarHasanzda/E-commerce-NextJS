import { siteUrl } from "@/lib/site";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/products`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${siteUrl}/basket`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/favorites`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.3,
    },
  ];
}

import type { MetadataRoute } from "next";

type ChangeFrequency =
  | "yearly"
  | "monthly"
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "never";
// Helper function to create a sitemap entry
const createSitemapEntry = (
  url: string,
  changeFrequency: ChangeFrequency,
  priority: number
) => ({
  url,
  lastModified: new Date(),
  changeFrequency,
  priority,
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    createSitemapEntry("https://ajmalali.me", "yearly", 1),
    createSitemapEntry("https://ajmalali.me/services", "monthly", 0.8),
    createSitemapEntry("https://ajmalali.me/about", "monthly", 0.5),
    createSitemapEntry("https://ajmalali.me/works", "monthly", 0.5),
    createSitemapEntry("https://ajmalali.me/contact", "monthly", 0.5),
  ];
}

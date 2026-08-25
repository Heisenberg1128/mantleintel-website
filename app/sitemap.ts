import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/privacy", "/terms"].map((path) => ({ url: `https://mantleintel.com${path}`, lastModified: new Date(), changeFrequency: path ? "yearly" : "monthly", priority: path ? 0.4 : 1 }));
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/product/", "/how-it-works/", "/use-cases/", "/vision/", "/company/", "/contact/", "/privacy/", "/terms/"];
  return routes.map((path) => ({
    url: `https://mantleintel.com${path}`,
    lastModified: new Date(),
    changeFrequency: path ? "monthly" : "weekly",
    priority: path ? 0.7 : 1,
  }));
}

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/product/", "/how-it-works/", "/use-cases/", "/vision/", "/company/", "/contact/", "/privacy/", "/terms/"];
  return ["", "/zh-hk", "/zh-cn"].flatMap((prefix) => routes.map((path) => ({
      url: `https://mantleintel.com${prefix}${path || "/"}`,
      lastModified: new Date(),
      changeFrequency: path ? "monthly" as const : "weekly" as const,
      priority: path ? 0.7 : 1,
    })));
}

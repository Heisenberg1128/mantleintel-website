import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: "https://mantleintel.com/sitemap.xml", host: "https://mantleintel.com" };
}


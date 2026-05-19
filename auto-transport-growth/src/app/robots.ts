import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/*.pdf$"],
    },
    sitemap: "https://auto.vatsalvadia.com/sitemap.xml",
  };
}

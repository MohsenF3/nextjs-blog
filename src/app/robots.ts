import { SITE_URL } from "@/config";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    host: SITE_URL,
    sitemap: `${SITE_URL}/sitemap.xml`,
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  };
}

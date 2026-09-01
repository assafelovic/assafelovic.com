import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/writing", "/projects", "/about"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));
}

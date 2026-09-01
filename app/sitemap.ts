import type { MetadataRoute } from "next";
import { site } from "@/lib/data";
import { getPost, getPostSlugs } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/writing", "/media", "/about"].map(
    (path) => ({
      url: `${site.url}${path}`,
      lastModified: new Date(),
    })
  );
  const postPages = getPostSlugs().map((slug) => {
    const post = getPost(slug);
    return {
      url: `${site.url}/writing/${slug}`,
      lastModified: post?.date ? new Date(post.date) : new Date(),
    };
  });
  return [...pages, ...postPages];
}

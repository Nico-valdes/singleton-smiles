import type { MetadataRoute } from "next"
import { getAllServiceSlugs } from "@/lib/services"
import { absoluteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticPaths = ["", "/about", "/contact", "/services", "/new-patients", "/reviews", "/smile-gallery"]

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/contact" || path === "/services" ? 0.9 : 0.8,
  }))

  for (const slug of getAllServiceSlugs()) {
    entries.push({
      url: absoluteUrl(`/services/${slug}`),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    })
  }

  return entries
}

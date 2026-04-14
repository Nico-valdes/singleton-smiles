import type { Metadata } from "next"

/**
 * SEO / marca: una sola fuente de verdad para metadatos y datos estructurados.
 * En producción, define NEXT_PUBLIC_SITE_URL (p. ej. https://www.tudominio.com).
 */
export const siteConfig = {
  name: "Singleton Smiles",
  legalName: "Michael S. Singleton, DDS, PLLC",
  /** Título por defecto (home) cuando no aplica la plantilla de página */
  defaultTitle: "Singleton Smiles | Family & Cosmetic Dentistry in Saline, MI",
  titleTemplate: "%s | Singleton Smiles",
  defaultDescription:
    "Award-winning family and cosmetic dentistry in Saline, MI since 1985. Sedation & laser dentistry, implants, same-day crowns, braces, and gentle care. Call (734) 429-7415.",
  locale: "en_US",
  language: "en",
  twitterHandle: "@SingletonSmiles",
  phone: "+17344297415",
  phoneDisplay: "(734) 429-7415",
  email: "singletondds@gmail.com",
  address: {
    streetAddress: "1081 N. Ann Arbor St",
    addressLocality: "Saline",
    addressRegion: "MI",
    postalCode: "48176",
    addressCountry: "US",
  },
  geo: {
    latitude: 42.17858,
    longitude: -83.78469,
  },
  sameAs: [
    "https://www.facebook.com/SingletonSmiles",
    "https://www.instagram.com/singletonsmiles/",
    "https://x.com/SingletonSmiles",
  ],
  /**
   * Imagen para Open Graph / Twitter / JSON-LD (bajo /public).
   * Debe ser marca (logo), no fotos de pacientes ni miniaturas de vídeo, para que los enlaces no muestren caras ajenas en la vista previa.
   */
  ogImage: "/images/Singleton-Smiles-Logo-red-3-768x480.jpg",
  ogImageAlt: "Singleton Smiles — family and cosmetic dentistry in Saline, Michigan",
  ogImageWidth: 768,
  ogImageHeight: 480,
} as const

/**
 * URL to leave a Google review (Google Business “Ask for reviews” / review form).
 * Set `NEXT_PUBLIC_GOOGLE_REVIEW_URL` to the link from your Business Profile; otherwise falls back to Maps search for the practice.
 */
export const googleReviewUrl =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL?.trim()) ||
  "https://www.google.com/maps/search/?api=1&query=Singleton+Smiles+1081+N+Ann+Arbor+St+Saline+MI+48176"

export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")
  if (fromEnv) return fromEnv
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`
  return "http://localhost:3000"
}

export function absoluteUrl(path = ""): string {
  const base = getSiteUrl()
  if (!path || path === "/") return base
  const p = path.startsWith("/") ? path : `/${path}`
  return `${base}${p}`
}

/** Misma imagen y dimensiones en todas las rutas que definen Open Graph (evita que el merge de metadatos deje `og:image` vacío). */
export const defaultOpenGraphImages = [
  {
    url: siteConfig.ogImage,
    width: siteConfig.ogImageWidth,
    height: siteConfig.ogImageHeight,
    alt: siteConfig.ogImageAlt,
  },
] as const

/** Metadatos coherentes por página: canonical, Open Graph y Twitter alineados con el título. */
export function createPageMetadata(
  path: string,
  opts: { title: string; description: string },
  options?: { noIndex?: boolean },
): Metadata {
  const fullTitle = `${opts.title} | ${siteConfig.name}`
  return {
    title: opts.title,
    description: opts.description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    ...(options?.noIndex
      ? {
          robots: {
            index: false,
            follow: true,
            googleBot: {
              index: false,
              follow: true,
            },
          },
        }
      : {}),
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      title: fullTitle,
      description: opts.description,
      images: [...defaultOpenGraphImages],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: opts.description,
      images: [siteConfig.ogImage],
      creator: siteConfig.twitterHandle,
    },
  }
}

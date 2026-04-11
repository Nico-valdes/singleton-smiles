import { absoluteUrl, siteConfig } from "@/lib/seo"

/**
 * Datos estructurados Dentist + WebSite para rich results y coherencia de marca.
 */
export function OrganizationJsonLd() {
  const url = absoluteUrl("/")

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}#website`,
        url,
        name: siteConfig.name,
        description: siteConfig.defaultDescription,
        inLanguage: siteConfig.language,
        publisher: { "@id": `${url}#dentist` },
      },
      {
        "@type": "Dentist",
        "@id": `${url}#dentist`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url,
        image: absoluteUrl(siteConfig.ogImage),
        telephone: siteConfig.phone,
        email: siteConfig.email,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.streetAddress,
          addressLocality: siteConfig.address.addressLocality,
          addressRegion: siteConfig.address.addressRegion,
          postalCode: siteConfig.address.postalCode,
          addressCountry: siteConfig.address.addressCountry,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteConfig.geo.latitude,
          longitude: siteConfig.geo.longitude,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Monday",
            opens: "07:00",
            closes: "19:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
            opens: "07:00",
            closes: "18:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Friday",
            opens: "07:00",
            closes: "15:00",
          },
        ],
        sameAs: [...siteConfig.sameAs],
      },
    ],
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  )
}

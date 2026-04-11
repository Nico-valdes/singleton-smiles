import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteShell } from "@/components/site-shell"
import { Button } from "@/components/ui/button"
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services"
import { absoluteUrl, siteConfig } from "@/lib/seo"
import { ArrowLeft, ArrowRight } from "lucide-react"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) {
    return { title: "Not found", robots: { index: false, follow: false } }
  }
  const path = `/services/${slug}`
  const fullTitle = `${service.title} | ${siteConfig.name}`
  return {
    title: service.title,
    description: service.shortDescription,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: absoluteUrl(path),
      siteName: siteConfig.name,
      title: fullTitle,
      description: service.shortDescription,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: service.shortDescription,
      images: [siteConfig.ogImage],
      creator: siteConfig.twitterHandle,
    },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  return (
    <SiteShell>
      <article>
        <section className="py-12 lg:py-16 bg-slate-50/50 border-b border-slate-100">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              All services
            </Link>
            <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">Service</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-slate-900 mb-6 text-balance">{service.title}</h1>
            <p className="text-xl text-slate-600 leading-relaxed">{service.shortDescription}</p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="max-w-3xl mx-auto px-6 lg:px-8 space-y-6 text-slate-600 leading-relaxed">
            {service.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="max-w-3xl mx-auto px-6 lg:px-8 mt-12 flex flex-wrap gap-4">
            <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">
                Request an appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="tel:+17344297415">Call (734) 429-7415</Link>
            </Button>
          </div>
        </section>
      </article>
    </SiteShell>
  )
}

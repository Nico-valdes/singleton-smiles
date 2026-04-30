import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteShell } from "@/components/site-shell"
import { Button } from "@/components/ui/button"
import { getAllServiceSlugs, getServiceBySlug } from "@/lib/services"
import { absoluteUrl, defaultOpenGraphImages, siteConfig } from "@/lib/seo"
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
      images: [...defaultOpenGraphImages],
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
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              All services
            </Link>
            <p className="mb-4 text-sm font-medium tracking-widest text-primary uppercase">Service</p>
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
            <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Request an appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-primary/30 hover:border-primary/60 hover:bg-primary/5 hover:text-primary"
            >
              <Link href="tel:+17344297415">Call (734) 429-7415</Link>
            </Button>
          </div>
        </section>
      </article>
    </SiteShell>
  )
}

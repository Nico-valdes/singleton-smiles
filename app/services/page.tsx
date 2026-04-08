import type { Metadata } from "next"
import Link from "next/link"
import { SiteShell } from "@/components/site-shell"
import { services } from "@/lib/services"
import {
  Moon,
  Zap,
  Shield,
  Wrench,
  CircleDot,
  Clock,
  Sparkles,
  Smile,
  Heart,
  Scissors,
  type LucideIcon,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Dental Services | Singleton Smiles",
  description:
    "Sedation dentistry, laser dentistry, preventative care, implants, same-day crowns, cosmetic dentistry, braces, extractions, and sleep apnea treatment in Saline, MI.",
}

const iconBySlug: Record<string, LucideIcon> = {
  "sedation-dentistry": Moon,
  "laser-dentistry": Zap,
  preventative: Shield,
  restorative: Wrench,
  implants: CircleDot,
  "same-day-crowns": Clock,
  cosmetic: Sparkles,
  "orthodontic-braces": Smile,
  extractions: Scissors,
  "sleep-apnea": Heart,
}

function ServiceIcon({ slug }: { slug: string }) {
  const Icon = iconBySlug[slug] ?? Sparkles
  return (
    <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300">
      <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors" />
    </div>
  )
}

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="py-16 lg:py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">Dental services</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-6 text-balance max-w-3xl">
            Complete care for your family
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            From preventative visits to advanced cosmetic and restorative treatment, we combine modern technology with a
            gentle, patient-first approach.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
              >
                <ServiceIcon slug={service.slug} />
                <h2 className="font-serif text-xl text-slate-900 mb-3">{service.menuLabel}</h2>
                <p className="text-slate-600 leading-relaxed">{service.homeTeaser}</p>
                <span className="mt-6 inline-block text-sm font-medium text-blue-600 group-hover:underline">
                  Learn more
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

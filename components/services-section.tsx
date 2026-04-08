import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"
import { services } from "@/lib/services"
import { RevealOnView } from "@/components/reveal-on-view"

export function ServicesSection() {
  return (
    <section id="services" className="border-t border-slate-100 bg-white py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 xl:gap-16">
          <RevealOnView className="mb-10 lg:sticky lg:top-28 lg:col-span-4 lg:mb-0 lg:self-start">
            <p className="mb-3 text-sm font-medium tracking-widest text-blue-600 uppercase">Services</p>
            <h2 className="mb-4 font-serif text-2xl leading-tight text-balance text-slate-900 sm:text-3xl md:text-4xl">
              Everything you need, one trusted team
            </h2>
            <p className="text-[15px] leading-relaxed text-slate-600">
              General, cosmetic, and advanced care in Saline. Each line links to a full page with more detail.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-600 transition-[gap,opacity] duration-300 hover:gap-3 hover:opacity-90"
            >
              Full services overview
              <ArrowRight className="size-4" />
            </Link>
          </RevealOnView>

          <div className="lg:col-span-8">
            <ul className="divide-y divide-slate-200 border-t border-slate-200">
              {services.map((s, index) => (
                <li key={s.slug}>
                  <RevealOnView delayMs={index * 45}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group premium-hover -mx-1 flex flex-col gap-2 rounded-xl border border-transparent px-3 py-4 transition-colors hover:border-slate-100 hover:bg-slate-50/80 active:bg-slate-100 sm:flex-row sm:items-center sm:gap-6 sm:py-6 md:-mx-2 md:px-2"
                    >
                      <span className="flex w-full items-start justify-between gap-3 sm:w-auto sm:justify-start">
                        <span className="font-serif text-base text-slate-900 transition-colors duration-300 group-hover:text-blue-700 sm:basis-52 sm:text-lg md:text-xl lg:basis-56">
                          {s.menuLabel}
                        </span>
                        <ChevronRight
                          className="size-5 shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-blue-600 sm:hidden"
                          aria-hidden
                        />
                      </span>
                      <span className="text-sm leading-snug text-slate-500 sm:min-w-0 sm:flex-1">{s.homeTeaser}</span>
                      <ArrowUpRight className="hidden size-4 shrink-0 text-slate-300 transition-[color,transform] duration-300 group-hover:translate-x-px group-hover:-translate-y-px group-hover:text-blue-500 sm:block" />
                    </Link>
                  </RevealOnView>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

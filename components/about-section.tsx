import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { RevealOnView } from "@/components/reveal-on-view"

const stats = [
  { value: "40+", label: "Years of Experience" },
  { value: "10K+", label: "Happy Patients" },
  { value: "5.0", label: "Google Rating" },
  { value: "1", label: "Visit for Most Procedures" },
]

export function AboutSection() {
  return (
    <section id="about" className="overflow-x-hidden bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <RevealOnView distance="md" subtleBlur className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
            <div className="premium-hover relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-blue-900/10 sm:rounded-3xl">
              <Image
                src="/images/chad.png"
                alt="Dr. Michael Singleton, DDS - Founder of Singleton Smiles"
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] motion-reduce:hover:scale-100"
              />
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 hidden h-full w-full rounded-2xl bg-blue-50 sm:rounded-3xl lg:-bottom-8 lg:-right-8 lg:block" />
          </RevealOnView>

          <RevealOnView delayMs={90} className="min-w-0">
            <p className="mb-3 text-sm font-medium tracking-widest text-blue-600 uppercase sm:mb-4">
              Meet Dr. Singleton
            </p>
            <h2 className="mb-6 font-serif text-3xl leading-tight text-slate-900 sm:text-4xl md:text-5xl">
              {"Dentistry Isn't Just My Profession — It's My Passion"}
            </h2>
            <div className="mb-10 space-y-4 leading-relaxed text-slate-600">
              <p>
                Since opening my doors in 1985, I&apos;ve dedicated myself to delivering exceptional dental care built
                on trust, compassion, and long-lasting relationships. I stay ahead of the curve through continuous
                training and cutting-edge technologies.
              </p>
              <p>
                What first drew me to Saline years ago wasn&apos;t just the place — it was the people. The warm,
                close-knit community made it feel like home. I&apos;m honored that generations of patients have placed
                their trust in me, and my very first patient remains with me to this day.
              </p>
              <p>
                Over the years, the &quot;Singleton Smile&quot; has become renowned far beyond Saline. Patients have
                traveled from across the country — and around the world — for the care they know they can trust.
              </p>
            </div>

            <div className="mb-8 grid grid-cols-2 gap-4 border-t border-slate-100 pt-8 sm:grid-cols-4 sm:gap-6 sm:pt-10">
              {stats.map((stat, index) => (
                <RevealOnView key={stat.label} delayMs={index * 55} className="text-left">
                  <p className="mb-1 font-serif text-3xl text-slate-900 lg:text-4xl">{stat.value}</p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </RevealOnView>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center font-medium text-blue-600 underline-offset-4 transition-[color,transform] duration-300 hover:translate-x-0.5 hover:underline motion-reduce:hover:translate-x-0"
            >
              Learn more about our practice
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </RevealOnView>
        </div>
      </div>
    </section>
  )
}

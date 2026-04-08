import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { teamGroupsHome } from "@/lib/team"
import { RevealOnView } from "@/components/reveal-on-view"

export function TeamSection() {
  return (
    <section id="team" className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnView className="mb-12 max-w-2xl sm:mb-16 lg:mb-20">
          <p className="mb-3 text-sm font-medium tracking-widest text-blue-600 uppercase sm:mb-4">Our Team</p>
          <h2 className="mb-5 font-serif text-3xl text-slate-900 sm:mb-6 sm:text-4xl lg:text-6xl">
            Award-Winning Dental Team
          </h2>
          <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
            Meet our team of highly skilled professionals committed to excellence in patient care. Many staff members
            have been part of this journey for over a decade.
          </p>
        </RevealOnView>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamGroupsHome.map((group, index) => (
            <RevealOnView key={group.title} delayMs={index * 70}>
              <div className="group flex flex-col">
                <div className="premium-hover relative mb-6 aspect-[3/4] overflow-hidden rounded-2xl shadow-xl shadow-slate-900/10">
                  <Image
                    src={group.image}
                    alt={group.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/55 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                </div>
                <h3 className="mb-2 font-serif text-2xl text-slate-900">{group.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">{group.description}</p>
                <p className="text-sm leading-snug text-slate-500">
                  <span className="font-medium text-slate-700">Team: </span>
                  {group.namesLine}
                </p>
              </div>
            </RevealOnView>
          ))}
        </div>

        <RevealOnView delayMs={100} className="mt-16 text-center">
          <Link
            href="/about#team"
            className="inline-flex items-center font-medium text-blue-600 underline-offset-4 transition-[color,transform] duration-300 hover:translate-x-0.5 hover:underline motion-reduce:hover:translate-x-0"
          >
            Meet the entire team
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </RevealOnView>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { RevealOnView } from "@/components/reveal-on-view"

const features = [
  {
    number: "01",
    title: "Insurance & Financing",
    description:
      "Most plans welcome. 0% financing options discussed up front so you can focus on your care.",
    highlights: ["Most insurance accepted", "Interest-free financing", "Flexible payment plans"],
  },
  {
    number: "02",
    title: "Gentle Sedation",
    description: "Nitrous and oral options when you need calm, not judgment. Designed for anxious patients.",
    highlights: ["IV sedation available", "Anxiety-free experience", "You stay in control"],
  },
  {
    number: "03",
    title: "Office Hours",
    description: "Extended hours to fit your schedule. Same-day visits when available.",
    highlights: ["Mon 7am-7pm", "Tue-Thu 7am-6pm", "Fri 7am-3pm, Alt Sat 7am-12pm"],
  },
]

const quickFacts = [
  { question: "Are you tired of multiple visits?", answer: "Most procedures are completed in one visit!" },
  { question: "Do you have a fear of the dentist?", answer: "We offer sedation dentistry." },
  { question: "Do you hate needles or the dental drill?", answer: "We can complete your procedure without either!" },
  { question: "Are finances a concern for you?", answer: "We offer interest-free financing!" },
]

export function FeaturesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnView className="mb-12 text-center sm:mb-16 lg:mb-20">
          <p className="mb-3 text-sm font-medium tracking-widest text-blue-600 uppercase sm:mb-4">
            Why Choose Singleton Smiles
          </p>
          <h2 className="mx-auto mb-5 max-w-xl font-serif text-3xl text-balance text-slate-900 sm:max-w-3xl sm:mb-6 sm:text-4xl md:max-w-4xl md:text-5xl lg:max-w-5xl lg:text-6xl">
            Whatever Has Kept You Away
          </h2>
          <p className="mx-auto max-w-2xl px-1 text-base text-slate-600 sm:text-lg">
            Is exactly why you should call us today. We recognize that every patient has unique needs.
          </p>
        </RevealOnView>

        <div className="mb-12 grid gap-4 sm:mb-16 sm:grid-cols-2 sm:gap-6">
          {quickFacts.map((fact, index) => (
            <RevealOnView key={fact.question} delayMs={index * 60}>
              <div className="premium-hover rounded-2xl border border-slate-100 bg-slate-50/50 p-5 sm:p-6">
                <p className="mb-2 font-medium text-slate-900">{fact.question}</p>
                <p className="text-blue-600">{fact.answer}</p>
              </div>
            </RevealOnView>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {features.map((feature, index) => (
            <RevealOnView key={feature.title} delayMs={index * 75}>
              <div className="premium-hover h-full rounded-2xl border border-slate-100 bg-slate-50/50 p-6 sm:p-8 lg:p-10">
                <span className="mb-6 inline-block font-serif text-5xl text-blue-200 transition-colors duration-500 group-hover:text-blue-100">
                  {feature.number}
                </span>
                <h3 className="mb-4 font-serif text-2xl text-slate-900">{feature.title}</h3>
                <p className="mb-6 leading-relaxed text-slate-600">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 transition-transform duration-300">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <span className="text-slate-700">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnView>
          ))}
        </div>

        <RevealOnView delayMs={100} className="mt-14 sm:mt-16">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <div className="mb-6 text-center sm:mb-8">
                  <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase">Take a look inside</p>
                  <h3 className="mt-2 font-serif text-2xl text-slate-900 sm:text-3xl">Meet Singleton Smiles</h3>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                    Tour our office and see how we make every visit calm, modern, and patient-first.
                  </p>
                </div>
                <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg shadow-slate-900/10">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/9aUWmr1b5LE"
                    title="Singleton Smiles office tour"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>

              <div>
                <div className="mb-6 text-center sm:mb-8">
                  <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase">Patient Comfort</p>
                  <h3 className="mt-2 font-serif text-2xl text-slate-900 sm:text-3xl">Sedation Dentistry</h3>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-slate-600 sm:text-base">
                    Discover how we help anxious patients feel relaxed and completely at ease during their visits.
                  </p>
                </div>
                <div className="aspect-video w-full overflow-hidden rounded-2xl shadow-lg shadow-slate-900/10">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube-nocookie.com/embed/JXb_qAKY7rA"
                    title="Singleton Smiles - Sedation Dentistry"
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </RevealOnView>

        <RevealOnView delayMs={120} className="mt-16 text-center">
          <Link
            href="/new-patients"
            className="inline-flex items-center font-medium text-blue-600 underline-offset-4 transition-[color,transform] duration-300 hover:translate-x-0.5 hover:underline motion-reduce:hover:translate-x-0"
          >
            What to expect as a new patient
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </RevealOnView>
      </div>
    </section>
  )
}

import { createPageMetadata } from "@/lib/seo"
import Link from "next/link"
import { SiteShell } from "@/components/site-shell"
import { reviews } from "@/lib/reviews"
import { YoutubeTestimonialPreview } from "@/components/youtube-testimonial-preview"
import { Star, ArrowRight } from "lucide-react"

export const metadata = createPageMetadata("/reviews", {
  title: "Patient Testimonials",
  description:
    "Watch and read patient testimonials for Singleton Smiles — trusted family and cosmetic dentistry in Saline, MI with a 5.0 Google rating.",
})

export default function PatientTestimonialsPage() {
  return (
    <SiteShell>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <header className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-medium tracking-widest text-blue-600 uppercase">Patient testimonials</p>
            <h1 className="mb-6 font-serif text-4xl text-slate-900 sm:text-5xl">Hear from our patients</h1>
            <p className="text-lg leading-relaxed text-slate-600">
              These are real patient stories — many with a short video interview on YouTube alongside a fuller written
              testimonial below.
            </p>
          </header>

          <div className="mb-16 flex flex-wrap items-center gap-8 rounded-2xl border border-slate-100 bg-slate-50 p-8">
            <div className="flex items-center gap-2">
              <span className="font-serif text-4xl text-slate-900">5.0</span>
              <Star className="h-8 w-8 fill-amber-400 text-amber-400" />
            </div>
            <div className="hidden h-10 w-px bg-slate-200 sm:block" />
            <p className="max-w-xl text-slate-600">
              Thank you for trusting our team with your care. Below, patients share what their experience has meant to
              them in their own words.
            </p>
          </div>

          <ol className="space-y-12 lg:space-y-16">
            {reviews.map((t) => (
              <li key={t.id}>
                <article className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-900/5 transition-colors hover:border-blue-100">
                  <div
                    className={
                      t.videoUrl
                        ? "grid gap-8 p-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:items-start lg:gap-10 lg:p-10 xl:grid-cols-[minmax(0,400px)_1fr]"
                        : "p-8 lg:p-10"
                    }
                  >
                    {t.videoUrl ? (
                      <div className="shrink-0 lg:pt-1">
                        <YoutubeTestimonialPreview
                          videoUrl={t.videoUrl}
                          label={`Watch ${t.name}'s video testimonial on YouTube`}
                        />
                        <p className="mt-3 text-center text-xs text-slate-500 lg:text-left">
                          Opens on YouTube in a new tab
                        </p>
                      </div>
                    ) : null}

                    <div className="min-w-0">
                      <div className="mb-4 flex items-center gap-1">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <h2 className="mb-2 font-serif text-xl text-slate-900 sm:text-2xl">{t.headline}</h2>
                      <p className="mb-5 text-sm font-medium text-blue-600">
                        {t.name} · {t.role}
                      </p>
                      <p className="leading-relaxed text-slate-600">{t.content}</p>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ol>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-medium text-blue-600 underline-offset-4 hover:underline"
            >
              Ready to schedule?
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

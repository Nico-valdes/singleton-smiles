import type { Metadata } from "next"
import Link from "next/link"
import { SiteShell } from "@/components/site-shell"
import { reviews } from "@/lib/reviews"
import { Star, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Patient Reviews | Singleton Smiles",
  description:
    "Read patient stories and reviews for Singleton Smiles — trusted dental care in Saline, MI with a 5.0 Google rating.",
}

export default function ReviewsPage() {
  return (
    <SiteShell>
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">Patient testimonials</p>
            <h1 className="font-serif text-4xl sm:text-5xl text-slate-900 mb-6">Patient stories</h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Real experiences from patients who trust Singleton Smiles with their oral health and their confidence.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-8 mb-16 p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="flex items-center gap-2">
              <span className="font-serif text-4xl text-slate-900">5.0</span>
              <Star className="h-8 w-8 fill-amber-400 text-amber-400" />
            </div>
            <div className="h-10 w-px bg-slate-200 hidden sm:block" />
            <p className="text-slate-600 max-w-xl">
              Thank you to our patients for the trust you place in our team. Below are a few of the stories people have
              shared about care at Singleton Smiles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {reviews.map((r) => (
              <article
                key={r.id}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm shadow-slate-900/5 hover:border-blue-100 transition-colors"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(r.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h2 className="font-serif text-xl text-slate-900 mb-2">{r.headline}</h2>
                <p className="text-sm font-medium text-blue-600 mb-4">
                  {r.name} · {r.role}
                </p>
                <p className="text-slate-600 leading-relaxed">{r.content}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline underline-offset-4"
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

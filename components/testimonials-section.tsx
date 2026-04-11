"use client"

import Link from "next/link"
import { Star, ArrowRight } from "lucide-react"
import { RevealOnView } from "@/components/reveal-on-view"
import { homepageSpotlightIds, reviews, type Review } from "@/lib/reviews"
import { YoutubeTestimonialPreview } from "@/components/youtube-testimonial-preview"

const homepageTestimonials = homepageSpotlightIds
  .map((id) => reviews.find((r) => r.id === id))
  .filter((r): r is Review & { videoUrl: string } => r != null && Boolean(r.videoUrl))

function TestimonialCard({ testimonial }: { testimonial: Review & { videoUrl: string } }) {
  const quote = testimonial.cardQuote ?? testimonial.content

  return (
    <div className="premium-hover flex h-full min-h-0 flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-white/25 hover:shadow-lg hover:shadow-black/20 sm:p-6 lg:p-8 motion-reduce:hover:translate-y-0">
      <div className="mb-4 shrink-0">
        <YoutubeTestimonialPreview
          videoUrl={testimonial.videoUrl}
          label={`Watch ${testimonial.name}'s video testimonial on YouTube`}
          className="group relative mb-4 block aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900 shadow-md ring-1 ring-black/20 transition-[box-shadow,transform] hover:border-white/25 hover:shadow-lg motion-reduce:transition-none"
        />
      </div>

      <div className="mb-4 flex shrink-0 items-center gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      <blockquote className="min-h-0 flex-1 text-sm leading-relaxed text-white/90 lg:text-base">
        &quot;{quote}&quot;
      </blockquote>

      <div className="mt-6 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
            <span className="text-sm font-medium text-blue-400">{testimonial.name.charAt(0)}</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-white">{testimonial.name}</p>
            <p className="text-xs text-slate-400">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-slate-900 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnView className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-sm font-medium tracking-widest text-blue-400 uppercase sm:mb-4">Patient testimonials</p>
          <h2 className="mb-5 font-serif text-3xl text-balance text-white sm:mb-6 sm:text-4xl md:text-5xl">
            What our patients say
          </h2>
          <p className="mx-auto max-w-2xl px-2 text-sm text-slate-400 sm:text-base">
            Three stories from patients who trust us with their smiles — tap a thumbnail to watch on YouTube. You can
            read and watch the rest on our testimonials page.
          </p>
        </RevealOnView>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-6 border-b border-white/10 pb-12 sm:mb-16 sm:gap-8 sm:pb-16 lg:gap-16">
          <RevealOnView delayMs={0}>
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center gap-1">
                <span className="font-serif text-4xl text-white lg:text-5xl">5.0</span>
                <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-sm text-slate-400">Google rating</p>
            </div>
          </RevealOnView>
          <div className="hidden h-12 w-px bg-white/10 sm:block" />
          <RevealOnView delayMs={80}>
            <div className="text-center">
              <p className="mb-2 font-serif text-4xl text-white lg:text-5xl">150+</p>
              <p className="text-sm text-slate-400">Google reviews</p>
            </div>
          </RevealOnView>
          <div className="hidden h-12 w-px bg-white/10 sm:block" />
          <RevealOnView delayMs={160}>
            <div className="text-center">
              <p className="mb-2 font-serif text-4xl text-white lg:text-5xl">40+</p>
              <p className="text-sm text-slate-400">Years of trust</p>
            </div>
          </RevealOnView>
        </div>

        <div className="grid auto-rows-fr items-stretch gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {homepageTestimonials.map((testimonial, index) => (
            <RevealOnView key={testimonial.id} delayMs={index * 65} className="h-full min-h-0">
              <TestimonialCard testimonial={testimonial} />
            </RevealOnView>
          ))}
        </div>

        <RevealOnView delayMs={120} className="mt-12 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center font-medium text-blue-400 transition-[color,transform] duration-300 hover:translate-x-0.5 hover:text-blue-300 motion-reduce:hover:translate-x-0"
          >
            View all patient testimonials
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </RevealOnView>
      </div>
    </section>
  )
}

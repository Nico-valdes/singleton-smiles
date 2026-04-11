"use client"

import Link from "next/link"
import { Star, ArrowRight, Play } from "lucide-react"
import { RevealOnView } from "@/components/reveal-on-view"

type Testimonial = {
  name: string
  role: string
  content: string
  rating: number
  /** Optional patient story on YouTube */
  videoUrl?: string
}

const testimonials: Testimonial[] = [
  {
    name: "Alex",
    role: "Patient for 30+ years",
    content: "For more than 30 years, I've trusted Singleton Smiles for every step of my dental care journey. The warm environment and exceptional care truly set them apart.",
    rating: 5,
    videoUrl: "https://www.youtube.com/watch?v=XFjbhGgav_s",
  },
  {
    name: "Sophia",
    role: "Patient for 10 years",
    content: "Dr. Singleton provided a second opinion that saved me from an unnecessary crown. My entire family trusts Dr. Singleton and his team completely.",
    rating: 5,
    videoUrl: "https://www.youtube.com/watch?v=dZ6FBgODx0Y",
  },
  {
    name: "Gina",
    role: "Patient",
    content: "After Dr. Singleton fixed my tooth, I felt cared for and confident in my smile. The team ensured my comfort from start to finish.",
    rating: 5,
    videoUrl: "https://www.youtube.com/watch?v=8Ny6dAHs9IQ",
  },
  {
    name: "Arie",
    role: "Patient for 8+ years",
    content: "From the moment I first walked in over 8 years ago, the team made sure I felt comfortable, cared for, and confident in my beautiful new smile.",
    rating: 5,
    videoUrl: "https://www.youtube.com/watch?v=Yvn7RbLZyOI",
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="premium-hover flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-white/25 hover:shadow-lg hover:shadow-black/20 sm:p-6 lg:p-8 motion-reduce:hover:translate-y-0">
      {/* Rating */}
      <div className="mb-4 flex shrink-0 items-center gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote — grows so cards in the same row share height */}
      <blockquote className="min-h-0 flex-1 text-sm leading-relaxed text-white/90 lg:text-base">
        &quot;{testimonial.content}&quot;
      </blockquote>

      {/* Author + video — aligned to bottom of the card */}
      <div className="mt-6 shrink-0 space-y-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
            <span className="text-sm font-medium text-blue-400">{testimonial.name.charAt(0)}</span>
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-white">{testimonial.name}</p>
            <p className="text-xs text-slate-400">{testimonial.role}</p>
          </div>
        </div>

        {testimonial.videoUrl ? (
          <a
            href={testimonial.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex max-w-full items-center gap-1.5 rounded-md py-0.5 text-[11px] font-medium text-slate-500 transition-colors hover:text-slate-300 sm:text-xs"
            aria-label={`Watch ${testimonial.name}'s story on YouTube (opens in a new tab)`}
          >
            <Play className="h-3 w-3 shrink-0 fill-current opacity-70" aria-hidden />
            <span className="truncate underline-offset-2 hover:underline">
              Hear {testimonial.name}&apos;s story
            </span>
          </a>
        ) : null}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-slate-900 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <RevealOnView className="mb-12 text-center sm:mb-16">
          <p className="mb-3 text-sm font-medium tracking-widest text-blue-400 uppercase sm:mb-4">
            Patient Stories
          </p>
          <h2 className="mb-5 font-serif text-3xl text-balance text-white sm:mb-6 sm:text-4xl md:text-5xl">
            What Our Patients Say
          </h2>
          <p className="mx-auto max-w-2xl px-2 text-sm text-slate-400 sm:text-base">
            Real experiences from real patients who trust us with their smiles
          </p>
        </RevealOnView>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-6 border-b border-white/10 pb-12 sm:mb-16 sm:gap-8 sm:pb-16 lg:gap-16">
          <RevealOnView delayMs={0}>
            <div className="text-center">
              <div className="mb-2 flex items-center justify-center gap-1">
                <span className="font-serif text-4xl text-white lg:text-5xl">5.0</span>
                <Star className="h-6 w-6 fill-amber-400 text-amber-400" />
              </div>
              <p className="text-sm text-slate-400">Google Rating</p>
            </div>
          </RevealOnView>
          <div className="hidden h-12 w-px bg-white/10 sm:block" />
          <RevealOnView delayMs={80}>
            <div className="text-center">
              <p className="mb-2 font-serif text-4xl text-white lg:text-5xl">150+</p>
              <p className="text-sm text-slate-400">Reviews</p>
            </div>
          </RevealOnView>
          <div className="hidden h-12 w-px bg-white/10 sm:block" />
          <RevealOnView delayMs={160}>
            <div className="text-center">
              <p className="mb-2 font-serif text-4xl text-white lg:text-5xl">40+</p>
              <p className="text-sm text-slate-400">Years of Trust</p>
            </div>
          </RevealOnView>
        </div>

        <div className="grid auto-rows-fr items-stretch gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
          {testimonials.map((testimonial, index) => (
            <RevealOnView key={testimonial.name} delayMs={index * 65} className="h-full min-h-0">
              <TestimonialCard testimonial={testimonial} />
            </RevealOnView>
          ))}
        </div>

        <RevealOnView delayMs={120} className="mt-12 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center font-medium text-blue-400 transition-[color,transform] duration-300 hover:translate-x-0.5 hover:text-blue-300 motion-reduce:hover:translate-x-0"
          >
            Read more patient stories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </RevealOnView>
      </div>
    </section>
  )
}

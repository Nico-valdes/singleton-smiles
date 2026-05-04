"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Phone, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-background">
      <div className="absolute inset-y-0 right-0 w-full lg:w-[56%]">
        <Image
          src="/images/capilla.png"
          alt="Singleton Smiles clinic exterior — a warm brick building at golden hour"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 56vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-background/10 lg:via-background/30 lg:to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background/60 to-transparent" />
      </div>

      <div
        className={[
          "relative z-10 flex min-h-[100dvh] w-full flex-col px-5 pb-14 sm:px-8 sm:pb-16",
          /* Debajo del header fijo + logo móvil (sin superponer texto); mismo orden de magnitud que navigation.tsx */
          "max-lg:justify-start max-lg:pt-[calc(env(safe-area-inset-top,0px)+10.5rem)] max-lg:text-center max-lg:items-center",
          "lg:w-[54%] lg:justify-center lg:px-12 lg:py-12 lg:text-left lg:items-stretch xl:px-16 xl:py-14 2xl:px-24",
          /* Pantallas bajas (móvil): menos aire vertical entre bloques */
          "[@media(max-height:700px)]:max-lg:pb-8 [@media(max-height:700px)]:max-lg:pt-[calc(env(safe-area-inset-top,0px)+9.75rem)]",
        ].join(" ")}
      >
        <style jsx>{`
          .hero-btn {
            position: relative;
            overflow: hidden;
            isolation: isolate;
            transition:
              transform 360ms cubic-bezier(0.22, 1, 0.36, 1),
              box-shadow 360ms cubic-bezier(0.22, 1, 0.36, 1),
              border-color 320ms ease,
              background-color 320ms ease,
              color 320ms ease;
          }
          .hero-btn::before {
            content: "";
            position: absolute;
            top: -120%;
            left: -30%;
            width: 42%;
            height: 340%;
            transform: rotate(18deg) translateX(-170%);
            background: linear-gradient(
              100deg,
              transparent 0%,
              rgba(255, 255, 255, 0.06) 35%,
              rgba(255, 255, 255, 0.38) 50%,
              rgba(255, 255, 255, 0.06) 65%,
              transparent 100%
            );
            transition: transform 720ms cubic-bezier(0.22, 1, 0.36, 1);
            pointer-events: none;
            z-index: 0;
          }
          .hero-btn:hover::before,
          .hero-btn:focus-visible::before {
            transform: rotate(18deg) translateX(420%);
          }
          .hero-btn:hover,
          .hero-btn:focus-visible {
            transform: translateY(-2px) scale(1.01);
          }
          .hero-btn > * {
            position: relative;
            z-index: 1;
          }
          @media (prefers-reduced-motion: reduce) {
            .hero-btn,
            .hero-btn::before {
              transition-duration: 120ms;
            }
            .hero-btn:hover,
            .hero-btn:focus-visible {
              transform: none;
            }
          }
        `}</style>
        <div
          className="animate-hero-enter mb-5 flex items-center justify-center gap-1.5 text-xs text-muted-foreground sm:mb-6 sm:text-sm lg:justify-start [@media(max-height:700px)]:max-lg:mb-3"
          style={{ animationDelay: "40ms" }}
        >
          <MapPin className="h-3 w-3 shrink-0 text-primary sm:h-3.5 sm:w-3.5" strokeWidth={2} />
          <span className="font-sans tracking-wide">Saline, Michigan — Est. 1985</span>
        </div>

        <h1
          className="animate-hero-enter mb-4 max-w-[min(22rem,92vw)] font-serif leading-[1.05] tracking-tight text-foreground text-balance max-lg:mx-auto sm:mb-5 lg:mx-0 lg:max-w-none [@media(max-height:700px)]:max-lg:mb-3"
          style={{ animationDelay: "120ms" }}
        >
          <span className="block text-[clamp(1.55rem,5.6vw+0.35rem,2.1rem)] sm:text-[2.6rem] md:text-[3.05rem] lg:text-[2.85rem] xl:text-[3.45rem] 2xl:text-[4.1rem]">
            Singleton Smiles
          </span>
          <span className="mt-1 block text-[clamp(1.25rem,4.2vw+0.25rem,1.6rem)] text-primary sm:text-[2rem] md:text-[2.35rem] lg:text-[2.2rem] xl:text-[2.7rem] 2xl:text-[3.1rem]">
            Your Smile Has a Home Here
          </span>
        </h1>

        <div
          className="animate-hero-enter mb-4 flex items-center justify-center gap-3 sm:mb-5 lg:justify-start [@media(max-height:700px)]:max-lg:mb-3"
          style={{ animationDelay: "180ms" }}
        >
          <div className="h-px w-10 shrink-0 bg-primary/60" />
          <span className="font-serif text-xs italic tracking-[0.24em] text-muted-foreground sm:text-sm">
            30+ years of experience
          </span>
        </div>

        <p
          className="animate-hero-enter mb-6 max-w-sm font-sans text-[0.9rem] leading-relaxed text-muted-foreground max-lg:mx-auto sm:mb-8 sm:max-w-md sm:text-[0.98rem] lg:mx-0 lg:mb-8 lg:max-w-[30rem] lg:text-[0.94rem] xl:text-[1rem] [@media(max-height:700px)]:max-lg:mb-5 [@media(max-height:700px)]:max-lg:text-[0.88rem]"
          style={{ animationDelay: "240ms" }}
        >
          Anxiety-free care with advanced technology — same-day crowns, gentle sedation, and a team
          that treats you like family.
        </p>

        <div
          className="animate-hero-enter mb-7 flex w-full max-w-md flex-col gap-2.5 max-lg:mx-auto sm:mb-9 sm:flex-row sm:items-center lg:mx-0 lg:max-w-none [@media(max-height:700px)]:max-lg:mb-5"
          style={{ animationDelay: "310ms" }}
        >
          <Button
            asChild
            size="lg"
            className="hero-btn group h-10 max-lg:w-full rounded-full bg-primary px-5 text-sm text-primary-foreground shadow-[0_10px_24px_-12px_hsl(var(--primary))] hover:bg-primary/90 hover:shadow-[0_16px_34px_-14px_hsl(var(--primary))] sm:h-11 sm:px-7 lg:h-10 lg:w-auto lg:px-6 lg:text-[0.82rem] xl:h-12 xl:px-8 xl:text-sm [@media(max-height:700px)]:max-lg:h-10 [@media(max-width:360px)]:max-lg:px-4 [@media(max-width:360px)]:max-lg:text-[0.8rem]"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              <span>Book your appointment</span>
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 sm:h-4 sm:w-4"
                strokeWidth={2}
              />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="hero-btn h-10 max-lg:w-full rounded-full border-primary/30 bg-background/65 px-5 text-sm font-medium backdrop-blur-md hover:border-primary/60 hover:bg-background/85 hover:text-primary sm:h-11 sm:px-7 lg:h-10 lg:w-auto lg:px-6 lg:text-[0.82rem] xl:h-12 xl:px-8 xl:text-sm [@media(max-height:700px)]:max-lg:h-10 [@media(max-width:360px)]:max-lg:px-4 [@media(max-width:360px)]:max-lg:text-[0.8rem]"
          >
            <Link href="tel:+17344297415" className="inline-flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={2} />
              <span>(734) 429-7415</span>
            </Link>
          </Button>
        </div>

        <div className="animate-hero-enter w-full max-w-md max-lg:mx-auto lg:max-w-none" style={{ animationDelay: "390ms" }}>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2.5 border-t border-border/60 pt-6 lg:justify-start [@media(max-height:700px)]:max-lg:pt-4">
            <div className="flex w-full items-center justify-center gap-1.5 sm:w-auto lg:justify-start">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400 sm:h-3.5 sm:w-3.5" />
                ))}
              </div>
              <span className="font-sans text-xs font-semibold text-foreground sm:text-sm">
                5.0 Google
              </span>
            </div>

            <div className="flex w-full items-center justify-center gap-3 text-[11px] text-muted-foreground sm:w-auto sm:text-xs lg:justify-start">
              <span>150+ reviews</span>
              <span className="text-border">·</span>
              <span>Since 1985</span>
              <span className="text-border">·</span>
              <span>Same-day visits</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-10 hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[11px] text-white/80 backdrop-blur-md lg:flex">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="font-sans tracking-wide">1081 N. Ann Arbor St, Saline, MI</span>
      </div>


      <div className="pointer-events-none absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-muted-foreground lg:bottom-6 lg:left-[27%]">
        <span className="font-sans text-[9px] uppercase tracking-[0.2em] sm:text-[10px]">Scroll</span>
        <div className="animate-scroll-hint h-6 w-px bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Phone, Clock, Mail } from "lucide-react"
import { RevealOnView } from "@/components/reveal-on-view"

export function CTASection() {
  return (
    <section id="contact" className="bg-slate-50/50 py-16 sm:py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <RevealOnView className="flex flex-col justify-center lg:pr-4">
            <p className="mb-4 text-sm font-medium tracking-widest text-blue-600 uppercase">Get Your Singleton Smile</p>
            <h2 className="mb-5 font-serif text-3xl leading-tight text-balance text-slate-900 sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
              Your New Smile Starts Here
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-slate-600">
              From the moment you walk in, our warm, friendly staff puts you at ease. We look forward to welcoming you
              and your family to our practice.
            </p>

            <div className="mb-10 grid gap-y-6 gap-x-8 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-transform duration-500 hover:scale-105 motion-reduce:hover:scale-100">
                  <MapPin className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-slate-900">Location</p>
                  <p className="text-sm leading-snug text-slate-600">
                    1081 N. Ann Arbor
                    <br />
                    Saline, MI 48176
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-transform duration-500 hover:scale-105 motion-reduce:hover:scale-100">
                  <Phone className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-slate-900">Phone</p>
                  <a href="tel:+17344297415" className="text-sm text-slate-600 transition-colors hover:text-blue-600">
                    (734) 429-7415
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:col-span-2 lg:col-span-1">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-transform duration-500 hover:scale-105 motion-reduce:hover:scale-100">
                  <Mail className="h-5 w-5 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <p className="mb-1 text-sm font-medium text-slate-900">Email</p>
                  <a
                    href="mailto:singletondds@gmail.com"
                    className="break-all text-sm text-slate-600 transition-colors hover:text-blue-600"
                  >
                    singletondds@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 transition-transform duration-500 hover:scale-105 motion-reduce:hover:scale-100">
                  <Clock className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="mb-1 text-sm font-medium text-slate-900">Office hours</p>
                  <div className="space-y-0.5 text-sm leading-snug text-slate-600">
                    <p>Mon: 7am - 7pm</p>
                    <p>Tue - Thu: 7am - 6pm</p>
                    <p>Fri: 7am - 3pm</p>
                    <p>Alt Sat: 7am - 12pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="h-14 min-w-0 flex-1 rounded-full bg-primary px-4 text-sm text-primary-foreground shadow-[0_14px_32px_-18px_hsl(var(--primary))] transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:translate-y-px hover:bg-primary/90 hover:shadow-[0_18px_36px_-18px_hsl(var(--primary))] motion-reduce:hover:translate-y-0 sm:flex-none sm:px-8 sm:text-base"
              >
                <Link href="/contact" className="flex min-w-0 items-center justify-center gap-1">
                  <span className="min-w-0 truncate sm:whitespace-normal">Book Online</span>
                  <ArrowRight className="h-5 w-5 shrink-0 max-sm:hidden" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 min-w-0 flex-1 rounded-full border-slate-200 bg-white px-3 text-xs tabular-nums text-slate-700 transition-[transform,background-color,color,border-color] duration-500 hover:translate-y-px hover:bg-blue-50 hover:border-blue-600 hover:text-blue-700 motion-reduce:hover:translate-y-0 sm:flex-none sm:px-8 sm:text-base"
                asChild
              >
                <a href="tel:+17344297415" className="whitespace-nowrap">
                  (734) 429-7415
                </a>
              </Button>
            </div>
          </RevealOnView>

          <RevealOnView delayMs={100} distance="md" subtleBlur className="flex flex-col justify-center lg:pl-4">
            <div className="premium-hover relative mx-auto aspect-[4/3] w-full max-h-[min(100%,28rem)] overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-slate-900/10 lg:mx-0 lg:aspect-[5/4] lg:max-h-[32rem]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.5847547073393!2d-83.78469492357096!3d42.178580745893464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883ca8a6c6e6c8a1%3A0x2c9a0f9c9f1b9b9a!2s1081%20N%20Ann%20Arbor%20St%2C%20Saline%2C%20MI%2048176!5e0!3m2!1sen!2sus!4v1712500000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Singleton Smiles Location"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </RevealOnView>
        </div>
      </div>
    </section>
  )
}

import { createPageMetadata } from "@/lib/seo"
import { SiteShell } from "@/components/site-shell"
import { ContactForm } from "@/components/contact-form"
import { MapPin, Phone, Clock, Mail } from "lucide-react"

export const metadata = createPageMetadata("/contact", {
  title: "Contact & Book",
  description:
    "Contact Singleton Smiles in Saline, MI — book online or call (734) 429-7415. 1081 N. Ann Arbor St.",
})

const cardClass =
  "flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm shadow-slate-900/[0.04] lg:p-10"

const iconWrap =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"

export default function ContactPage() {
  return (
    <SiteShell>
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-12 max-w-2xl text-center lg:mb-16">
            <p className="mb-4 text-sm font-medium tracking-widest text-blue-600 uppercase">Contact</p>
            <h1 className="mb-5 font-serif text-4xl tracking-tight text-slate-900 sm:text-5xl">
              We&apos;d love to hear from you
            </h1>
            <p className="text-lg leading-relaxed text-slate-600">
              Send a message and our team will follow up—usually within one business day. For urgent concerns, please
              call the office directly.
            </p>
          </header>

          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-12">
            <div className={cardClass}>
              <h2 className="mb-8 font-serif text-2xl text-slate-900">Send a message</h2>
              <div className="flex-1">
                <ContactForm />
              </div>
            </div>

            <div className={cardClass}>
              <h2 className="mb-8 font-serif text-2xl text-slate-900">Visit us</h2>

              <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-7">
                <div className="flex gap-4 sm:col-span-2">
                  <div className={iconWrap}>
                    <MapPin className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="mb-1 text-sm font-medium text-slate-900">Michael S. Singleton, DDS, PLLC</p>
                    <p className="text-sm leading-relaxed text-slate-600">
                      1081 N. Ann Arbor
                      <br />
                      Saline, MI 48176
                    </p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=1081+N+Ann+Arbor+St+Saline+MI+48176"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-medium text-blue-600 hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className={iconWrap}>
                    <Phone className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium text-slate-900">Phone</p>
                    <a
                      href="tel:+17344297415"
                      className="text-sm tabular-nums text-slate-600 transition-colors hover:text-blue-600"
                    >
                      (734) 429-7415
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className={iconWrap}>
                    <Mail className="h-5 w-5" aria-hidden />
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

                <div className="flex gap-4 sm:col-span-2">
                  <div className={iconWrap}>
                    <Clock className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium text-slate-900">Office hours</p>
                    <div className="space-y-1 text-sm leading-snug text-slate-600">
                      <p>Mon: 7am - 7pm</p>
                      <p>Tue - Thu: 7am - 6pm</p>
                      <p>Fri: 7am - 3pm</p>
                      <p>Alt Sat: 7am - 12pm</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex min-h-0 flex-1 flex-col sm:mt-10">
                <div className="relative aspect-[5/4] w-full overflow-hidden rounded-xl border border-slate-200/80 sm:aspect-[16/10]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.5847547073393!2d-83.78469492357096!3d42.178580745893464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883ca8a6c6e6c8a1%3A0x2c9a0f9c9f1b9b9a!2s1081%20N%20Ann%20Arbor%20St%2C%20Saline%2C%20MI%2048176!5e0!3m2!1sen!2sus!4v1712500000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Singleton Smiles map"
                    className="absolute inset-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

import Link from "next/link"
import { createPageMetadata, siteConfig } from "@/lib/seo"
import { SiteShell } from "@/components/site-shell"
import { ContactForm } from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react"

export const metadata = createPageMetadata("/contact", {
  title: "Contact & Book",
  description:
    "Contact Singleton Smiles in Saline, MI — request an appointment or send a message. Call (734) 429-7415. 1081 N. Ann Arbor St.",
})

const btnRect =
  "h-11 rounded-md px-5 text-sm font-medium transition-colors sm:h-10 sm:px-6 sm:text-sm"

export default function ContactPage() {
  const { phone, phoneDisplay, email, address } = siteConfig
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=1081+N+Ann+Arbor+St+Saline+MI+48176"

  return (
    <SiteShell>
      <section className="border-b border-slate-100 bg-slate-50/50 py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-medium uppercase tracking-widest text-blue-600 sm:mb-4 sm:text-sm">
            Contact
          </p>
          <h1 className="mb-4 max-w-2xl font-serif text-3xl leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            We&apos;re here when you&apos;re ready
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Send a message or call — we typically reply within one business day.
          </p>
          <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-3">
            <Button asChild className={`${btnRect} bg-blue-600 text-white shadow-sm hover:bg-blue-700`}>
              <a href={`tel:${phone}`} className="inline-flex w-full items-center justify-center sm:w-auto">
                <Phone className="mr-2 h-4 w-4 shrink-0" />
                {phoneDisplay}
              </a>
            </Button>
            <Link
              href="/new-patients"
              className={cn(
                btnRect,
                "inline-flex w-full items-center justify-center border border-slate-300 bg-white text-slate-800 shadow-sm",
                "hover:border-slate-400 hover:bg-slate-50 hover:text-slate-900",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/35 focus-visible:ring-offset-2",
                "sm:w-auto",
              )}
            >
              New patients
              <ArrowRight className="ml-2 h-4 w-4 shrink-0" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-10 xl:gap-12">
            <div className="min-w-0">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm sm:p-8">
                <h2 className="font-serif text-xl text-slate-900 sm:text-2xl">Message</h2>
                <p className="mt-1 text-sm text-slate-500">Urgent issue? Call the office.</p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>

            <aside className="min-w-0">
              <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:gap-6">
                <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm sm:p-6 lg:p-7">
                  <h2 className="font-serif text-xl text-slate-900 sm:text-2xl">Clinic</h2>
                  <p className="mt-1 text-sm text-slate-500">Michael S. Singleton, DDS, PLLC</p>

                  <ul className="mt-5 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-[0.9375rem] lg:mt-6 lg:space-y-4">
                    <li className="flex gap-3">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden />
                      <span>
                        {address.streetAddress}, {address.addressLocality}, {address.addressRegion}{" "}
                        {address.postalCode}
                        <a
                          href={mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1.5 inline-block text-sm font-medium text-blue-600 hover:underline"
                        >
                          Google Maps
                        </a>
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <Phone className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden />
                      <a href={`tel:${phone}`} className="font-medium tabular-nums text-slate-700 hover:text-blue-600">
                        {phoneDisplay}
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <Mail className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden />
                      <a href={`mailto:${email}`} className="break-all font-medium text-slate-700 hover:text-blue-600">
                        {email}
                      </a>
                    </li>
                    <li className="flex gap-3 border-t border-slate-100 pt-4">
                      <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" aria-hidden />
                      <div className="space-y-1 text-sm leading-snug text-slate-600">
                        <p>Mon 7–7 · Tue–Thu 7–6</p>
                        <p>Fri 7–3 · Alt Sat 7–12</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="overflow-hidden rounded-2xl border border-slate-200/90 shadow-sm">
                  <div className="relative aspect-[5/3] w-full sm:aspect-[16/10] lg:aspect-[16/11]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.5847547073393!2d-83.78469492357096!3d42.178580745893464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883ca8a6c6e6c8a1%3A0x2c9a0f9c9f1b9b9a!2s1081%20N%20Ann%20Arbor%20St%2C%20Saline%2C%20MI%2048176!5e0!3m2!1sen!2sus!4v1712500000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Singleton Smiles location map"
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

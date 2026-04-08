import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"
import { RevealOnView } from "@/components/reveal-on-view"

const footerLinks = {
  services: [
    { label: "Sedation Dentistry", href: "/services/sedation-dentistry" },
    { label: "LASER Dentistry", href: "/services/laser-dentistry" },
    { label: "Preventative Care", href: "/services/preventative" },
    { label: "Restorative Services", href: "/services/restorative" },
    { label: "Dental Implants", href: "/services/implants" },
    { label: "Same Day Crowns", href: "/services/same-day-crowns" },
    { label: "Cosmetic Dentistry", href: "/services/cosmetic" },
    { label: "Orthodontic Braces", href: "/services/orthodontic-braces" },
    { label: "Extractions", href: "/services/extractions" },
    { label: "Sleep Apnea", href: "/services/sleep-apnea" },
  ],
  practice: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/about#team" },
    { label: "Reviews", href: "/reviews" },
    { label: "Contact", href: "/contact" },
  ],
  patients: [
    { label: "New Patients", href: "/new-patients" },
    { label: "Financing", href: "/new-patients#financing" },
    { label: "Insurance", href: "/new-patients#insurance" },
    { label: "Patient Forms", href: "/new-patients#forms" },
  ],
}

const linkFooter = "text-sm text-slate-400 transition-[color,opacity] duration-300 hover:text-white"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <RevealOnView className="lg:col-span-2">
            <Link href="/" className="mb-6 inline-block transition-opacity duration-300 hover:opacity-90">
              <Image
                src="/images/logosingleton.png"
                alt="Singleton Smiles"
                width={280}
                height={88}
                className="h-10 w-auto max-w-[260px] object-contain object-left sm:h-11 sm:max-w-[280px]"
              />
            </Link>
            <p className="mb-4 max-w-sm leading-relaxed text-slate-400">Michael S. Singleton, DDS, PLLC</p>
            <p className="mb-2 text-slate-400">
              1081 N. Ann Arbor
              <br />
              Saline, MI 48176
            </p>
            <p className="mb-6 text-slate-400">
              <a href="tel:+17344297415" className={linkFooter}>
                (734) 429-7415
              </a>
              <br />
              <a href="mailto:singletondds@gmail.com" className={linkFooter}>
                singletondds@gmail.com
              </a>
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-[background-color,transform] duration-300 hover:scale-105 hover:bg-blue-600 motion-reduce:hover:scale-100"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-[background-color,transform] duration-300 hover:scale-105 hover:bg-blue-600 motion-reduce:hover:scale-100"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </RevealOnView>

          <RevealOnView delayMs={70}>
            <h4 className="mb-4 font-medium">Services</h4>
            <ul className="columns-1 gap-x-8 sm:columns-2 [&>li]:mb-3">
              {footerLinks.services.map((link) => (
                <li key={link.label} className="break-inside-avoid">
                  <Link href={link.href} className={linkFooter}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </RevealOnView>

          <RevealOnView delayMs={140}>
            <h4 className="mb-4 font-medium">Practice</h4>
            <ul className="space-y-3">
              {footerLinks.practice.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkFooter}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </RevealOnView>

          <RevealOnView delayMs={210}>
            <h4 className="mb-4 font-medium">Patients</h4>
            <ul className="space-y-3">
              {footerLinks.patients.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkFooter}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </RevealOnView>
        </div>

        <RevealOnView delayMs={80} className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Singleton Smiles. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <Link href="/privacy" className={`${linkFooter} text-slate-500`}>
              Privacy Policy
            </Link>
            <Link href="/terms" className={`${linkFooter} text-slate-500`}>
              Terms of Service
            </Link>
          </div>
        </RevealOnView>
      </div>
    </footer>
  )
}

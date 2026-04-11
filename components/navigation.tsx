"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { services } from "@/lib/services"
import { cn } from "@/lib/utils"

const navAfterServices = [
  { href: "/about#team", label: "Our Staff" },
  { href: "/smile-gallery", label: "Smile Gallery" },
  { href: "/reviews", label: "Testimonials" },
  { href: "/new-patients", label: "New Patients" },
  { href: "/contact", label: "Contact" },
] as const

const navLinkClass =
  "relative text-sm font-medium text-slate-600 hover:text-slate-900 transition-[color,transform] duration-300 ease-out py-2 inline-flex items-center gap-1 group"

const underlineClass =
  "absolute bottom-0 left-1/2 h-px w-0 bg-blue-500/90 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full group-hover:left-0"

const mobileNavLinkClass =
  "flex min-h-11 items-center rounded-lg px-3 text-[15px] font-medium text-slate-800 transition-colors hover:bg-slate-50 active:bg-slate-100"

const logoSrc = "/images/logosingleton.png"
const logoAlt = "Singleton Smiles"

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!mobileOpen) setMobileServicesOpen(false)
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow,backdrop-filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
          scrolled
            ? "border-b border-slate-200/50 bg-white/95 backdrop-blur-xl shadow-sm"
            : "border-b border-transparent bg-transparent shadow-none backdrop-blur-none",
        )}
      >
        <nav
          className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8"
          aria-label="Main"
        >
          <Link
            href="/"
            className="relative flex shrink-0 items-center py-1 transition-opacity duration-300 hover:opacity-90"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={280}
              height={88}
              priority
              className="h-8 w-auto max-w-[min(200px,46vw)] object-contain object-left sm:max-w-[220px] lg:h-11 lg:max-w-[260px]"
            />
          </Link>

          {/* Desktop — estilo original */}
          <div className="hidden items-center gap-8 lg:flex">
            <Link href="/about" className={navLinkClass}>
              About
              <span className={underlineClass} />
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className={cn(
                  navLinkClass,
                  "group cursor-pointer rounded-sm border-0 bg-transparent outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30",
                  "data-[state=open]:text-blue-700",
                )}
              >
                Services
                <ChevronDown
                  className="size-3.5 text-slate-500 opacity-80 transition-[transform,color] duration-300 ease-out group-data-[state=open]:rotate-180 group-data-[state=open]:text-blue-600"
                  aria-hidden
                />
                <span className={underlineClass} />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={10}
                className="w-[min(calc(100vw-2rem),22rem)] rounded-xl border border-slate-200/90 bg-white p-2 shadow-lg shadow-slate-900/10"
              >
                <DropdownMenuLabel className="px-3 pb-2 pt-1 text-[11px] font-semibold tracking-[0.14em] text-slate-400 uppercase">
                  All services
                </DropdownMenuLabel>
                {services.map((s) => (
                  <DropdownMenuItem
                    key={s.slug}
                    asChild
                    className={cn(
                      "cursor-pointer rounded-lg px-3 py-2.5 text-[13px] text-slate-700 outline-none transition-colors",
                      "data-[highlighted]:bg-blue-50 data-[highlighted]:text-blue-700",
                      "focus:bg-blue-50 focus:text-blue-700",
                    )}
                  >
                    <Link href={`/services/${s.slug}`}>{s.menuLabel}</Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator className="my-1.5 bg-slate-100" />
                <DropdownMenuItem
                  asChild
                  className={cn(
                    "cursor-pointer rounded-lg px-3 py-2.5 text-[13px] font-semibold text-blue-600 outline-none transition-colors",
                    "data-[highlighted]:bg-blue-50 data-[highlighted]:text-blue-700",
                    "focus:bg-blue-50 focus:text-blue-700",
                  )}
                >
                  <Link href="/services">Services overview</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {navAfterServices.map((link) => (
              <Link key={link.href} href={link.href} className={navLinkClass}>
                {link.label}
                <span className={underlineClass} />
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <Link href="tel:+17344297415" className={cn(navLinkClass, "gap-2")}>
              <Phone className="h-4 w-4" />
              (734) 429-7415
              <span className={underlineClass} />
            </Link>
            <Button asChild className="rounded-full bg-blue-600 px-6 text-white hover:bg-blue-700">
              <Link href="/contact">Book Now</Link>
            </Button>
          </div>

          {/* Mobile — menú minimal */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden",
              scrolled ? "text-slate-700 hover:bg-slate-100/80" : "text-slate-800 hover:bg-slate-900/[0.06]",
            )}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="size-[22px]" strokeWidth={1.75} />
          </button>
        </nav>
      </header>

      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetContent
          side="right"
          className={cn(
            "flex w-full flex-col gap-0 overflow-hidden border-l border-slate-200/60 bg-white p-0 sm:max-w-md [&>button.absolute]:hidden",
          )}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>

          <div className="flex h-14 shrink-0 items-center justify-between border-b border-slate-100 px-4">
            <Link href="/" onClick={closeMobile} className="relative flex items-center py-0.5">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={280}
                height={88}
                className="h-7 w-auto max-w-[min(180px,50vw)] object-contain object-left"
              />
            </Link>
            <button
              type="button"
              onClick={closeMobile}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 hover:bg-slate-50"
              aria-label="Close menu"
            >
              <X className="size-5" strokeWidth={1.75} />
            </button>
          </div>

          <div
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]"
          >
            <div className="mb-6 flex flex-row gap-2 sm:gap-3">
              <Button
                asChild
                className="h-11 min-w-0 flex-1 rounded-full bg-blue-600 text-sm font-medium text-white hover:bg-blue-700"
              >
                <Link href="/contact" onClick={closeMobile} className="px-3">
                  Book visit
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-11 min-w-0 flex-1 rounded-full border-slate-200 bg-white px-2 text-xs font-medium tabular-nums sm:text-sm"
              >
                <a href="tel:+17344297415" onClick={closeMobile} className="whitespace-nowrap">
                  (734) 429-7415
                </a>
              </Button>
            </div>

            <nav className="space-y-0.5" aria-label="Mobile">
              <Link href="/about" className={mobileNavLinkClass} onClick={closeMobile}>
                About
              </Link>

              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className={cn(
                    "flex min-h-11 w-full items-center justify-between rounded-lg px-3 text-left text-[15px] font-medium transition-colors",
                    mobileServicesOpen
                      ? "bg-blue-50/70 text-blue-700"
                      : "text-slate-800 hover:bg-slate-50",
                  )}
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDown
                    className={cn(
                      "size-4 text-slate-400 transition-[transform,color] duration-200 ease-out",
                      mobileServicesOpen && "rotate-180 text-blue-600",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-[max-height] duration-200 ease-out",
                    mobileServicesOpen ? "mt-1 max-h-[min(32rem,70vh)]" : "max-h-0",
                  )}
                >
                  <ul className="space-y-0.5 border-l-2 border-blue-100 pl-3">
                    {services.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          onClick={closeMobile}
                          className="block rounded-md py-2.5 pr-2 text-[14px] text-slate-600 transition-colors hover:bg-blue-50/80 hover:text-blue-700"
                        >
                          {s.menuLabel}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/services"
                        onClick={closeMobile}
                        className="block rounded-md py-2.5 pr-2 text-[14px] font-semibold text-blue-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                      >
                        All services
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {navAfterServices.map((link) => (
                <Link key={link.href} href={link.href} className={mobileNavLinkClass} onClick={closeMobile}>
                  {link.label}
                </Link>
              ))}
            </nav>

            <p className="mt-8 text-center text-xs text-slate-400">Saline, MI</p>
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}

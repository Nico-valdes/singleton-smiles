import Link from "next/link"
import type { Metadata } from "next"
import { SiteShell } from "@/components/site-shell"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <SiteShell>
      <section className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-24 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-blue-600">404</p>
        <h1 className="mb-4 font-serif text-4xl text-slate-900 sm:text-5xl">Page not found</h1>
        <p className="mb-10 max-w-md text-lg text-slate-600">
          That link may be outdated. Try the home page or contact us and we will help you find what you need.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700">
            <Link href="/">Back to home</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </section>
    </SiteShell>
  )
}

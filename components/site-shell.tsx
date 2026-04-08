import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PageEnter } from "@/components/page-enter"

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-white">
      <Navigation />
      <PageEnter className="flex-1 pt-14 lg:pt-20">{children}</PageEnter>
      <Footer />
    </div>
  )
}

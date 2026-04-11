import { ExternalLink } from "lucide-react"
import { googleReviewUrl } from "@/lib/seo"

const sharedLinkClassFooter =
  "inline-flex items-center gap-1.5 text-sm text-slate-300 underline-offset-2 transition-colors hover:text-white hover:underline"

/** Matches text CTAs on the rest of the site (e.g. “Ready to schedule?” on /reviews). */
const reviewsPageLinkClass =
  "inline-flex items-center gap-1.5 font-medium text-blue-600 underline-offset-4 transition-colors hover:text-blue-700 hover:underline"

type GoogleReviewCtaProps = {
  variant: "footer" | "trustBox"
}

export function GoogleReviewCta({ variant }: GoogleReviewCtaProps) {
  if (variant === "footer") {
    return (
      <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-500">
        <a
          href={googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={sharedLinkClassFooter}
        >
          Leave a Google review
          <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
        </a>
        <span className="mt-1 block text-xs text-slate-500">Opens Google in a new tab</span>
      </p>
    )
  }

  return (
    <p className="max-w-3xl text-sm leading-relaxed text-slate-600">
      The videos and stories below are from our practice. If we&apos;ve cared for you, a quick note on Google helps
      neighbors find us —{" "}
      <a href={googleReviewUrl} target="_blank" rel="noopener noreferrer" className={reviewsPageLinkClass}>
        leave a Google review
        <ExternalLink className="h-3.5 w-3.5 shrink-0 opacity-80" aria-hidden />
      </a>
      <span className="sr-only"> (opens in a new tab)</span>
    </p>
  )
}

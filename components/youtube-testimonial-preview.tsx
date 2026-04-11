import Image from "next/image"
import { Play } from "lucide-react"
import { youtubeThumbnailUrl, youtubeVideoIdFromUrl } from "@/lib/youtube"

type YoutubeTestimonialPreviewProps = {
  videoUrl: string
  /** Shown to screen readers and as image alt text */
  label: string
  className?: string
}

export function YoutubeTestimonialPreview({ videoUrl, label, className }: YoutubeTestimonialPreviewProps) {
  const id = youtubeVideoIdFromUrl(videoUrl)
  if (!id) return null

  const thumb = youtubeThumbnailUrl(id)

  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={
        className ??
        "group relative block aspect-video w-full overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-sm ring-1 ring-slate-900/5 transition-[box-shadow,transform] hover:shadow-md hover:ring-blue-200/60 motion-reduce:transition-none"
      }
      aria-label={`${label} (opens on YouTube in a new tab)`}
    >
      <Image
        src={thumb}
        alt=""
        fill
        className="object-cover transition duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
        sizes="(max-width: 1024px) 100vw, 400px"
        unoptimized
      />
      <span
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/50 via-slate-900/10 to-transparent transition-opacity group-hover:opacity-90"
        aria-hidden
      />
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-blue-600 shadow-lg ring-1 ring-slate-900/10 transition-transform duration-300 group-hover:scale-105 motion-reduce:group-hover:scale-100 sm:h-16 sm:w-16">
          <Play className="ml-0.5 h-6 w-6 fill-current sm:h-7 sm:w-7" />
        </span>
      </span>
    </a>
  )
}

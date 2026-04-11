import Image from "next/image"
import type { SmileGalleryCase } from "@/lib/smile-gallery"
import { RevealOnView } from "@/components/reveal-on-view"
import { cn } from "@/lib/utils"

function PhotoGrid({
  images,
  side,
  caseTitle,
}: {
  images: string[]
  side: "before" | "after"
  caseTitle: string
}) {
  const count = images.length
  const gridClass = count === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"

  return (
    <div className={cn("grid gap-3", gridClass)}>
      {images.map((src, i) => (
        <div
          key={`${side}-${src}-${i}`}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-slate-200/80 bg-slate-100 shadow-sm"
        >
          <Image
            src={src}
            alt={
              side === "before"
                ? `${caseTitle} — before treatment, photo ${i + 1}`
                : `${caseTitle} — after treatment, photo ${i + 1}`
            }
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  )
}

function CaseCard({ item, index }: { item: SmileGalleryCase; index: number }) {
  const hasBefore = item.before.length > 0
  const hasAfter = item.after.length > 0

  return (
    <RevealOnView delayMs={index * 60}>
      <article
        className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-900/5"
        aria-label={`${item.title} — smile gallery case`}
      >
        <div className="border-b border-slate-100 bg-white px-6 py-4 sm:px-8">
          <h2 className="font-serif text-xl text-slate-900 sm:text-2xl">{item.title}</h2>
        </div>
        <div className="grid gap-0 lg:grid-cols-2">
          <div className="border-b border-slate-100 bg-slate-50/50 p-6 sm:p-8 lg:border-b-0 lg:border-r">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">Before</p>
            {hasBefore ? (
              <PhotoGrid images={item.before} side="before" caseTitle={item.title} />
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-slate-200 bg-white text-sm text-slate-400">
                No photos
              </div>
            )}
          </div>
          <div className="bg-white p-6 sm:p-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">After</p>
            {hasAfter ? (
              <PhotoGrid images={item.after} side="after" caseTitle={item.title} />
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50/50 text-sm text-slate-400">
                No photos
              </div>
            )}
          </div>
        </div>
      </article>
    </RevealOnView>
  )
}

export function SmileGalleryCases({ cases }: { cases: SmileGalleryCase[] }) {
  const valid = cases.filter((c) => c.before.length > 0 && c.after.length > 0)

  if (valid.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-200 bg-slate-50/50 px-6 py-16 text-center">
        <p className="text-slate-600">
          Photos will appear here once added. Place image files in{" "}
          <code className="rounded bg-slate-200/80 px-1.5 py-0.5 text-sm text-slate-800">public/images/before-after</code>{" "}
          and list them in <code className="rounded bg-slate-200/80 px-1.5 py-0.5 text-sm text-slate-800">lib/smile-gallery.ts</code>.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-12 lg:space-y-16">
      {valid.map((item, index) => (
        <CaseCard key={item.id} item={item} index={index} />
      ))}
    </div>
  )
}

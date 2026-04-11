import { createPageMetadata } from "@/lib/seo"
import { SiteShell } from "@/components/site-shell"
import { SmileGalleryCases } from "@/components/smile-gallery-cases"
import { smileGalleryCases } from "@/lib/smile-gallery"

export const metadata = createPageMetadata("/smile-gallery", {
  title: "Smile Gallery",
  description:
    "Explore real smile transformations at Singleton Smiles in Saline, MI — gallery of before and after photos from cosmetic and restorative treatment.",
})

export default function SmileGalleryPage() {
  return (
    <SiteShell>
      <article>
        <section className="border-b border-slate-100 bg-slate-50/50 py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">Real patient results</p>
            <h1 className="mb-6 max-w-3xl font-serif text-4xl text-balance text-slate-900 sm:text-5xl lg:text-6xl">
              Smile Gallery
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-600">
              Real outcomes from our patients in Saline. Each case pairs <strong className="font-medium text-slate-800">before</strong>{" "}
              and <strong className="font-medium text-slate-800">after</strong> photos—some with both a face view and a close-up smile, so
              you can see the full transformation.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
              Featured cases include Ginger, Garth, Megan, Richard, Robin, and a cosmetic smile makeover. Individual results vary; your
              dentist will discuss what is possible for you.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SmileGalleryCases cases={smileGalleryCases} />
          </div>
        </section>
      </article>
    </SiteShell>
  )
}

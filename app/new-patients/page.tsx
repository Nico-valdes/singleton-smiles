import { createPageMetadata } from "@/lib/seo"
import Link from "next/link"
import { SiteShell } from "@/components/site-shell"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

export const metadata = createPageMetadata("/new-patients", {
  title: "New Patients",
  description:
    "What to expect at your first visit, financing options, insurance information, and patient forms — Singleton Smiles in Saline, MI.",
})

const expectations = [
  "A warm greeting from a team that listens to your goals and concerns",
  "Comprehensive evaluation using modern imaging when appropriate",
  "A clear, honest treatment plan—no pressure, just partnership",
]

export default function NewPatientsPage() {
  return (
    <SiteShell>
      <section className="py-16 lg:py-24 bg-slate-50/50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">New patients</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-6 text-balance max-w-3xl">
            Your first step toward a confident Singleton Smile
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed mb-8">
            Whatever has kept you from the dental chair is exactly why you should call us today. We recognize that
            every patient has unique needs—and we tailor care to help you feel comfortable from the very first visit.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700">
              <Link href="/contact">
                Request an appointment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full">
              <Link href="tel:+17344297415">Call (734) 429-7415</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl text-slate-900 mb-6">What to expect</h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              We look forward to welcoming you and your family to our practice. Our goal is simple: exceptional care in a
              relaxed environment where both children and adults feel comfortable.
            </p>
            <ul className="space-y-4">
              {expectations.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-0.5 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Check className="h-3.5 w-3.5 text-blue-600" />
                  </span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-8 lg:p-10">
            <h3 className="font-serif text-2xl text-slate-900 mb-4">Quick answers</h3>
            <ul className="space-y-4 text-slate-600">
              <li>
                <strong className="text-slate-900">Multiple visits?</strong>
                <br />
                Most procedures are completed in one visit whenever clinically appropriate.
              </li>
              <li>
                <strong className="text-slate-900">Dental anxiety?</strong>
                <br />
                We offer sedation dentistry designed for nervous patients.
              </li>
              <li>
                <strong className="text-slate-900">Needles or the drill?</strong>
                <br />
                In many cases we can complete treatment—with laser dentistry and thoughtful techniques—so you can feel
                more at ease.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="financing" className="py-16 lg:py-24 bg-slate-900 text-white scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl mb-6">Financing that fits real life</h2>
          <p className="text-white/85 leading-relaxed mb-6">
            Are finances a concern for you? We offer interest-free financing options for qualifying patients and will
            discuss payments clearly before treatment begins—so you can make decisions with confidence.
          </p>
          <p className="text-white/85 leading-relaxed mb-8">
            Our front office team is happy to answer questions about estimates, payment timing, and planning care in
            phases when it makes sense for your goals and budget.
          </p>
          <Button asChild variant="secondary" className="rounded-full">
            <Link href="/contact">Talk with our team</Link>
          </Button>
        </div>
      </section>

      <section id="insurance" className="py-16 lg:py-24 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-slate-900 mb-6">Insurance</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Many insurance plans are welcomed in our office. Coverage varies by carrier and plan, so bring your card to
            your visit and we&apos;ll help you understand benefits to the best of our ability.
          </p>
          <p className="text-slate-600 leading-relaxed">
            If you are unsure whether we participate with your network, call{" "}
            <a href="tel:+17344297415" className="text-blue-600 hover:underline">
              (734) 429-7415
            </a>{" "}
            — our patient care specialists are here to help.
          </p>
        </div>
      </section>

      <section id="forms" className="py-16 lg:py-24 bg-slate-50/50 border-t border-slate-100 scroll-mt-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2 className="font-serif text-3xl text-slate-900 mb-6">Patient forms</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Save time on your first visit by completing new patient paperwork ahead of time. When downloadable PDFs are
            ready, they will be linked here—until then, our team can email forms or have them ready when you arrive.
          </p>
          <div className="rounded-xl border border-dashed border-slate-200 bg-white p-8 text-center text-slate-500 text-sm">
            Printable forms: coming soon — contact the office for the current packet.
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

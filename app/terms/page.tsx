import Link from "next/link"
import { SiteShell } from "@/components/site-shell"
import { createPageMetadata, siteConfig } from "@/lib/seo"

export const metadata = createPageMetadata(
  "/terms",
  {
    title: "Terms of Service",
    description:
      "Terms governing use of the Singleton Smiles website operated by Michael S. Singleton, DDS, PLLC in Saline, Michigan.",
  },
  { noIndex: true },
)

export default function TermsPage() {
  const { legalName, name, email, phone, phoneDisplay, address } = siteConfig

  return (
    <SiteShell>
      <article>
        <section className="border-b border-slate-100 bg-slate-50/50 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">Legal</p>
            <h1 className="font-serif text-4xl text-slate-900 sm:text-5xl">Terms of Service</h1>
            <p className="mt-4 text-sm text-slate-500">Last updated: April 11, 2026</p>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-3xl space-y-10 px-6 text-slate-600 lg:px-8 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-slate-900 [&_h3]:mt-6 [&_h3]:font-medium [&_h3]:text-slate-900">
            <div className="space-y-4 leading-relaxed">
              <p>
                These Terms of Service (“Terms”) govern your access to and use of the website operated by{" "}
                <strong className="text-slate-900">{legalName}</strong> (“we,” “us,” or “our”) under the name{" "}
                <strong className="text-slate-900">{name}</strong>. By using this website, you agree to these Terms. If
                you do not agree, please do not use the site.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>Not medical advice</h2>
              <p>
                Content on this website is for general information only. It does not create a dentist–patient
                relationship and is not a substitute for professional diagnosis or treatment. Always seek the advice of
                a qualified dental or medical provider with questions about your health. If you think you may have a
                medical emergency, call your local emergency number or go to the nearest emergency room.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>Appointments and communications</h2>
              <p>
                Submitting a form or sending an email does not guarantee an appointment. We will use reasonable efforts to
                respond during normal business hours. For urgent matters, call the office directly. Any estimated
                response times described on the site are guidelines, not guarantees.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>Acceptable use</h2>
              <p>You agree not to misuse the website, including by:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Attempting to gain unauthorized access to our systems or data</li>
                <li>Transmitting malware or harmful code</li>
                <li>Scraping or automated access that interferes with site operation</li>
                <li>Using the site in violation of applicable law</li>
              </ul>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>Intellectual property</h2>
              <p>
                Text, graphics, logos, and other materials on this site are owned by us or our licensors and are
                protected by copyright and trademark laws. You may view and print pages for personal, non-commercial use
                only. You may not copy, modify, distribute, or create derivative works without our prior written
                permission, except as allowed by law.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>Third-party links</h2>
              <p>
                Our website may link to third-party sites (for example, maps or social networks). We are not
                responsible for their content or practices. Your use of third-party sites is at your own risk and subject
                to their terms and policies.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>Disclaimer of warranties</h2>
              <p>
                The website is provided “as is” and “as available,” without warranties of any kind, whether express or
                implied, including implied warranties of merchantability, fitness for a particular purpose, and
                non-infringement. We do not warrant that the site will be uninterrupted, error-free, or free of
                harmful components.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>Limitation of liability</h2>
              <p>
                To the fullest extent permitted by applicable law, {legalName} and its owners, employees, and agents
                will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for
                lost profits or data, arising from your use of the website. Our total liability for any claim arising out
                of these Terms or the website will not exceed the greater of one hundred U.S. dollars ($100) or the
                amount you paid us (if any) for access to the specific service giving rise to the claim in the twelve
                (12) months before the claim.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless {legalName} and its affiliates from any claims,
                damages, losses, or expenses (including reasonable attorneys’ fees) arising from your use of the
                website or violation of these Terms, to the extent permitted by law.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>Governing law</h2>
              <p>
                These Terms are governed by the laws of the State of Michigan, without regard to conflict-of-law
                principles. You agree that exclusive jurisdiction for disputes relating to these Terms or the website
                lies in the state or federal courts located in Washtenaw County, Michigan, unless a different forum is
                required by law.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>Changes</h2>
              <p>
                We may revise these Terms at any time. The “Last updated” date will change when we do. Your continued use
                of the website after changes constitutes acceptance of the revised Terms. If we make material changes,
                we may provide additional notice where appropriate.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-8 leading-relaxed">
              <h2>Contact</h2>
              <p>
                <strong className="text-slate-900">{legalName}</strong>
                <br />
                {name}
                <br />
                {address.streetAddress}
                <br />
                {address.addressLocality}, {address.addressRegion} {address.postalCode}
              </p>
              <p>
                Phone:{" "}
                <a href={`tel:${phone}`} className="font-medium text-blue-600 hover:underline">
                  {phoneDisplay}
                </a>
                <br />
                Email:{" "}
                <a href={`mailto:${email}`} className="font-medium text-blue-600 hover:underline">
                  {email}
                </a>
              </p>
            </div>

            <p className="text-sm text-slate-500">
              <Link href="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              {" · "}
              <Link href="/" className="text-blue-600 hover:underline">
                Home
              </Link>
            </p>
          </div>
        </section>
      </article>
    </SiteShell>
  )
}

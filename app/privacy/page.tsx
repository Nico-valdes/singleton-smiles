import Link from "next/link"
import { SiteShell } from "@/components/site-shell"
import { createPageMetadata, siteConfig } from "@/lib/seo"

export const metadata = createPageMetadata(
  "/privacy",
  {
    title: "Privacy Policy",
    description:
      "How Singleton Smiles (Michael S. Singleton, DDS, PLLC) collects, uses, and protects information when you use our website or contact us.",
  },
  { noIndex: true },
)

export default function PrivacyPage() {
  const { legalName, name, email, phone, phoneDisplay, address } = siteConfig

  return (
    <SiteShell>
      <article>
        <section className="border-b border-slate-100 bg-slate-50/50 py-16 lg:py-20">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-blue-600">Legal</p>
            <h1 className="font-serif text-4xl text-slate-900 sm:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-sm text-slate-500">Last updated: April 11, 2026</p>
          </div>
        </section>

        <section className="py-14 lg:py-20">
          <div className="mx-auto max-w-3xl space-y-10 px-6 text-slate-600 lg:px-8 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:text-slate-900 [&_h3]:mt-6 [&_h3]:font-medium [&_h3]:text-slate-900">
            <div className="space-y-4 leading-relaxed">
              <p>
                This Privacy Policy describes how <strong className="text-slate-900">{legalName}</strong> (“we,” “us,” or
                “our”), operating as <strong className="text-slate-900">{name}</strong>, handles information in connection
                with this website and when you communicate with us. If you have questions, contact us using the details
                at the end of this page.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>Information we may collect</h2>
              <p>
                Depending on how you interact with us, we may collect information such as your name, email address,
                phone number, and the content of messages you send through contact forms or email. We may also collect
                limited technical data automatically when you visit our website, such as browser type, general location
                (e.g., region), and pages viewed, to maintain security and improve the site.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>How we use information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Respond to inquiries and schedule or coordinate care-related communications</li>
                <li>Operate, secure, and improve our website and services</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
              <p>
                We do not sell your personal information. We may share information with service providers who assist our
                practice (for example, website hosting or email delivery) subject to appropriate safeguards, or when
                required by law.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>Health information</h2>
              <p>
                Protected health information (“PHI”) that we create or receive as part of providing dental care is
                governed by applicable privacy laws, including the Health Insurance Portability and Accountability Act
                of 1996 (“HIPAA”) and our Notice of Privacy Practices, which we provide to patients as required. This
                website policy focuses on general website and contact interactions; it does not replace our HIPAA Notice
                or other patient-specific rights documents.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>Cookies and analytics</h2>
              <p>
                We may use cookies or similar technologies to remember preferences, measure site usage, or improve
                performance. You can control cookies through your browser settings. If we use analytics tools, they are
                configured to support our legitimate interests in understanding how visitors use the site.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>Security</h2>
              <p>
                We take reasonable steps to protect information against unauthorized access, alteration, or destruction.
                No method of transmission over the internet is completely secure; we encourage you not to send sensitive
                clinical information through unsecured web forms if we have directed you to use a different channel.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>Children’s privacy</h2>
              <p>
                Our website is not directed at children under 13 as a primary audience. If you believe we have collected
                information from a child inappropriately, please contact us and we will take appropriate steps.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>Your choices and rights</h2>
              <p>
                Depending on where you live, you may have rights to access, correct, or delete certain personal
                information, or to opt out of certain processing. To exercise these rights, contact us using the
                information below. We may need to verify your request.
              </p>
            </div>

            <div className="space-y-4 leading-relaxed">
              <h2>Changes to this policy</h2>
              <p>
                We may update this Privacy Policy from time to time. The “Last updated” date at the top will change when
                we do. Continued use of the website after changes constitutes acceptance of the updated policy, except
                where prohibited by law.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-8 leading-relaxed">
              <h2>Contact us</h2>
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
              <p className="text-sm text-slate-500">
                For clinical or billing questions, please call the office. This page is for general privacy questions
                related to our website and routine communications.
              </p>
            </div>

            <p className="text-sm text-slate-500">
              <Link href="/terms" className="text-blue-600 hover:underline">
                Terms of Service
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

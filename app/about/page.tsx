import { createPageMetadata } from "@/lib/seo"
import Image from "next/image"
import Link from "next/link"
import { SiteShell } from "@/components/site-shell"
import { AboutTeamAccordion } from "@/components/about-team-accordion"
import { Button } from "@/components/ui/button"
import { dentalAssistants, dentalHygienists, officeTeam } from "@/lib/team"
import { ArrowRight } from "lucide-react"

export const metadata = createPageMetadata("/about", {
  title: "About Us",
  description:
    "Meet Dr. Michael Singleton and the Singleton Smiles team — compassionate, award-winning dental care in Saline, MI with 30+ years of experience.",
})

export default function AboutPage() {
  return (
    <SiteShell>
      <article>
        <section className="py-16 lg:py-24 bg-slate-50/50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">Our Practice</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-900 mb-6 text-balance max-w-3xl">
              Warm, patient-friendly care in the heart of Saline
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
              At Singleton Smiles, conveniently located in Saline, we recognize that every patient has unique needs.
              Our team is dedicated to providing care that is comfortable, stress-free, and thoughtfully tailored for
              you and your family.
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
            <div className="relative aspect-[8/6] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 max-h-[520px]">
              <Image
                src="/images/singleton-smiles-garden.png"
                alt="Dr. Michael Singleton with the Singleton Smiles team"
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 86vw, 48vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p className="text-slate-900 font-medium text-lg">
                We&apos;re more than just a dental practice—we strive to be a trusted partner in your oral health for
                years to come.
              </p>
              <p>
                From the moment you walk into Dr. Singleton&apos;s dental office, our warm, friendly staff puts you at
                ease. Our patient-friendly practice of &quot;people who care about people&quot; offers a full range of
                general and advanced cosmetic dentistry services for your entire family in a relaxed, stress-free
                environment where both children and adults feel comfortable.
              </p>
              <p>
                Using the most advanced technology available, we help provide our patients with a lifetime of beautiful
                smiles. See the difference for yourself when you visit Dr. Michael Singleton and his incredible, caring
                staff in his award-winning office in downtown Saline.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild className="rounded-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/contact">
                    Book a visit
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-full">
                  <Link href="/services">Explore services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
  

        <section className="py-16 lg:py-24 bg-slate-50/50 border-y border-slate-100">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">Meet Dr. Singleton</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-8">
              Dentistry isn&apos;t just my profession—it&apos;s my passion.
            </h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                With 30+ years of experience, I&apos;ve dedicated myself to delivering exceptional dental care built on
                trust, compassion, and long-lasting relationships. I stay ahead of the curve through continuous training
                and cutting-edge technologies, ensuring every patient receives the highest quality treatment available.
              </p>
              <p>
                What first drew me to Saline years ago wasn&apos;t just the place—it was the people. The warm,
                close-knit community, the feeling of extended family, and the genuine kindness made it feel like home.
                I&apos;m honored that generations of patients have placed their trust in me, and even more proud that my
                very first patient remains with me to this day.
              </p>
              <p>
                Known for precision and perfectionism, I approach dentistry with a deep sense of commitment. My goal is not
                just to fix teeth, but to transform lives—one smile at a time. It&apos;s a philosophy my team shares
                wholeheartedly. Many of my staff members have been part of this journey for over a decade, helping
                create a welcoming environment that reflects our loyalty and shared values.
              </p>
              <p>
                Over the years, the &quot;Singleton Smile&quot; has become renowned far beyond Saline. Patients have
                traveled from across the country—and around the world—for the care they know they can trust.
              </p>
              <p>
                Outside of the office, I recharge by spending time with family, running, playing basketball, and enjoying
                the great outdoors. These activities keep me grounded and energized, reminding me of the balance between
                dedication and joy.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">Why patients choose us</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-8">Why choose Singleton Smiles</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                We know you want a great smile. We offer a wide range of dental services, including preventative care,
                fillings, same-day crowns, root canals, braces, extractions, bridges, dentures, implants, veneers and
                full-mouth reconstruction.
              </p>
              <p>
                Dr. Singleton treats every patient like family and offers a wide variety of services to maintain optimum
                oral health and to improve your smile. His friendly smile and gentle touch are paired with his
                state-of-the-art dental techniques to assure your satisfaction.
              </p>
              <p>
                It is our privilege and pleasure to care for patients of all ages in a private office atmosphere. Our
                kind and caring team ensure that every patient&apos;s dental expectations are exceeded, all the while
                improving their overall appearance and health.
              </p>
            </div>
          </div>
        </section>

        <section id="team" className="py-16 lg:py-24 bg-white border-t border-slate-100 scroll-mt-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <p className="text-sm font-medium tracking-widest uppercase text-blue-600 mb-4">Our team</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-4">Award-winning dental support team</h2>
            <p className="text-slate-600 leading-relaxed mb-10">
              Meet our award-winning dental support team, a group of highly skilled professionals committed to excellence
              in patient care. With a focus on compassion, precision, and personalized service, they work tirelessly to
              ensure every patient feels valued, comfortable, and confident throughout their dental experience.
            </p>
            <AboutTeamAccordion title="Dental hygienists" members={dentalHygienists} groupId="hygiene" />
            <AboutTeamAccordion title="Dental assistants" members={dentalAssistants} groupId="assist" />
            <AboutTeamAccordion title="Office team" members={officeTeam} groupId="office" />
            <p className="text-slate-600 leading-relaxed mt-8">
              The incredible office team at Singleton Smiles goes above and beyond to create a welcoming and stress-free
              experience—from clear communication and efficient scheduling to the kind of personalized support that
              makes every visit run smoothly.
            </p>
          </div>
        </section>
      </article>
    </SiteShell>
  )
}

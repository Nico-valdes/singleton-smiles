export type Service = {
  slug: string
  title: string
  /** Short label for nav / footer lists */
  menuLabel: string
  /** One line for the home page — keep it tight */
  homeTeaser: string
  shortDescription: string
  paragraphs: string[]
}

export const services: Service[] = [
  {
    slug: "sedation-dentistry",
    title: "Sedation Dentistry",
    menuLabel: "Sedation dentistry",
    homeTeaser: "Conscious IV sedation for nervous patients and longer procedures.",
    shortDescription:
      "IV sedation creates a tranquil state of mind and helps eliminate pain and anxiety associated with dental treatment.",
    paragraphs: [
      "IV sedation will create a tranquil state of mind, and eliminate the pain and anxiety associated with dental treatment. While sedated, you are deeply relaxed and feel as though you are sleeping although still able to respond to speech and touch. Therefore, IV sedation is commonly referred to as Conscious Sedation.",
      "IV sedation will make any procedure a quick, easy and most importantly, painless experience. Dr. Singleton may recommend IV sedation for certain procedures, such as wisdom teeth removal or comprehensive treatment cases, or for patients who have severe dental fear and anxiety.",
    ],
  },
  {
    slug: "laser-dentistry",
    title: "Drill-Free, Shot-Free LASER Dentistry",
    menuLabel: "Laser dentistry (Solea)",
    homeTeaser: "Many visits without the drill — minimal noise, often no shots.",
    shortDescription:
      "Solea is a powerful dental laser that replaces the dental drill in the majority of procedures — with virtually no pain, vibration, or noise.",
    paragraphs: [
      "The miracle we have all been waiting for is here: Solea. Now available to you, Solea is a powerful dental laser that replaces the dental drill in the majority of procedures in our practice. It causes virtually no pain, vibration or noise. In fact, nearly every patient skips anesthesia because they just don’t need it. Solea is our way of keeping you happy. Because more than anything, we love to see you smile.",
    ],
  },
  {
    slug: "preventative",
    title: "Preventative Dentistry",
    menuLabel: "Preventive care",
    homeTeaser: "Hygiene, exams, and keeping your whole health in view.",
    shortDescription:
      "We treat the whole person and focus on the link between oral health and overall wellness.",
    paragraphs: [
      "We help our patients look and feel great. We treat the whole person, looking at all aspects of a patient’s overall health. We are acutely aware of the relationship between dental health and other serious conditions, such as heart disease, diabetes and premature babies. Improving a patient’s smile means more than just improving their appearance. A healthy smile leads to a healthy mind and body.",
    ],
  },
  {
    slug: "restorative",
    title: "Restorative Services",
    menuLabel: "Restorative care",
    homeTeaser: "Fillings, digital X-rays, and efficient, comfortable treatment.",
    shortDescription:
      "Advanced technology means more comfortable treatment, fewer visits, and shorter appointment times.",
    paragraphs: [
      "By using the latest dental technology available, we are able to treat our patients more comfortably, with fewer office visits and shorter treatment times.",
      "We no longer have to wait for old-school film x-rays to develop; our digital radiograph system is instant!",
      "Procedures that used to take a half an hour are now done in two to three minutes with our powerful CO2 laser!",
      "Our Cerec CAD-CAM computer custom makes crowns onsite while the patient waits, eliminating the need for temporary crowns and second visits.",
    ],
  },
  {
    slug: "implants",
    title: "Implants / Tooth Replacements",
    menuLabel: "Implants",
    homeTeaser: "Stable, natural-looking replacements for missing teeth.",
    shortDescription:
      "Durable, natural-looking tooth replacements planned with your comfort and long-term health in mind.",
    paragraphs: [
      "Dental implants are designed to replace missing teeth with a stable, long-lasting foundation that looks and feels natural. Our team uses modern diagnostic planning and restorative techniques to help you regain confidence in chewing, speaking, and smiling.",
      "Whether you are missing a single tooth or need more comprehensive replacement options, we will walk you through your choices and tailor treatment to your goals.",
    ],
  },
  {
    slug: "same-day-crowns",
    title: "Same Day Crowns",
    menuLabel: "Same-day crowns",
    homeTeaser: "CEREC: custom crowns in one visit, often no temporaries.",
    shortDescription:
      "CEREC CAD-CAM technology lets us design, mill, and place beautiful crowns in a single visit.",
    paragraphs: [
      "With same-day crowns, you can often complete crown treatment in one appointment—without the wait for a lab and without a temporary crown that may come loose between visits.",
      "Our CEREC CAD-CAM system custom-makes crowns in the office while you wait, so you spend less time in the chair and get back to your day sooner.",
    ],
  },
  {
    slug: "cosmetic",
    title: "Advanced Cosmetic Dentistry",
    menuLabel: "Cosmetic dentistry",
    homeTeaser: "Whitening, veneers, bonding, aligners — your smile goals.",
    shortDescription:
      "From whitening to veneers and Invisalign—personalized options for the smile you want.",
    paragraphs: [
      "From lasers to Lumineers, from bleaching to bonding, from invisible fillings to Invisalign – there are so many techniques to use when it comes to achieving the smile you have always wanted. Let our office help you perfect a great, healthy smile that will boost your self-confidence.",
    ],
  },
  {
    slug: "orthodontic-braces",
    title: "Orthodontic Braces",
    menuLabel: "Braces & alignment",
    homeTeaser: "Straighten teeth and fix bite issues — kids and adults.",
    shortDescription:
      "Braces for children and adults to improve bite, alignment, and long-term oral health.",
    paragraphs: [
      "Braces can be used to correct an improper bite in both children and adults. Crooked or crowded teeth not only take away from your self confidence, they make your smile more difficult to care for leading to an increased risk for tooth decay. Don’t let an improper bite interfere with chewing, speaking and self-confidence…you deserve a beautiful smile!",
      "Typical orthodontic treatment cases begin with orthodontic records, which are comprised of a series of diagnostic photographs, x-rays and study models. With these materials, Dr. Singleton can make a treatment plan specific to the needs of each patient’s functional and aesthetic needs. While every orthodontic case is different, most cases involve complete upper and lower treatment with traditional materials like brackets, wires and bands. Frequency of visits to our office may vary, but are typically once or twice per month. At the completion of treatment, a permanent set of retainers will be made.",
      "Financial requirements can vary, but our office offers a variety of arrangements for payments. With some careful planning, we hope to make orthodontic treatment a reality for anyone wanting or needing it.",
    ],
  },
  {
    slug: "extractions",
    title: "Extractions",
    menuLabel: "Extractions",
    homeTeaser: "When a tooth has to go: clear steps and comfortable recovery.",
    shortDescription:
      "Thoughtful care and clear guidance when a tooth needs to be removed.",
    paragraphs: [
      "A tooth extraction is a minor surgical procedure. Therefore, it is natural that temporary changes will occur in the mouth after this procedure. However, Dr. Singleton follows some simple rules to help promote healing, prevent complications, and make you comfortable.",
    ],
  },
  {
    slug: "sleep-apnea",
    title: "Sleep Apnea Treatment",
    menuLabel: "Sleep apnea",
    homeTeaser: "Oral appliances to help you breathe and sleep better.",
    shortDescription:
      "Oral appliance therapy can be a comfortable alternative for many patients with obstructive sleep apnea.",
    paragraphs: [
      "Do you feel sleepy throughout the day? Do you snore? Do you feel unrefreshed when you awake in the morning?",
      "You are not supposed to be sleepy throughout the day. You should awaken feeling refreshed and remain alert throughout the entire day. If after a full night’s sleep you awake feeling tired, take it as a sign of poor quality sleep, possibly resulting from a condition called sleep apnea. Sleep apnea actually puts you at risk for a multitude of serious medical conditions including high blood pressure, heart attack, and stroke.",
      "An estimated 18 million Americans have obstructive sleep apnea (OSA), a sleep disorder caused by the tongue and soft tissues falling into the back of the throat during sleep, obstructing the airway. An obstructed airway results in snoring and episodes of gasping for air after breathing has stopped for as long as 30 seconds at a time, as often as over 100 times per hour.",
      "Both the quantity and quality of sleep are critical in maintaining a healthy mind and body. Unfortunately, sleep apnea sufferers interrupt their sleep with every obstruction, preventing them from ever experiencing the necessary health effects sleep.",
      "Although continuous positive airway pressure (CPAP) machines are considered extremely effective treatment for opening an obstructive airway during sleep, studies show that many patients only use it for three or four hours a night. In fact, roughly half of the CPAP users admit that the headgear and facemask are too uncomfortable to use. New guidelines actually recommend the use of oral appliances instead for the treatment of mild to moderate obstructive sleep apnea. Compliance among patients fitted with dental appliances is higher and patients claim to be wearing the oral appliances all night.",
      "Dental sleep appliances help to maintain an open airway by repositioning and stabilizing the lower jaw, tongue, soft palate, and uvula. It’s an accepted treatment for obstructive sleep apnea not only because it is effective, but because patients find them comfortable to wear.",
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}

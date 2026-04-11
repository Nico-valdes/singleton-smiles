export type Review = {
  id: string
  name: string
  role: string
  headline: string
  content: string
  rating: number
  featured?: boolean
  /** Patient story video on YouTube */
  videoUrl?: string
  /** Short first-person quote for homepage testimonial cards */
  cardQuote?: string
}

/** Three spotlight cards on the homepage; full list lives on `/reviews`. */
export const homepageSpotlightIds: readonly string[] = ["alex", "sophia", "gina"]

export const reviews: Review[] = [
  {
    id: "alex",
    name: "Alex",
    role: "Patient for 30+ years",
    headline: "Alex’s Story",
    content:
      "For more than 30 years, Alex has trusted Singleton Smiles for every step of his dental care journey. In his own words, this practice has been his go-to for decades — from the warm environment to the exceptional care provided by Dr. Singleton, whose dedication to his patients and pride in his work truly set him apart.",
    rating: 5,
    featured: true,
    videoUrl: "https://www.youtube.com/watch?v=XFjbhGgav_s",
    cardQuote:
      "For more than 30 years, I've trusted Singleton Smiles for every step of my dental care journey. The warm environment and exceptional care truly set them apart.",
  },
  {
    id: "sophia",
    name: "Sophia",
    role: "Patient for 10 years",
    headline: "Sophia’s Story",
    content:
      "Sophia shares her experience with Dr. Singleton, who provided a second opinion that saved her from an unnecessary crown. Over the past 10 years, he’s handled her dental needs—from wisdom teeth removal to straightening her bottom teeth. Sophia and her entire family trust Dr. Singleton and his team completely.",
    rating: 5,
    featured: true,
    videoUrl: "https://www.youtube.com/watch?v=dZ6FBgODx0Y",
    cardQuote:
      "Dr. Singleton provided a second opinion that saved me from an unnecessary crown. My entire family trusts Dr. Singleton and his team completely.",
  },
  {
    id: "thayrone",
    name: "Thayrone X",
    role: "Radio host, “On the Edge with Thayrone”",
    headline: "Thayrone’s Story",
    content:
      "Thayrone X, the outspoken and entertaining host of “On the Edge with Thayrone,” shares his story about getting a brand-new tooth and the outstanding care he received at Singleton Smiles. Hear how the team made his experience comfortable, professional, and even enjoyable.",
    rating: 5,
    featured: true,
    videoUrl: "https://www.youtube.com/watch?v=sqok1L6ShVw",
    cardQuote:
      "The team made my experience comfortable, professional, and even enjoyable. I highly recommend Singleton Smiles.",
  },
  {
    id: "gina",
    name: "Gina",
    role: "Patient",
    headline: "Gina’s Story",
    content:
      "Gina shares her experience at Singleton Smiles in Saline, MI. After Dr. Singleton fixed her tooth, she felt cared for and confident in her smile. From start to finish, our team ensured her comfort and support. Whether you need cosmetic dentistry, implants, or routine care, Gina’s story shows the impact of compassionate dental care.",
    rating: 5,
    featured: true,
    videoUrl: "https://www.youtube.com/watch?v=8Ny6dAHs9IQ",
    cardQuote:
      "After Dr. Singleton fixed my tooth, I felt cared for and confident in my smile. The team ensured my comfort from start to finish.",
  },
  {
    id: "arie",
    name: "Arie",
    role: "Patient for 8+ years",
    headline: "Arie’s Story",
    content:
      "Arie shares a heartfelt experience at Singleton Smiles. From the moment she first walked in over 8 years ago, our team made sure she felt comfortable, cared for, and confident in her beautiful new smile. Whether you’re considering cosmetic dentistry, implants, or routine care, this testimonial shows the difference compassionate dental care can make.",
    rating: 5,
    featured: true,
    videoUrl: "https://www.youtube.com/watch?v=Yvn7RbLZyOI",
    cardQuote:
      "From the moment I first walked in over 8 years ago, the team made sure I felt comfortable, cared for, and confident in my beautiful new smile.",
  },
]

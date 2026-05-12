/**
 * Smile gallery: real patient outcomes (face + smile photos where available).
 * Files live in `public/images/before-after/`.
 * Naming per patient: `Name B1` = before (face), `Name B2` = before (smile);
 * `Name A1` = after (face), `Name A2` = after (smile).
 */
export type SmileGalleryCase = {
  id: string
  /** Short heading for the card (first name or descriptive title) */
  title: string
  before: string[]
  after: string[]
}

function img(file: string) {
  return `/images/before-after/${encodeURIComponent(file)}`
}

export const smileGalleryCases: SmileGalleryCase[] = [
  {
    id: "ginger",
    title: "Ginger",
    before: [img("Ginger B1.JPG"), img("Ginger B2.JPG")],
    after: [img("Ginger A1.JPG"), img("Ginger A2.JPG")],
  },
  {
    id: "garth",
    title: "Garth",
    before: [img("garth B1.JPG"), img("garth B2.JPG")],
    after: [img("garth A1.JPG"), img("garth A2.JPG")],
  },
  {
    id: "megan",
    title: "Megan",
    before: [img("Megan B1.JPG"), img("Megan B2.JPG")],
    after: [img("Megan A1.JPG"), img("Megan A2.JPG")],
  },
  {
    id: "richard",
    title: "Richard",
    before: [img("Richard B1.jpeg")],
    after: [img("Richard A1.JPG")],
  },
  {
    id: "robin",
    title: "Robin",
    before: [img("Robin B1.JPG"), img("Robin B2.JPG")],
    after: [img("Robin A1.JPG"), img("Robin A2.JPG")],
  },
  {
    id: "woman",
    title: "Cosmetic smile",
    before: [img("woman B1.PNG"), img("woman B2.PNG")],
    after: [img("woman A1.PNG"), img("woman A2.PNG")],
  },
]

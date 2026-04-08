export type TeamMember = {
  name: string
  role: string
  bio: string
  photo?: string
}

export const dentalHygienists: TeamMember[] = [
  {
    name: "Breslyn",
    role: "Dental Hygienist",
    photo: "/images/staff/Singleton-Smiles-Breslyn.jpeg",
    bio: "Breslyn is a Registered Dental Hygienist and a recent graduate of Jackson College, where she earned her Associate of Applied Science in Dental Hygiene. She brings fresh energy, compassion and a commitment to making every patient feel comfortable and valued. She’s certified in CPR, local anesthesia, nitrous oxide, and holds a dental assisting license—equipped with the skills to support a wide range of patient needs. For Breslyn, dentistry is about more than clean teeth—it’s about creating confidence. “My goal will always be to make people smile,” she shares, “and I’ll always strive for that.” When not in scrubs, Breslyn enjoys lifting weights, going on nature walks, cooking meals from scratch, and spending quality time with her friends and family.",
  },
  {
    name: "Danielle",
    role: "Dental Hygienist",
    photo: "/images/staff/Singleton-Smiles-Danielle.webp",
    bio: "Danielle has been a part of Dr. Singleton’s team for a year and a half, bringing over 21 years of experience as a Registered Dental Hygienist. A proud University of Michigan graduate, she holds a Bachelor’s degree in Dental Hygiene and is certified in nitrous oxide, local anesthesia, and CPR. What Danielle finds most rewarding is building strong relationships with patients and empowering them with the knowledge and care they need to maintain lifelong oral health. Outside of the office, Danielle enjoys spending time with her family, cheering on her kids at their baseball games, and traveling to new places to make lasting memories.",
  },
  
  {
    name: "Michelle",
    role: "Dental Hygienist",
    photo: "/images/staff/Singleton-Smiles-Michelle.jpeg",
    bio: "Michelle has been an integral part of Dr. Singleton’s practice since 1997. She earned an Associate of Applied Science in Dental Hygiene from Kalamazoo Valley Community College and holds certifications in laser dentistry and CPR. Her favorite aspects of dental care include working with pediatric patients and treating periodontal conditions. Outside the office, you’ll find her enjoying time with her husband and two boys—biking, playing pickleball, cheering at every home U of M football game, or setting off on travel adventures.",
  },
  {
    name: "Tara",
    role: "Dental Hygienist",
    photo: "/images/staff/Singleton-Smiles-Tara.jpeg",
    bio: "As a valued member of Dr. Singleton’s practice for the past nine years, Tara brings both expertise and compassion to her role as a Registered Dental Hygienist. She holds a Bachelor’s degree in Nutritional Sciences from Michigan State University and a Bachelor’s degree in Dental Hygiene from the University of Detroit Mercy. What Tara finds most rewarding is helping patients improve their oral health and make a meaningful, lasting impact. Outside the office, Tara cherishes time with her husband and their two young boys and enjoys family outings to Lake Michigan.",
  },
]

export const dentalAssistants: TeamMember[] = [
  {
    name: "Jocelynn",
    role: "Dental Assistant",
    photo: "/images/staff/Singleton-Smiles-Jocelynn.jpeg",
    bio: "Jocelynn is a dedicated dental assistant with hands-on experience since 2021. Certified in x-ray radiology, she brings both technical expertise and a warm, reassuring presence to every patient interaction. Outside of work, Jocelynn enjoys tennis, pickleball, and cooking in her spare time.",
  },
  {
    name: "Kari",
    role: "Dental Assistant",
    photo: "/images/staff/Singleton-Smiles-Kari.jpeg",
    bio: "With over 37 years in the dental assisting field, Kari brings a wealth of experience and expertise. She has worked alongside Dr. Singleton for more than 4½ years and is certified in X-ray technology, CPR/OSHA compliance, and sleep apnea care. Outside of work, Kari enjoys spending quality time with her daughters, golfing, and keeping up with her favorite sports.",
  },
  {
    name: "Lori",
    role: "Dental Assistant",
    photo: "/images/staff/Singleton-Smiles-Lori.jpeg",
    bio: "Lori has been a valued team member at Dr. Singleton’s practice since 2006. She earned her Dental Assisting certificate from Washtenaw Community College and is a Registered Dental Assistant, certified in radiographs and CPR. Outside the office, Lori finds peace in attending church, fishing and boating with her family, walking quiet beaches, reading, and listening to birds and windchimes.",
  },
  {
    name: "Maryanne",
    role: "Dental Assistant",
    photo: "/images/staff/Singleton-Smiles-Maryanne.jpeg",
    bio: "With over 26 years at Dr. Singleton’s practice, Maryanne brings deep expertise and a lasting passion for dentistry. She holds an Associate’s degree in Dental Assisting from Washtenaw Community College and is a Registered Dental Assistant, certified in radiographs, CPR, and OSHA compliance. Outside the office, she embraces the outdoors—snowmobiling in Northern Michigan, diving off the coast of Hawaii, and skiing in Alaska.",
  },
  {
    name: "Pam",
    role: "Dental Assistant",
    photo: "/images/staff/Singleton-Smiles-Pam-v2.webp",
    bio: "Pam has been a dedicated part of Dr. Singleton’s practice since 1997, beginning her journey in dental assisting during her junior year of high school. She is a Registered Dental Assistant, certified in dental radiology, CPR, and OSHA compliance. When she’s not in the office, Pam enjoys quality time with her grandchildren and husband, relaxing walks, visits to Florida, and cheering on Michigan football and basketball with her family.",
  },
]

export const officeTeam: TeamMember[] = [
  {
    name: "Cathy",
    role: "Practice Administrator",
    photo: "/images/staff/Singleton-Smiles-Cathy.jpeg",
    bio: "Cathy brings over 30 years of experience and a strong commitment to patient care. A graduate of Eastern Michigan University with a degree in Business Administration, she ensures smooth operations through her exceptional organizational skills. Outside work, she enjoys relaxing at home with her husband and their dog.",
  },
  {
    name: "Cynthia",
    role: "Patient Care Specialist",
    photo: "/images/staff/Singleton-Smiles-Cynthia.jpeg",
    bio: "Cynthia has been a part of Dr. Singleton’s front office team for two years, bringing a warm and welcoming presence to every patient interaction. Outside of work, Cynthia loves preparing fresh, seasonal meals for her family using ingredients from her garden and orchard, and enjoys reading and making handmade jewelry.",
  },
  {
    name: "Maddie",
    role: "Patient Care Specialist",
    photo: "/images/staff/Singleton-Smiles-Maddie.jpeg",
    bio: "Since joining Dr. Singleton’s practice in 2015, Maddie has been a bright and calming presence for patients and staff alike. She holds a Bachelor of Science in Communication Sciences and Disorders with a Psychology minor from Eastern Michigan University. Outside the office, Maddie enjoys relaxing with her boyfriend and her black cat, Sonic, and unwinding anywhere near water.",
  },
]

export type TeamGroupHighlight = {
  title: string
  description: string
  namesLine: string
  image: string
}

export const teamGroupsHome: TeamGroupHighlight[] = [
  {
    title: "Dental hygienists",
    description:
      "Preventive care, thorough cleanings, and clear guidance—so you leave confident about your oral health.",
    namesLine: dentalHygienists.map((m) => m.name).join(", "),
    image: "/images/consultorio.png",
  },
  {
    title: "Dental assistants",
    description:
      "Skilled chairside support that keeps visits efficient, comfortable, and calm from start to finish.",
    namesLine: dentalAssistants.map((m) => m.name).join(", "),
    image: "/images/capilla.png",
  },
  {
    title: "Office team",
    description:
      "Friendly voices at the front desk who make scheduling, insurance questions, and arrivals stress-free.",
    namesLine: officeTeam.map((m) => m.name).join(", "),
    image: "/images/office.png",
  },
]

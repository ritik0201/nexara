export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  rating?: number;
  featured?: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote: "Nexara's interpretation services were the cornerstone of our APAC regional summit. Their ability to handle technical financial nuances in four languages simultaneously was nothing short of extraordinary. They are, without a doubt, the gold standard in linguistic support.",
    author: "Julianne V. Sinclair",
    role: "Director of International Relations, Global Finance Corp",
    featured: true
  },
  {
    id: "t2",
    quote: "Nexara didn't just provide interpretation; they orchestrated a linguistic symphony that bridged four continents and three ideologies. In the high-stakes world of diplomatic summits, their precision is the invisible foundation of our success.",
    author: "H.E. Amara Vance",
    role: "Chief Protocol Officer, International Security Forum",
    featured: true
  },
  {
    id: "t3",
    quote: "Their technical translators handled our complex aerospace jargon with an accuracy that stunned even our senior engineers.",
    author: "Marcus Thorne",
    role: "Director of Communications, Zenith Aerospace",
    rating: 5
  },
  {
    id: "t4",
    quote: "Professionalism at its peak. The Nexara team is now an essential part of our European expansion strategy.",
    author: "Elena Moretti",
    role: "VP of Operations, Luxe Global",
    rating: 5
  },
  {
    id: "t5",
    quote: "Seamless, elegant, and precise. For our annual gala, we wouldn't trust any other language partner to represent our brand voice.",
    author: "Julien de Saint",
    role: "Founder, Ethereal Events Paris",
    rating: 5
  },
  {
    id: "t6",
    quote: "The cultural nuances they captured in the Mandarin translations were pivotal for our joint-venture negotiations in Shanghai.",
    author: "Dr. Sarah Wu",
    role: "Senior Legal Counsel, Fintech Alliance",
    rating: 5
  }
];

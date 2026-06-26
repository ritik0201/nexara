export interface IndustrySegment {
  id: string;
  name: string;
  icon: string; // Will map to Lucide icon names dynamically
  description: string;
  bullets: string[];
  delay: number;
}

export const industries: IndustrySegment[] = [
  {
    id: "corporate",
    name: "Corporate",
    icon: "Briefcase",
    description: "M&A negotiations, global board meetings, and high-stakes executive training for Fortune 500 multinationals.",
    bullets: [
      "Global Board Advisory",
      "Internal Communications",
      "Regulatory Compliance"
    ],
    delay: 0.05
  },
  {
    id: "government",
    name: "Government",
    icon: "Landmark",
    description: "Diplomatic protocol, G7/G20 summit support, and secure translation for defense and intelligence agencies.",
    bullets: [
      "Diplomatic Protocol",
      "Inter-Agency Briefings",
      "Public Policy Translation"
    ],
    delay: 0.1
  },
  {
    id: "education",
    name: "Education",
    icon: "GraduationCap",
    description: "Curriculum localization for global universities and simultaneous interpretation for international research symposiums.",
    bullets: [
      "Academic Localization",
      "Research Dissemination",
      "Distance Learning Support"
    ],
    delay: 0.15
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: "HeartPulse",
    description: "Clinical trial documentation, telehealth interpretation, and medical device localization with zero-error mandates.",
    bullets: [
      "Clinical Trial Data",
      "Bio-Pharmaceutical Compliance",
      "Patient Care Solutions"
    ],
    delay: 0.2
  },
  {
    id: "technology",
    name: "Technology",
    icon: "Cpu",
    description: "Software localization, technical manual translation, and specialized interpretation for product launches and developer conferences.",
    bullets: [
      "SaaS Localization",
      "UX/UI Adaptation",
      "AI Model Training Sets"
    ],
    delay: 0.25
  },
  {
    id: "conferences",
    name: "Conferences",
    icon: "Mic",
    description: "End-to-end linguistic management for global summits, including equipment logistics and elite simultaneous interpreters.",
    bullets: [
      "Simultaneous Interpretation",
      "Technical Equipment Rental",
      "Event Concierge Services"
    ],
    delay: 0.3
  }
];

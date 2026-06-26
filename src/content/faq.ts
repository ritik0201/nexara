export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    category: "General",
    items: [
      {
        question: "What defines Nexara's approach to global communication?",
        answer: "Nexara merges heritage-grade linguistic precision with ultra-modern corporate intelligence. We don't just translate words; we synchronize cultural nuances and strategic intent for multinational entities and high-profile individuals."
      },
      {
        question: "Do you offer 24/7 support for international time zones?",
        answer: "Yes. Our global network operates across three continents, ensuring that high-priority requests in Tokyo, London, or New York are handled with immediate response times by localized experts."
      }
    ]
  },
  {
    category: "Translation Services",
    items: [
      {
        question: "What technical file formats do you support?",
        answer: "We support over 80 file formats, ranging from standard legal PDF documents and complex Excel architectures to proprietary software source code and high-end Adobe Creative Cloud files for marketing localization."
      }
    ]
  },
  {
    category: "Interpretation Services",
    items: [
      {
        question: "Can Nexara provide on-site interpreters for secure board meetings?",
        answer: "Absolutely. We deploy vetted, expert interpreters specializing in high-finance and diplomatic protocols. Our team adheres to strict non-disclosure agreements and physical security standards suitable for G20-level discussions."
      }
    ]
  },
  {
    category: "Booking & Logistics",
    items: [
      {
        question: "How quickly can a consultant be assigned to a new project?",
        answer: "For existing corporate accounts, project initiation typically occurs within 2 to 4 hours. New clients can expect a comprehensive strategic brief and consultant matching within 12 business hours."
      }
    ]
  },
  {
    category: "Pricing & Confidentiality",
    items: [
      {
        question: "How is data privacy handled for sensitive corporate documents?",
        answer: "We utilize AES-256 bit encryption for all file transfers and dedicated private servers for document processing. Our facilities are ISO 27001 certified, ensuring that your data remains hermetically sealed within our ecosystem."
      }
    ]
  }
];

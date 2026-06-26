export interface Language {
  name: string;
}

export interface LanguageCategory {
  category: string;
  languages: string[];
}

export const languageCategories: LanguageCategory[] = [
  {
    category: "European Languages",
    languages: [
      "English (UK/US)",
      "French",
      "German",
      "Spanish",
      "Italian",
      "Portuguese",
      "Russian",
      "Dutch",
      "Swedish"
    ]
  },
  {
    category: "Asian Languages",
    languages: [
      "Mandarin Chinese",
      "Japanese",
      "Korean",
      "Thai",
      "Vietnamese",
      "Bahasa Indonesia",
      "Malay"
    ]
  },
  {
    category: "Middle Eastern Languages",
    languages: [
      "Arabic (Modern Standard)",
      "Arabic (Gulf)",
      "Farsi",
      "Turkish",
      "Hebrew"
    ]
  },
  {
    category: "Indian Regional Languages",
    languages: [
      "Hindi",
      "Bengali",
      "Tamil",
      "Telugu",
      "Marathi",
      "Gujarati",
      "Kannada",
      "Malayalam",
      "Punjabi"
    ]
  },
  {
    category: "African Languages",
    languages: [
      "Swahili",
      "Amharic",
      "Yoruba",
      "Zulu"
    ]
  }
];

export type PageId = 'home' | 'book' | 'mentoring' | 'mastermind' | 'about' | 'contact';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location?: string;
}

export interface BookChapter {
  number: string;
  title: string;
  subtitle: string;
  excerpt: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

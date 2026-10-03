export interface NavItem {
  label: string;
  href: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  focusAreas: string[];
}

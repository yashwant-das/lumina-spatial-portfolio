export type SectionId = 'home' | 'work' | 'about' | 'contact';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface NavItem {
  id: SectionId;
  label: string;
  icon: React.ReactNode;
}
export type SkillCategory = 'marketing' | 'seo' | 'graphics' | 'tools';

export interface SkillItem {
  name: string;
  category: SkillCategory;
  level: number; // 0 to 100
  iconName?: string;
  badge?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'marketing' | 'seo' | 'graphics';
  tagline: string;
  description: string;
  features: string[];
  tools: string[];
  highlightMetric: string;
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: 'marketing' | 'seo' | 'graphics';
  client: string;
  industry: string;
  year: string;
  summary: string;
  challenge: string;
  strategy: string;
  results: {
    metric: string;
    label: string;
    trend: 'up' | 'down';
  }[];
  tags: string[];
  coverImage: string;
  deliverables: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface GraphicDesignItem {
  id: string;
  title: string;
  category: 'Branding & Logo' | 'Social Media Creatives' | 'Packaging & Print' | 'Ad Banners';
  image: string;
  description: string;
  software: string[];
  client: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  highlight: string;
  serviceType: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  deliverables: string[];
}

export interface PersonalInfo {
  name: string;
  role: string;
  secondaryRoles: string[];
  location: string;
  email: string;
  whatsappNumber: string;
  availability: string;
  bio: string;
  githubUrl: string;
  linkedinUrl: string;
  behanceUrl?: string;
  experienceYears: number;
  completedProjects: number;
  happyClients: number;
  totalAdSpendManaged: string;
}

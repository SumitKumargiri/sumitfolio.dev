/**
 * Global type definitions for the application
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: 'Full-Stack' | 'Frontend' | 'Backend';
  github: string;
  demo: string;
  featured?: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  achievements: string[];
  startDate: Date;
  endDate: Date | null;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  icon: string;
  href: string;
  label: string;
}

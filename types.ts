
export interface Project {
  id: string;
  title: string;
  description: string;
  features?: string[];
  tools: string[];
  imageUrl: string;
  link: string;
  status: string;
  impact?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
  proficiency: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface AIFrameworkItem {
  stage: string;
  description: string;
  icon: string;
  outcome: string;
}

export interface DeveloperInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  whatsapp: string;
  facebook: string;
  linkedin: string;
  profileImage: string;
  specializations: string[];
  environment: string[];
}

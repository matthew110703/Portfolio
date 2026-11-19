export interface V1Organization {
  name: string;
  url: string;
  location: string;
}

export interface V1ExperienceItem {
  id: number;
  title: string;
  company: V1Organization;
  from: string;
  to: string;
  description: string;
  technologies: string[];
}

export interface V1EducationItem {
  id: number;
  degree: string;
  institution: V1Organization;
  from: string;
  to: string;
  description: string;
  technologies: string[];
}

export interface V1SkillItem {
  label: string;
  icon: string;
}

export interface V1SkillCategories {
  programming_languages: V1SkillItem[];
  frontend: V1SkillItem[];
  backend: V1SkillItem[];
  tools: V1SkillItem[];
}

export interface V1SocialLinks {
  github: string;
  linkedin: string;
  twitter: string;
}

export interface V1ProjectItem {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  source: string;
  live: string;
  thumbnail: string;
}

export interface V1Quote {
  text: string;
  author: string;
}

export interface V1PortfolioData {
  name: string;
  role: string;
  location: string;
  email: string;
  about: string;
  summary: string[];
  quote: V1Quote;
  core_skills: string[];
  experience: V1ExperienceItem[];
  education: V1EducationItem[];
  skills: V1SkillCategories;
  social: V1SocialLinks;
  projects: V1ProjectItem[];
}

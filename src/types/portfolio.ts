export interface SocialLink {
  label: string;
  href: string;
  handle: string;
  key: "github" | "linkedin";
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  description: string;
  supportingStack: string[];
}

export interface AboutContent {
  heading: string;
  paragraphs: string[];
  quickFacts: string[];
}

export interface ProductContribution {
  product: string;
  summary: string;
}

export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  location: string;
  summary?: string;
  productContributions?: ProductContribution[];
  highlights: string[];
  additionalNote?: string;
  technologies: string[];
  featured?: boolean;
}

export interface EducationEntry {
  id: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  period: string;
  location: string;
  grade?: string;
}

export type ProjectVisualId =
  "pstack" | "commerce" | "fulfilment" | "braindance" | "garuda";

export interface ProjectLinks {
  github?: string;
  live?: string;
}

export interface ProjectCaseStudy {
  context: string;
  contribution: string[];
  engineeringDecisions: string[];
  outcomes: string[];
  note?: string;
}

export interface FeaturedProject {
  slug: string;
  index: string;
  title: string;
  category: string;
  summary: string;
  contributionHighlight: string;
  confidential: boolean;
  confidentialLabel?: string;
  links: ProjectLinks;
  technologies: string[];
  visual: ProjectVisualId;
  caseStudy: ProjectCaseStudy;
}

export interface ArchiveProject {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  thumbnail: string;
}

export interface SkillGroup {
  title: string;
  cadence: string;
  items: string[];
}

export interface CapabilitiesContent {
  groups: SkillGroup[];
  learning: string;
  additionalExposure: string;
}

export interface ContactContent {
  heading: string;
  description: string;
}

export interface SiteMetadataContent {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  keywords: string[];
}

export interface PortfolioData {
  name: string;
  role: string;
  positioning: string;
  location: string;
  shortLocation: string;
  email: string;
  siteUrl: string;
  resumeUrl: string;
  resumeFileName: string;
  social: SocialLink[];
  hero: HeroContent;
  about: AboutContent;
  experience: ExperienceEntry[];
  education: EducationEntry[];
  featuredProjects: FeaturedProject[];
  earlierWork: ArchiveProject[];
  capabilities: CapabilitiesContent;
  contact: ContactContent;
  seo: SiteMetadataContent;
}

export interface NavigationItem {
  label: string;
  href: string;
}

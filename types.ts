export interface MediaItem {
  type: 'video' | 'social' | 'image' | 'repo' | 'website';
  title: string;
  url: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  url?: string;
  articles?: { title: string; url: string; }[];
  media?: MediaItem[];
}

export interface EducationItem {
  school: string;
  degree: string;
  location: string;
  period: string;
  gpa?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectItem {
  name: string;
  role: string;
  url?: string;
  tech?: string;
  description: string;
}
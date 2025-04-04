export interface Education {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  description?: string;
}

export interface Experience {
  position: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
  icon: string; // Changed to string identifier
}

export interface Certificate {
  name: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  instagram: string;
  website: string;
}

export interface PersonalInfo {
  fullName: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  gender: string;
  languages: Array<{
    language: string;
    level: string;
  }>;
  bio: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  videoUrl?: string;  // Adding video URL support
  githubUrl?: string;
  liveUrl?: string;
}

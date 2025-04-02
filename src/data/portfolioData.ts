import { Education, Experience, SkillGroup, Certificate, ContactInfo, PersonalInfo, Project } from '@/types/portfolio';

export const personalInfo: PersonalInfo = {
  fullName: "Victor Chidera Ani",
  firstName: "Victor",
  lastName: "Ani",
  dateOfBirth: "October 8, 1992",
  nationality: "Nigerian",
  gender: "Male",
  languages: [
    { language: "Igbo", level: "Native" },
    { language: "English", level: "B2 proficiency" }
  ],
  bio: "I am a versatile professional with a unique blend of expertise in Computer Science and Hospitality Management. My academic journey began with a Diploma in Computer Science from the Institute of Management and Technology in Nigeria, followed by a Bachelor's degree in Hospitality Management from Internapa College in Cyprus, where I had the opportunity to participate in the ERASMUS+ Program at Varna University of Management in Bulgaria. I am currently pursuing an MBA in Cyprus. My professional experience spans various roles, from IT Management and Customer Service to Bartending and Creative Direction. I have a strong technical skill set, including proficiency in JavaScript, TypeScript, Angular, Node.js, and React, along with advanced competencies in MS Office and digital data handling. I am adaptable to both old and new technologies, and my soft skills include leadership, organizational abilities, communication, teamwork, problem-solving, and stress management. I have extensive experience managing and mentoring others, including raising five younger siblings, which has honed my leadership skills. I am passionate about emerging technologies, finance, and the hospitality industry."
};

export const educationData: Education[] = [
  {
    institution: "Internapa College",
    degree: "Bachelor of Arts",
    field: "Hospitality Management",
    duration: "2019–2023",
    location: "Cyprus",
    description: "Completed a comprehensive program with a focus on hospitality, tourism management, and service excellence."
  },
  {
    institution: "Varna University of Management",
    degree: "ERASMUS+ Program",
    field: "Management",
    duration: "2022–2023",
    location: "Bulgaria",
    description: "Participated in the European Union's student exchange program to gain international educational experience."
  },
  {
    institution: "Institute of Management and Technology",
    degree: "Diploma",
    field: "Computer Science",
    duration: "2010–2012",
    location: "Nigeria",
    description: "Developed a strong foundation in programming, web technology, and computer systems."
  },
  {
    institution: "Cyprus University",
    degree: "MBA",
    field: "Business Administration",
    duration: "Currently Pursuing",
    location: "Cyprus",
    description: "Advancing my knowledge in business management and leadership strategies."
  }
];

export const experienceData: Experience[] = [
  {
    position: "Bartender",
    company: "Sunrise Beach Hotel",
    duration: "2021–2023",
    location: "Cyprus",
    responsibilities: [
      "Crafted and served a wide variety of cocktails and beverages",
      "Prepared specialty coffee drinks for hotel guests",
      "Managed cashier duties and financial transactions",
      "Trained new waitstaff in service protocols and customer relations"
    ]
  },
  {
    position: "IT Manager",
    company: "Potech Electrical Engineering Limited",
    duration: "2015–2016",
    location: "Nigeria",
    responsibilities: [
      "Implemented and maintained comprehensive data backup systems",
      "Managed daily IT department operations and resolved technical issues",
      "Coordinated technology resources and optimized system performance",
      "Provided technical support and training to staff members"
    ]
  },
  {
    position: "Marketer/Customer Service",
    company: "Coal Camp Microfinance Bank",
    duration: "2013–2014",
    location: "Nigeria",
    responsibilities: [
      "Acquired new clients through targeted outreach and relationship building",
      "Developed and implemented customer retention strategies",
      "Created effective marketing strategies to increase brand awareness",
      "Provided exceptional customer service and support to clients"
    ]
  },
  {
    position: "Creative Director for Event Coverage",
    company: "X-el Images",
    duration: "2017–2019",
    location: "Nigeria",
    responsibilities: [
      "Provided artistic direction for event photography and videography",
      "Coordinated event coverage teams to ensure comprehensive documentation",
      "Managed client relationships and expectations for event deliverables",
      "Edited and produced final media products for client approval"
    ]
  }
];

export const skillsData: SkillGroup[] = [
  {
    category: "Technical Skills",
    items: [
      "JavaScript",
      "TypeScript",
      "Angular",
      "Node.js",
      "React",
      "MS Office Suite",
      "Digital Data Management",
      "System Administration"
    ],
    icon: "code"
  },
  {
    category: "Hospitality Skills",
    items: [
      "Cocktail Making",
      "Coffee Preparation",
      "Customer Service",
      "Food & Beverage Management",
      "Event Management",
      "Hotel Operations"
    ],
    icon: "coffee"
  },
  {
    category: "Soft Skills",
    items: [
      "Leadership",
      "Organization",
      "Communication",
      "Teamwork",
      "Problem Solving",
      "Stress Management",
      "Adaptability",
      "Time Management"
    ],
    icon: "users"
  },
  {
    category: "Education & Certifications",
    items: [
      "Angular Framework Certification",
      "Advanced Excel Training",
      "Hospitality Management",
      "Computer Science"
    ],
    icon: "graduation-cap"
  }
];

export const certificatesData: Certificate[] = [
  {
    name: "Angular Framework Certification",
    issuer: "Angular University",
    date: "2017",
    description: "Comprehensive certification covering Angular framework fundamentals and advanced concepts."
  },
  {
    name: "Advanced Excel Training",
    issuer: "Self-taught",
    date: "2016",
    description: "Mastery of advanced Excel functions including pivot tables, macros, and data analysis."
  }
];

export const contactInfo: ContactInfo = {
  email: "victorchideraani@gmail.com",
  phone: "(+48) 883929543",
  instagram: "@span.exx_",
  website: "spanexx.com"
};

export const projectsData: Project[] = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, experience, and projects.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/spanexx/portfolio"
  },
  {
    title: "Hospitality Management System",
    description: "A comprehensive system for managing hotel operations including reservations, room service, and billing.",
    technologies: ["Angular", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/spanexx/hospitality-management"
  },
  {
    title: "Cocktail Recipe App",
    description: "A mobile-responsive web application featuring a variety of cocktail recipes with detailed preparation instructions.",
    technologies: ["React", "Firebase", "CSS3"],
    githubUrl: "https://github.com/spanexx/cocktail-recipes"
  },
  {
    title: "Event Management Platform",
    description: "A platform for planning and managing events, including guest lists, venue details, and scheduling.",
    technologies: ["JavaScript", "Express.js", "MySQL"],
    githubUrl: "https://github.com/spanexx/event-manager"
  }
];

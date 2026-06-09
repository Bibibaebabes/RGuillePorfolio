
import { Layout, Code, PenTool, Database, Globe, Zap, Cpu, Smartphone, Monitor, Search, Settings, Rocket } from 'lucide-react';
import { Project, SkillCategory, Service, AIFrameworkItem } from './types';

export const DEVELOPER_INFO = {
  name: "Realyn L. Guille",
  role: "Full Stack Developer | App & Web Specialist",
  tagline: "Building Tomorrow's Digital Solutions Today",
  location: "Philippines",
  email: "realynguille999@gmail.com",
  phone: "09352042140",
  whatsapp: "09352042140",
  facebook: "https://www.facebook.com/realynguille27",
  linkedin: "https://www.linkedin.com/in/guille-realyn-l-375a6a371",
  profileImage: "/profile.jpg",
  bio: "BS Information Technology graduate specializing in full-stack development. Passionate about creating scalable applications that solve real-world problems.",
  specializations: [
    "Full Stack Web Development",
    "Cross-Platform Mobile Apps",
    "Real-time Systems Architecture"
  ],
  environment: [
    "React",
    "Flutter",
    "Node.js",
    "Firebase",
    "MongoDB"
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design", "Framer Motion"],
    proficiency: "Advanced",
    icon: "Layout"
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Python", "RESTful APIs", "JWT Authentication", "Middleware", "Server Architecture"],
    proficiency: "Intermediate",
    icon: "Code"
  },
  {
    title: "Database & Data",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase Firestore", "Database Design", "SQL Queries", "Data Modeling"],
    proficiency: "Intermediate",
    icon: "Database"
  },
  {
    title: "Mobile Development",
    skills: ["Flutter", "Dart", "Cross-Platform", "Native UI", "App Performance", "Firebase Integration"],
    proficiency: "Advanced",
    icon: "Smartphone"
  },
  {
    title: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "Linux", "VS Code", "Postman", "npm/yarn", "CI/CD Basics"],
    proficiency: "Intermediate",
    icon: "Settings"
  },
  {
    title: "Software Engineering",
    skills: ["System Design", "Data Structures", "OOP Principles", "Design Patterns", "Algorithms", "Testing", "Agile"],
    proficiency: "Intermediate",
    icon: "Cpu"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Capstone: AEDEX - Community-Based Dengue Breeding Sites Monitoring Using Image Classification and Geotagging",
    description: "A comprehensive mobile and web platform for real-time dengue prevention through image classification to detect mosquito breeding sites and predict mosquito types, combined with geotagging for risk mapping and real-time notifications for community-based dengue monitoring.",
    features: ["Image classification for breeding sites", "Geotagging for user location", "Email authentication", "Real-time notifications"],
    tools: ["Flutter", "Firebase", "Django", "React", "MobileNetV2", "Leaflet.js", "Chart.js", "Tailwind CSS"],
    imageUrl: "/aedex-app.png",
    link: "#",
    status: "Completed",
    impact: "Developed full-stack solution connecting 30+ residents with local health authorities for dengue prevention"
  },
  {
    id: "2",
    title: "Internship: USS (Universal Survey System) - LODIxR Project",
    description: "Front-end developer for the Universal Survey System project under LODIxR. Designed and implemented key survey management interfaces including survey list operations and response analytics dashboard for the Department of Science and Technology.",
    features: ["Completed Interface", "Read, Update and Delete in View Survey list Interface", "View Survey Responses Results"],
    tools: ["React", "Node.js", "TypeScript", "Redux", "Clean Architecture", "MVVM Architecture", "Git", "GitHub", "OpenProject"],
    imageUrl: "/uss-dashboard.png",
    link: "#",
    status: "In Development",
    impact: "Delivered complete survey management interface for DOST LODIxR project serving multiple survey administrators"
  },
  {
    id: "3",
    title: "Academic: Grading Management System",
    description: "A comprehensive school-based grading management system for handling student grades, course management, and academic performance tracking. Built with a robust backend to manage faculty, admin, and student roles with role-based access control and grade reporting capabilities.",
    features: ["Student grades management", "Course management", "Grade reporting"],
    tools: ["PHP", "HTML", "CSS", "Bootstrap 5", "XAMPP"],
    imageUrl: "/grading-system.png",
    link: "#",
    status: "Completed",
    impact: "Implemented complete academic management system for school operations with role-based access control"
  }
];

export const WORKFLOW_STEPS = [
  {
    title: "Discovery & Analysis",
    description: "Deep dive into requirements, user needs, and technical constraints to define clear project scope.",
    icon: "Search",
    details: "Stakeholder interviews, requirement documentation, technical feasibility study"
  },
  {
    title: "Architecture & Design",
    description: "Creating scalable architecture, wireframes, mockups, and database schema design.",
    icon: "PenTool",
    details: "System design, UI/UX mockups, API documentation, database schema"
  },
  {
    title: "Development",
    description: "Building scalable frontend, robust backend, and optimized database implementations.",
    icon: "Code",
    details: "Component development, API creation, database optimization, code review"
  },
  {
    title: "Quality Assurance",
    description: "Comprehensive testing, performance optimization, and security hardening.",
    icon: "Cpu",
    details: "Unit testing, integration testing, performance profiling, security audit"
  },
  {
    title: "Deployment & Support",
    description: "Production deployment, monitoring, and ongoing maintenance for optimal performance.",
    icon: "Rocket",
    details: "CI/CD pipeline, server deployment, monitoring setup, technical support"
  }
];

export const AI_FRAMEWORK: AIFrameworkItem[] = [
  {
    stage: "Research & Learning",
    description: "Staying updated with latest technologies, design patterns, and industry best practices through courses and documentation.",
    icon: "Search",
    outcome: "Technical Expertise"
  },
  {
    stage: "Design & Planning",
    description: "Creating detailed specifications, architecture diagrams, and implementation plans for scalability and maintainability.",
    icon: "PenTool",
    outcome: "Solid Blueprint"
  },
  {
    stage: "Development & Implementation",
    description: "Writing clean, efficient code using best practices and modern frameworks to build high-performance applications.",
    icon: "Code",
    outcome: "Production Code"
  },
  {
    stage: "Testing & Optimization",
    description: "Conducting thorough testing, performance profiling, and applying optimization techniques for excellence.",
    icon: "Zap",
    outcome: "Polished Product"
  }
];

export const STATS = [
  { label: "Technologies Mastered", value: "10+" },
  { label: "Full Stack Apps Built", value: "15+" },
  { label: "Ready to Launch", value: "June 2026" }
];

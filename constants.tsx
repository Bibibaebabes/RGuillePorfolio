
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
  facebook: "Realyn Guille",
  linkedin: "Realyn Guille",
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
    proficiency: "Expert",
    icon: "Layout"
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Python", "RESTful APIs", "JWT Authentication", "Middleware", "Server Architecture"],
    proficiency: "Advanced",
    icon: "Code"
  },
  {
    title: "Database & Data",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Firebase Firestore", "Database Design", "SQL Queries", "Data Modeling"],
    proficiency: "Advanced",
    icon: "Database"
  },
  {
    title: "Mobile Development",
    skills: ["Flutter", "Dart", "Cross-Platform", "Native UI", "App Performance", "Firebase Integration"],
    proficiency: "Intermediate",
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
    proficiency: "Advanced",
    icon: "Cpu"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Capstone Project: Smart Learning Hub",
    description: "A comprehensive full-stack educational platform for real-time learning collaboration, assignment tracking, and student-teacher interaction.",
    features: ["Real-time notifications", "Role-based access control", "Analytics dashboard", "File management system", "Video integration"],
    tools: ["React", "Node.js", "MongoDB", "Firebase", "Express"],
    imageUrl: "https://picsum.photos/seed/capstone/800/600",
    link: "#",
    status: "In Development",
    impact: "Designed to improve learning efficiency for 500+ students"
  },
  {
    id: "2",
    title: "Internship: E-Commerce Platform Optimization",
    description: "Enhanced frontend performance and implemented new features for a high-traffic e-commerce platform during professional internship.",
    features: ["Performance optimization", "UI/UX improvements", "Payment gateway integration", "Search functionality", "Product recommendations"],
    tools: ["React", "TypeScript", "Redux", "REST APIs", "Stripe"],
    imageUrl: "https://picsum.photos/seed/internship/800/600",
    link: "#",
    status: "Completed",
    impact: "Reduced page load time by 40%, increased conversion by 25%"
  },
  {
    id: "3",
    title: "Academic: Fleet Management System",
    description: "Database-driven backend system for managing vehicle fleet operations, maintenance schedules, and driver assignments.",
    features: ["Inventory management", "Maintenance tracking", "Driver scheduling", "Route optimization", "Report generation"],
    tools: ["Python", "MySQL", "Flask", "SQLAlchemy", "JWT"],
    imageUrl: "https://picsum.photos/seed/academic/800/600",
    link: "#",
    status: "Completed",
    impact: "Reduced fleet management overhead by 60%"
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

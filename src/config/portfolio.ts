/**
 * ────────────────────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — edit everything here.
 *  Single source of truth for all text/data on the site.
 * ────────────────────────────────────────────────────────────────────────────
 */

export const profile = {
  name: "Shweta Yadav",
  initials: "SY",
  /** Rotating roles shown under the name in the hero. */
  roles: ["Full Stack Developer", "AI & Web Developer"],
  /** One/two-sentence hero tagline. */
  tagline:
    "Full-stack developer building AI-powered web apps — from intelligent chatbots to real-time computer-vision systems. I turn complex problems into fast, polished products.",
  location: "Maharashtra, India",
  email: "shweta22y@gmail.com",
  phone: "+91 9359189352",
  /** Link to your resume PDF (drop it in /public and set e.g. "/resume.pdf"). */
  resumeUrl: "#",
};

export const about = {
  paragraphs: [
    "I'm a full-stack developer who builds fast, AI-powered web applications. I care about clean architecture, thoughtful UX, and shipping products that feel effortless to use. From wiring LLMs into chatbots to building real-time computer-vision systems with face recognition, I like working where solid engineering meets real-world impact. I'm always learning, and I take pride in writing maintainable code that holds up.",
  ],
  facts: [
    { label: "Based in", value: "Maharashtra, India" },
    { label: "Degree", value: "B.Tech, CSE" },
    { label: "Focus", value: "Full-Stack & AI" },
  ],
};

export type Social = {
  label: string;
  href: string;
  /** icon key: github | linkedin | twitter | mail | phone | instagram | youtube */
  icon: string;
};

export const socials: Social[] = [
  { label: "GitHub", href: "https://github.com/ShwetaYadav224", icon: "github" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
  { label: "Phone", href: `tel:${profile.phone.replace(/\s+/g, "")}`, icon: "phone" },
  // 👇 Add these when you have them:
  // { label: "LinkedIn", href: "https://linkedin.com/in/your-handle", icon: "linkedin" },
  // { label: "Twitter / X", href: "https://twitter.com/your-handle", icon: "twitter" },
];

export type Job = {
  company: string;
  role: string;
  /** Short text used as the logo badge. */
  logo: string;
  start: string;
  end: string;
  description: string;
  technologies: string[];
};

export const work: Job[] = [
  {
    company: "Anthaathi Private Limited",
    role: "Web Development Intern",
    logo: "AN",
    start: "Dec 2025",
    end: "Jun 2026",
    description:
      "Worked on web development tasks and built responsive, accessible web interfaces across multiple projects.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export type School = {
  institution: string;
  degree: string;
  logo?: string;
  start: string;
  end: string;
  description?: string;
  bullets?: string[];
  href?: string;
};

export const education: School[] = [
  {
    institution: "Sanjay Ghodawat University",
    degree: "B.Tech · Computer Science & Engineering",
    start: "2023",
    end: "2026",
    description: "Building a practical foundation in applied AI, machine learning, software engineering, and full-stack product development.",
  },
  {
    institution: "Dr. D. Y. Patil Polytechnic",
    degree: "Diploma · Computer Engineering",
    start: "2021",
    end: "2023",
    description: "Developed core skills in programming, databases, computer systems, and software development through a project-focused curriculum.",
    bullets: ["Programming fundamentals", "Android development", "Web development"]
  },
];

export type SkillGroup = {
  label: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Flutter"],
  },
  {
    label: "Backend",
    items: ["Django", "GraphQL", "FastAPI"],
  },
  {
    label: "AI",
    items: ["LLM applications", "LangChain", "Gemini"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Linux"],
  },
];

export type Project = {
  title: string;
  category?: string;
  description: string;
  date: string;
  technologies: string[];
  live?: string;
  source?: string;
  /** Optional project screenshot/thumbnail URL (import from src/assets or a URL). */
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Chillstream — Netflix Clone",
    category: "Frontend • API integration",
    description:
      "A Netflix-inspired streaming UI that pulls rich catalogs, ratings, and trailers from the TMDB API, with smooth browsing and a polished, responsive experience.",
    date: "2025",
    technologies: ["React", "TypeScript", "Vite", "TMDB API"],
    source: "https://github.com/ShwetaYadav224/Chillstream",
  },
  {
    title: "AetherBot — AI Chatbot",
    category: "Full-stack engineering • AI integration",
    description:
      "An AI-powered chatbot with a clean web interface, wiring an LLM API into a full-stack app to deliver fast, natural, context-aware conversations.",
    date: "2025",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "LLM API"],
    source: "https://github.com/ShwetaYadav224/AetherBot",
  },
  {
    title: "Smart Home Intrusion Detection System",
    category: "Embedded systems • Computer Vision",
    description:
      "An IoT-based home security system that uses ESP32-CAM and motion/door sensors to detect intrusion events. Face recognition with RetinaFace and ArcFace is used to classify detected individuals as family or strangers, while a Django REST backend and Flutter application provide event monitoring, live streaming, and alerts.",
    date: "2025–2026",
    technologies: ["ESP32-CAM", "Arduino IDE", "RetinaFace", "ArcFace", "Python/Django REST Framework", "SQLite", "Flutter", "JWT", "MJPEG", "PIR Sensor", "Reed Switch"],
    source: "https://github.com/ShwetaYadav224/Home-Intrusion-System",
  },
  {
    title: "FinPocket — Personal Finance & Expense Tracker",
    category: "Frontend • Database integration",
    description:
      "A personal finance app to track expenses, visualize spending, and stay on budget — clean, fully responsive, and Firebase-backed.",
    date: "2026",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    source: "https://github.com/ShwetaYadav224/FinPocket",
  },
  {
    title: "FarmGenius",
    category: "Full-stack engineering • AI and data integration",
    description:
      "A React and FastAPI prototype for crop-image analysis, yield estimation, market views, multilingual assistance, voice controls, and micro-farm planning.",
    date: "2025",
    technologies: ["React 19", "Python", "FastAPI"],
    source: "https://github.com/SnoozeScript/FarmGenius",
  },
];

export const contact = {
  heading: "Get in Touch",
  body: "Want to chat about an opportunity, a project, or just say hi? Send me an email or a DM on any platform below and I'll get back to you as soon as I can.",
};

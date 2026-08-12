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
    "I'm a full-stack developer who builds fast, AI-powered web applications. I care about clean architecture, thoughtful UX, and shipping products that feel effortless to use.",
    "From wiring LLMs into chatbots to building real-time computer-vision systems with face recognition, I like working where solid engineering meets real-world impact. I'm always learning, and I take pride in writing maintainable code that holds up.",
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
  logo: string;
  start: string;
  end: string;
  /** Optional institution link. Omit to render as plain (non-link) row. */
  href?: string;
};

export const education: School[] = [
  {
    institution: "Sanjay Ghodawat University, Kolhapur",
    degree: "B.Tech — Computer Science & Engineering · CGPA 7.78/10",
    logo: "SG",
    start: "2022",
    end: "2026",
    // href: "https://www.sanjayghodawatuniversity.ac.in",
  },
  {
    institution: "D. Y. Patil Polytechnic, Kasaba Bawada",
    degree: "Diploma — Computer Engineering · 82.29%",
    logo: "DP",
    start: "2020",
    end: "2023",
    // href: "https://dypatil.edu.in",
  },
];

/**
 * Skill names. Known names get their brand icon; unknown ones get a generic icon.
 * Add new icon mappings in src/sections/Skills.tsx (ICONS map).
 */
export const skills: string[] = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "AI APIs",
  "LLM Integration",
  "Computer Vision",
  "Face Recognition",
  "Python",
  "Java",
  "SQL",
  "MySQL",
  "Firebase",
  "Tailwind CSS",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "REST APIs",
  "Linux",
  "Vite",
];

export type Project = {
  title: string;
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
    description:
      "A Netflix-inspired streaming UI that pulls rich catalogs, ratings, and trailers from the TMDB API, with smooth browsing and a polished, responsive experience.",
    date: "2025",
    technologies: ["React", "TypeScript", "Vite", "TMDB API"],
    source: "https://github.com/ShwetaYadav224/Chillstream",
  },
  {
    title: "AetherBot — AI Chatbot",
    description:
      "An AI-powered chatbot with a clean web interface, wiring an LLM API into a full-stack app to deliver fast, natural, context-aware conversations.",
    date: "2025",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "LLM API"],
  },
  {
    title: "Smart Home Intrusion Detection System",
    description:
      "An IoT-based home security system that uses ESP32-CAM and motion/door sensors to detect intrusion events. Face recognition with RetinaFace and ArcFace is used to classify detected individuals as family or strangers, while a Django REST backend and Flutter application provide event monitoring, live streaming, and alerts.",
    date: "2025–2026",
    technologies: ["ESP32-CAM", "Arduino IDE", "RetinaFace", "ArcFace", "Python/Django REST Framework", "SQLite", "Flutter", "JWT", "MJPEG", "PIR Sensor", "Reed Switch"],
  },
  {
    title: "FinPocket — Personal Finance & Expense Tracker",
    description:
      "A personal finance app to track expenses, visualize spending, and stay on budget — clean, fully responsive, and Firebase-backed.",
    date: "2026",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    // live: "https://...",     // add when you have the deployed URL
    // source: "https://github.com/ShwetaYadav224/...",  // add when ready
  },
];

export const contact = {
  heading: "Get in Touch",
  body: "Want to chat about an opportunity, a project, or just say hi? Send me an email or a DM on any platform below and I'll get back to you as soon as I can.",
};

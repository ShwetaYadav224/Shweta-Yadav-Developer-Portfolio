import type { IconType } from "react-icons";
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiOpenjdk,
  SiPython,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiLinux,
  SiVite,
} from "react-icons/si";
import { FiCode } from "react-icons/fi";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { skills } from "../config/portfolio";

const ICONS: Record<string, IconType> = {
  "React.js": SiReact,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  JavaScript: SiJavascript,
  HTML: SiHtml5,
  CSS: SiCss3,
  "Tailwind CSS": SiTailwindcss,
  Java: SiOpenjdk,
  Python: SiPython,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  Git: SiGit,
  GitHub: SiGithub,
  Linux: SiLinux,
  Vite: SiVite,
};

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {skills.map((name, i) => {
          const Icon = ICONS[name] ?? FiCode;
          return (
            <Reveal key={name} delay={i * 0.03}>
              <div className="flex items-center gap-2.5 rounded-xl border border-border bg-card p-3">
                <Icon className="size-5 shrink-0 text-muted-foreground" />
                <span className="text-sm font-medium text-foreground">
                  {name}
                </span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

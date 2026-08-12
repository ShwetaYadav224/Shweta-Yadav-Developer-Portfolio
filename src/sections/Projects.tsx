import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { projects } from "../config/portfolio";
import type { Project } from "../config/portfolio";

function Thumbnail({ project }: { project: Project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.title}
        className="h-44 w-full object-cover"
      />
    );
  }
  // Clean placeholder until a real screenshot is provided.
  return (
    <div className="flex h-44 w-full items-center justify-center bg-linear-to-br from-muted to-secondary">
      <span className="text-5xl font-bold text-muted-foreground/30">
        {project.title.charAt(0)}
      </span>
    </div>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      label="My Projects"
      title="Check out my latest work"
      subtitle="I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-200 hover:ring-2 hover:ring-muted">
              <Thumbnail project={p} />

              <div className="flex flex-1 flex-col gap-3 p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-semibold tracking-tight text-foreground">
                      {p.title}
                    </h3>
                    <time className="text-xs text-muted-foreground">
                      {p.date}
                    </time>
                  </div>

                  <div className="flex items-center gap-1">
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`Open ${p.title}`}
                        title={`Open ${p.title}`}
                        className="grid size-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <FiArrowUpRight className="size-4" />
                      </a>
                    )}
                    {p.source && (
                      <a
                        href={p.source}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${p.title} source code`}
                        title="Source code"
                        className="grid size-8 shrink-0 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                      >
                        <FiGithub className="size-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {p.technologies.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-md border border-border bg-muted/40 px-2 py-0.5 text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import { FiArrowUpRight } from "react-icons/fi";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { projects } from "../config/portfolio";

export function Projects() {
  return (
    <Section
      id="projects"
      title="SELECTED PROJECTS"
      showDivider={true}
    >
      <div className="flex flex-col gap-1">
        {projects.map((p, i) => {
          const href = p.live || p.source;
          const innerContent = (
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-8">
              {/* Left: title + meta */}
              <div className="flex shrink-0 flex-col gap-1 sm:w-[240px]">
                <h3 className="text-[16px] font-semibold text-foreground">
                  {p.title}
                </h3>
                <p className="text-[12px] text-muted-foreground">
                  {p.date}{p.category ? ` • ${p.category}` : ""}
                </p>
              </div>

              {/* Right: description + links */}
              <div className="flex flex-1 relative gap-3">
                <div className="flex-1 pb-1">
                  <p className="text-[14px] leading-relaxed text-muted-foreground">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full bg-muted/50 px-3 py-1 text-[11px] text-muted-foreground transition-colors group-hover:bg-background"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow icon permanently at top right */}
                {href && (
                  <div className="flex shrink-0 items-start justify-end w-6">
                    <FiArrowUpRight className="size-[15px] text-muted-foreground/60 transition-colors group-hover:text-foreground" />
                  </div>
                )}
              </div>
            </div>
          );

          return (
            <Reveal key={p.title} delay={i * 0.05}>
              {href ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="project-card group block -mx-3 px-3 py-6 sm:-mx-4 sm:px-4"
                >
                  {innerContent}
                </a>
              ) : (
                <article className="project-card group -mx-3 px-3 py-6 sm:-mx-4 sm:px-4">
                  {innerContent}
                </article>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

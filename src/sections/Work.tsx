import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Section } from "../components/Section";
import { work } from "../config/portfolio";
import { Reveal } from "../components/Reveal";

export function Work() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="work" title="Work Experience">
      <div className="flex flex-col gap-2">
        {work.map((job, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={job.company} delay={i * 0.05}>
              <div className="rounded-xl border border-border bg-card transition-colors">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 p-4 text-left"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-muted text-sm font-semibold text-foreground">
                    {job.logo}
                  </span>

                  <span className="flex flex-1 flex-col gap-0.5">
                    <span className="font-medium text-foreground">
                      {job.company}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {job.role}
                    </span>
                  </span>

                  <span className="hidden text-xs text-muted-foreground sm:block">
                    {job.start} — {job.end}
                  </span>

                  <FiChevronDown
                    className={`size-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-3 px-4 pb-4 pt-0">
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {job.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {job.technologies.map((t) => (
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
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

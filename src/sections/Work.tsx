import { Section } from "../components/Section";
import { work } from "../config/portfolio";
import { Reveal } from "../components/Reveal";

export function Work() {
  return (
    <Section id="work" title="EXPERIENCE">
      <div className="flex flex-col gap-10">
        {work.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <article className="flex flex-col gap-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2">
                  <h3 className="text-[15px] font-bold text-foreground">
                    {job.company}
                  </h3>
                  <span className="text-muted-foreground/40">·</span>
                  <p className="text-[14px] text-muted-foreground">{job.role}</p>
                </div>

                <time className="font-mono text-[11px] text-muted-foreground/80">
                  {job.start} — {job.end}
                </time>
              </div>

              <div className="flex flex-col gap-3">
                <p className="text-[13px] leading-relaxed text-muted-foreground sm:text-[14px]">
                  {job.description}
                </p>

                <ul className="ml-4 flex list-outside list-disc flex-col gap-1.5 text-[13px] leading-relaxed text-muted-foreground sm:text-[14px]">
                  <li>
                    Deliver and maintain features across production products while
                    contributing to web, mobile, and backend work.
                  </li>
                  <li>
                    Build backend services and application features using Python,
                    Django, GraphQL, and REST APIs.
                  </li>
                  <li>
                    Develop responsive experiences with React, Next.js, Flutter,
                    and Bun.
                  </li>
                </ul>
              </div>

              <div className="mt-1 flex flex-wrap gap-2">
                {job.technologies.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-muted/50 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

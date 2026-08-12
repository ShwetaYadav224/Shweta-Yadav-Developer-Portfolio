import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { education } from "../config/portfolio";

export function Education() {
  return (
    <Section id="education" title="Education">
      <div className="flex flex-col">
        {education.map((s, i) => {
          const hasLink = !!s.href;
          const inner = (
            <>
              <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-border bg-muted text-sm font-semibold text-foreground">
                {s.logo}
              </span>
              <span className="flex flex-1 flex-col gap-0.5">
                <span className="font-medium text-foreground">
                  {s.institution}
                </span>
                <span className="text-sm text-muted-foreground">
                  {s.degree}
                </span>
              </span>
              <span className="text-xs text-muted-foreground">
                {s.start} — {s.end}
              </span>
            </>
          );

          return (
            <Reveal key={s.institution} delay={i * 0.05}>
              {hasLink ? (
                <a
                  href={s.href}
                  target={s.href!.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="group flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-muted/50"
                >
                  {inner}
                </a>
              ) : (
                <div className="flex items-center gap-4 rounded-xl p-3">
                  {inner}
                </div>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

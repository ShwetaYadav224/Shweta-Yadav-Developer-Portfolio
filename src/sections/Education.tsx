import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { education } from "../config/portfolio";

export function Education() {
  return (
    <Section id="education" title="EDUCATION" showDivider={true}>
      <div className="flex flex-col gap-10 mt-2">
        {education.map((s, i) => {
          const inner = (
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-10">
              {/* Date Column (Left) */}
              <div className="shrink-0 sm:w-32">
                <time className="font-mono text-[11px] text-muted-foreground/60">
                  {s.start} — {s.end}
                </time>
              </div>

              {/* Content Column (Right) */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="text-[15px] font-bold text-foreground">
                    {s.institution}
                  </h3>
                  <p className="text-[14px] text-muted-foreground/80">
                    {s.degree}
                  </p>
                </div>

                {s.description && (
                  <p className="max-w-[90%] text-[13px] leading-relaxed text-muted-foreground/70">
                    {s.description}
                  </p>
                )}

                {s.bullets && s.bullets.length > 0 && (
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1">
                    {s.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[12px] text-muted-foreground/70">
                        <span className="text-[10px] text-muted-foreground/40">●</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );

          const hasLink = !!s.href;

          return (
            <Reveal key={s.institution} delay={i * 0.05}>
              {hasLink ? (
                <a
                  href={s.href}
                  target={s.href!.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="group block"
                >
                  {inner}
                </a>
              ) : (
                <div className="">{inner}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { skillGroups } from "../config/portfolio";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.04}>
            <div className="flex flex-col gap-3">
              <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="skill-pill inline-flex cursor-default items-center rounded-full bg-muted/50 px-3 py-1 text-[12px] text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

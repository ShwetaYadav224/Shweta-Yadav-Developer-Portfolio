import { Section } from "../components/Section";
import { about } from "../config/portfolio";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="flex flex-col gap-4">
        {about.paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-base leading-relaxed text-muted-foreground"
          >
            {p}
          </p>
        ))}

        {about.facts.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-2">
            {about.facts.map((f) => (
              <span
                key={f.label}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs text-muted-foreground"
              >
                <span className="font-medium text-foreground">{f.label}</span>
                <span className="h-3 w-px bg-border" />
                {f.value}
              </span>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}

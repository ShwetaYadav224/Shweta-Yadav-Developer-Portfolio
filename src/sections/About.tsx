import { Section } from "../components/Section";
import { about } from "../config/portfolio";

export function About() {
  return (
    <Section id="about" title="SUMMARY">
      <div className="flex flex-col gap-3">
        {about.paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-[14px] leading-relaxed text-muted-foreground sm:text-[14.5px]"
          >
            {p}
          </p>
        ))}
      </div>
    </Section>
  );
}

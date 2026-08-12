import { FiArrowUpRight } from "react-icons/fi";
import { Section } from "../components/Section";
import { contact, profile } from "../config/portfolio";

export function Contact() {
  return (
    <Section id="contact" label="Contact" title={contact.heading}>
      <div className="flex flex-col gap-4">
        <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {contact.body}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-2 text-base font-medium text-foreground underline-offset-4 hover:underline"
        >
          {profile.email}
          <FiArrowUpRight className="size-4 transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
        </a>
      </div>
    </Section>
  );
}

import { FiArrowUpRight } from "react-icons/fi";
import { Section } from "../components/Section";
import { contact, profile } from "../config/portfolio";

export function Contact() {
  return (
    <Section id="contact" title={contact.heading}>
      <div className="flex flex-col gap-5">
        <p className="max-w-3xl text-[14px] leading-7 text-muted-foreground sm:text-[15px]">
          {contact.body}
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="cta-button group inline-flex w-fit items-center gap-2 rounded-full border border-border bg-primary px-6 py-2.5 text-[14px] font-medium text-primary-foreground sm:text-[15px]"
        >
          {profile.email}
          <FiArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </Section>
  );
}

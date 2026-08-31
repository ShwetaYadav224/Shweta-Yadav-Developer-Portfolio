import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  headerRight?: ReactNode;
  titleClassName?: string;
  children: ReactNode;
  className?: string;
  showDivider?: boolean;
};

export function Section({
  id,
  title,
  subtitle,
  headerRight,
  titleClassName,
  children,
  className,
  showDivider = true,
}: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <Reveal>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2
              className={
                titleClassName ??
                "text-[13px] font-bold uppercase tracking-[0.05em] text-foreground"
              }
            >
              {title}
            </h2>
            {headerRight}
          </div>

          {subtitle && (
            <p className="max-w-3xl text-[14px] leading-relaxed text-muted-foreground sm:text-[15px]">
              {subtitle}
            </p>
          )}

          {showDivider && (
            <div className="mt-2 h-px w-full bg-border/60" />
          )}
        </div>
      </Reveal>

      <div className={className ?? "mt-8"}>{children}</div>
    </section>
  );
}

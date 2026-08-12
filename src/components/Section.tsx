import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  title: string;
  /** Optional small label shown above the title (Projects / Contact). */
  label?: string;
  subtitle?: string;
  /** Extra node rendered at the right of the title row. */
  headerRight?: ReactNode;
  children: ReactNode;
  className?: string;
};

/**
 * MagicUI-style section header.
 *  - plain sections: title + trailing gradient rule
 *  - labeled sections: small label + gradient rule, then larger title + subtitle
 */
export function Section({
  id,
  title,
  label,
  subtitle,
  headerRight,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24">
      <Reveal>
        <div className="flex flex-col gap-2">
          {label ? (
            <>
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-muted-foreground">
                  {label}
                </span>
                <span className="h-px flex-1 bg-linear-to-r from-border to-transparent" />
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {title}
                </h2>
                {headerRight}
              </div>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                {title}
              </h2>
              {headerRight}
              <span className="h-px flex-1 bg-linear-to-r from-border to-transparent" />
            </div>
          )}

          {subtitle && (
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      </Reveal>

      <div className={className ?? "mt-6"}>{children}</div>
    </section>
  );
}

import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa6";
import { FiMoon, FiSun } from "react-icons/fi";
import { socials, profile } from "../config/portfolio";
import { useTheme } from "./theme";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
  mail: FaEnvelope,
  phone: FaPhone,
};

function DockButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer noopener"
      aria-label={label}
      title={label}
      className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
    >
      {children}
    </a>
  );
}

export function Navbar() {
  const { theme, toggle } = useTheme();

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-4 pb-4 sm:pb-6">
      <nav className="pointer-events-auto flex items-center gap-1 rounded-full border border-border bg-card/80 p-1 shadow-lg backdrop-blur-md">
        {/* Brand / home */}
        <a
          href="#hero"
          aria-label="Back to top"
          title="Back to top"
          className="grid size-9 place-items-center rounded-full bg-primary text-xs font-bold text-primary-foreground transition-transform hover:scale-105"
        >
          {profile.initials}
        </a>

        <span className="mx-0.5 h-5 w-px bg-border" />

        {/* Socials */}
        {socials.map((s) => {
          const Icon = ICONS[s.icon] ?? FaEnvelope;
          return (
            <DockButton key={s.label} href={s.href} label={s.label}>
              <Icon className="size-4" />
            </DockButton>
          );
        })}

        <span className="mx-0.5 h-5 w-px bg-border" />

        {/* Theme toggle */}
        <button
          type="button"
          onClick={toggle}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="grid size-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          {theme === "dark" ? (
            <FiSun className="size-4" />
          ) : (
            <FiMoon className="size-4" />
          )}
        </button>
      </nav>
    </div>
  );
}

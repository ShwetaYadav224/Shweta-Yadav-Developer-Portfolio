import { FaGithub, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "motion/react";
import { profile } from "../config/portfolio";
import { useTheme } from "../components/theme";
const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  const { theme, toggle } = useTheme();

  return (
    <section id="hero" className="scroll-mt-24">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-2">
            <motion.h1
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, ease }}
              className="text-[44px] font-bold leading-none tracking-tight text-foreground sm:text-[56px] lg:text-[64px]"
            >
              {profile.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 0.1, ease }}
              className="text-[15px] font-medium text-muted-foreground sm:text-[16px]"
            >
              {profile.roles[0]}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.15, ease }}
            className="flex flex-col gap-2 sm:items-end"
          >
            <div className="flex flex-wrap items-center gap-4 text-[12px] font-medium text-muted-foreground sm:text-[13px]">
              <a
                href="https://github.com/ShwetaYadav224"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-foreground"
              >
                <FaGithub className="size-3.5" />
                <span>ShwetaYadav224</span>
              </a>
              <span className="inline-flex cursor-default items-center gap-1.5 transition-colors duration-200 hover:text-foreground">
                <FaLinkedinIn className="size-3.5 text-[#0A66C2]" />
                <span>LinkedIn</span>
              </span>
              <button
                type="button"
                onClick={toggle}
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                className="grid size-6 place-items-center rounded-full bg-muted/50 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {theme === "dark" ? <FiSun className="size-3" /> : <FiMoon className="size-3" />}
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-[12px] text-muted-foreground sm:text-[13px]">
              <span className="inline-flex items-center gap-1.5">
                <FaLocationDot className="size-3.5 text-muted-foreground/60" />
                <span>{profile.location}</span>
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:text-foreground"
              >
                <span>{profile.email}</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-2 h-px w-full bg-border/60" />
      </div>
    </section>
  );
}

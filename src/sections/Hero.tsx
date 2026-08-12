import { motion } from "motion/react";
import profileImg from "../assets/profile.jpg";
import { profile } from "../config/portfolio";

const firstName = profile.name.split(" ")[0];
const ease = [0.21, 0.47, 0.32, 0.98] as const;

export function Hero() {
  return (
    <section id="hero" className="scroll-mt-24">
      <div className="flex flex-col gap-x-2 gap-y-6 md:flex-row md:justify-between">
        {/* Text */}
        <div className="order-2 flex flex-col gap-2 md:order-1">
          <motion.span
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease }}
            className="inline-block text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl"
          >
            Hi, I&apos;m {firstName}
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 10, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: 0.1, ease }}
            className="max-w-[600px] text-muted-foreground md:text-lg lg:text-xl"
          >
            {profile.tagline}
          </motion.p>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, filter: "blur(6px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease }}
          className="order-1 md:order-2"
        >
          <span className="relative flex size-24 shrink-0 overflow-hidden rounded-full border border-border shadow-lg ring-4 ring-muted md:size-32">
            <img
              src={profileImg}
              alt={profile.name}
              className="aspect-square h-full w-full object-cover"
            />
          </span>
        </motion.div>
      </div>
    </section>
  );
}

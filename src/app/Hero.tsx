"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  LinkedinLogo,
  GithubLogo,
  FileText,
  PhoneCall,
} from "@phosphor-icons/react/dist/ssr";

const links = [
  { label: "LinkedIn", href: "https://linkedin.com/in/pranosh-m", Icon: LinkedinLogo, primary: false },
  { label: "GitHub", href: "https://github.com/Pranosh2229", Icon: GithubLogo, primary: false },
  { label: "CV", href: "/Pranosh_M_Resume.pdf", Icon: FileText, primary: false },
  {
    label: "Book a call",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=pranosh286@gmail.com&su=Let%27s%20talk",
    Icon: PhoneCall,
    primary: true,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={reduce ? undefined : container}
      initial={reduce ? undefined : "hidden"}
      animate={reduce ? undefined : "show"}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        variants={reduce ? undefined : item}
        className="mb-6 flex h-16 w-16 -rotate-6 items-center justify-center rounded-xl bg-[var(--foreground)] shadow-lg shadow-[var(--foreground)]/20"
      >
        <span
          className="text-2xl font-bold text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          PM
        </span>
      </motion.div>

      <motion.p
        variants={reduce ? undefined : item}
        className="text-sm text-[var(--graphite)]"
      >
        Backend AI Engineering intern at FlyRank &middot; Computer Science
        Engineering student, Chennai
      </motion.p>

      <motion.h1
        variants={reduce ? undefined : item}
        className="mt-3 text-6xl font-bold leading-[0.95] tracking-tighter sm:text-7xl md:text-8xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Pranosh M
      </motion.h1>

      <motion.p
        variants={reduce ? undefined : item}
        className="mt-6 max-w-lg text-lg text-[var(--graphite)]"
      >
        I build full-stack AI pipelines that survive a live demo, not just a
        notebook.
      </motion.p>

      <motion.nav
        variants={reduce ? undefined : item}
        className="mt-9 flex flex-wrap items-center justify-center gap-3"
      >
        {links.map(({ label, href, Icon, primary }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className={
              primary
                ? "flex min-h-11 items-center gap-2 rounded-full bg-[var(--accent)] px-5 text-sm font-semibold text-white shadow-md shadow-[var(--accent)]/30 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
                : "flex min-h-11 items-center gap-2 rounded-full border-2 border-[var(--foreground)] bg-[var(--surface)] px-5 text-sm font-semibold text-[var(--foreground)] transition-colors duration-200 hover:bg-[var(--foreground)] hover:text-[var(--background)] active:scale-[0.97]"
            }
          >
            <Icon size={16} weight="bold" />
            {label}
          </a>
        ))}
      </motion.nav>
    </motion.div>
  );
}

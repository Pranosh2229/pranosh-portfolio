const links = [
  { label: "LinkedIn", href: "https://linkedin.com/in/pranosh-m" },
  { label: "GitHub", href: "https://github.com/Pranosh2229" },
  { label: "CV", href: "/Pranosh_M_Resume.pdf" },
  { label: "Book a call", href: "mailto:pranosh286@gmail.com?subject=Let's talk" },
];

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[var(--foreground)]">
        <span
          className="text-2xl font-bold text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          PM
        </span>
      </div>
      <h1
        className="text-3xl font-bold sm:text-4xl"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Pranosh M
      </h1>
      <p className="mt-4 max-w-md text-[var(--graphite)]">
        I build full-stack AI pipelines that survive a live demo, not just a
        notebook.
      </p>
      <p className="mt-2 max-w-md text-sm text-[var(--graphite)]">
        Backend AI Engineering intern at FlyRank &middot; Computer Science
        Engineering student, Chennai
      </p>

      <nav className="mt-8 flex flex-wrap items-center justify-center gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            className="rounded-full border border-[var(--graphite)] px-4 py-2 text-sm font-medium text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="mt-12 max-w-md border-t border-[var(--graphite)]/20 pt-8">
        <p className="text-sm text-[var(--graphite)]">
          Case studies and capstone work will be posted here as they ship.
        </p>
      </div>
    </main>
  );
}

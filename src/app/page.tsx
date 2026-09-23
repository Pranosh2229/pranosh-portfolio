export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
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
      <p className="mt-8 text-sm text-[var(--graphite)]">
        Site under construction &mdash; case studies coming soon.
      </p>
    </main>
  );
}

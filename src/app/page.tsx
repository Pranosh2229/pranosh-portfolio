import BlobBackground from "./BlobBackground";
import Hero from "./Hero";
import ContactForm from "./ContactForm";
import RevealSection from "./RevealSection";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center overflow-hidden px-6 py-16">
      <BlobBackground />

      <section className="flex w-full flex-col items-center pb-16">
        <Hero />
      </section>

      <RevealSection className="w-full max-w-md rounded-3xl bg-[var(--surface)] p-8 shadow-xl shadow-black/10">
        <ContactForm />
      </RevealSection>

      <RevealSection className="mt-12 w-full max-w-md text-center">
        <p
          className="text-xl text-[var(--foreground)]"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          Case studies and capstone work landing soon
        </p>
      </RevealSection>
    </main>
  );
}

import BlobBackground from "./BlobBackground";
import Hero from "./Hero";
import WaveDivider from "./WaveDivider";
import ContactForm from "./ContactForm";
import RevealSection from "./RevealSection";

export default function Home() {
  return (
    <main className="relative flex flex-1 flex-col items-center overflow-hidden">
      <BlobBackground />

      <section className="flex w-full flex-col items-center px-6 py-16">
        <Hero />
      </section>

      <WaveDivider />

      <div className="flex w-full flex-col items-center bg-[var(--surface)] px-6 pb-16 pt-12">
        <RevealSection className="flex w-full flex-col items-center">
          <ContactForm />
        </RevealSection>

        <RevealSection className="mt-16 w-full max-w-md border-t border-[var(--foreground)]/10 pt-8 text-center">
          <p
            className="text-xl text-[var(--accent)]"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            Case studies and capstone work landing soon
          </p>
        </RevealSection>
      </div>
    </main>
  );
}

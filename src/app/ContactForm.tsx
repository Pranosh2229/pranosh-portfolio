"use client";

import { useState } from "react";
import { PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "min-h-11 rounded-xl border-2 border-[var(--foreground)]/15 bg-transparent px-4 text-sm text-[var(--foreground)] outline-none transition-colors placeholder:text-[var(--graphite)]/60 focus:border-[var(--accent)]";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="max-w-md text-sm text-[var(--graphite)]">
        Thanks &mdash; your message reached me. I&apos;ll reply by email.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-4 text-left"
    >
      <p
        className="text-2xl font-bold tracking-tight"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        Send me a message
      </p>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-xs font-medium text-[var(--graphite)]">
          Your name
        </label>
        <input id="name" name="name" required className={fieldClass} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-xs font-medium text-[var(--graphite)]">
          Your email
        </label>
        <input id="email" name="email" type="email" required className={fieldClass} />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium text-[var(--graphite)]">
          Message
        </label>
        <textarea id="message" name="message" required rows={4} className={fieldClass + " py-3"} />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex min-h-11 items-center justify-center gap-2 self-start rounded-full bg-[var(--accent)] px-6 text-sm font-semibold text-white transition-transform hover:opacity-90 active:scale-[0.97] disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send"}
        <PaperPlaneTilt size={16} weight="bold" />
      </button>

      {status === "error" && (
        <p className="text-sm text-[var(--accent)]">
          Something went wrong &mdash; try again, or email pranosh286@gmail.com directly.
        </p>
      )}
    </form>
  );
}

"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "sent" | "error";

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
      <p className="mt-12 max-w-md text-sm text-[var(--graphite)]">
        Thanks &mdash; your message reached me. I&apos;ll reply by email.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-12 flex w-full max-w-md flex-col gap-3 text-left"
    >
      <p className="text-sm font-medium text-[var(--foreground)]">
        Send me a message
      </p>
      <input
        name="name"
        placeholder="Your name"
        required
        className="rounded-md border border-[var(--graphite)]/30 px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
      />
      <input
        name="email"
        type="email"
        placeholder="Your email"
        required
        className="rounded-md border border-[var(--graphite)]/30 px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        rows={4}
        className="rounded-md border border-[var(--graphite)]/30 px-3 py-2 text-sm outline-none focus:border-[var(--accent)]"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="self-start rounded-full bg-[var(--foreground)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send"}
      </button>
      {status === "error" && (
        <p className="text-sm text-[var(--accent)]">
          Something went wrong &mdash; try again, or email pranosh286@gmail.com directly.
        </p>
      )}
    </form>
  );
}

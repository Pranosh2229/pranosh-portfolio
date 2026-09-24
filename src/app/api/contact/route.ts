import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { name, email, message } = body as {
    name?: string;
    email?: string;
    message?: string;
  };

  const trimmedName = name?.trim() ?? "";
  const trimmedEmail = email?.trim() ?? "";
  const trimmedMessage = message?.trim() ?? "";

  if (!trimmedName || !trimmedEmail || !trimmedMessage) {
    return NextResponse.json(
      { error: "name, email and message are all required" },
      { status: 400 }
    );
  }

  if (!EMAIL_PATTERN.test(trimmedEmail)) {
    return NextResponse.json(
      { error: "email must be a valid email address" },
      { status: 400 }
    );
  }

  if (trimmedName.length > 200 || trimmedMessage.length > 5000) {
    return NextResponse.json(
      { error: "name or message is too long" },
      { status: 400 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { error } = await resend.emails.send({
    from: "Portfolio contact form <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: trimmedEmail,
    subject: `New portfolio message from ${trimmedName}`,
    text: `From: ${trimmedName} <${trimmedEmail}>\n\n${trimmedMessage}`,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, message } = await req.json();
    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }
    /* 1️⃣ Email to me */
    await resend.emails.send({
      from: "Samra <contact@samra-portfolio.com>", // temporary sender
      to: process.env.CONTACT_RECEIVER_EMAIL!,
      replyTo: email,
      subject: `New contact from ${name}`,
      html: `
        <h3>New Contact Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company / Idea:</strong> ${company || "—"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    /* 2️⃣ Auto-reply to USER */
    await resend.emails.send({
      from: "Samra <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for reaching out",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out. I’ve received your message and will get back to you soon.</p>
        <p>— Samra</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

const RATE = new Map();

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
    const now = Date.now();
    if (now - (RATE.get(ip) || 0) < 5000) {
      return NextResponse.json({ message: "Too many requests" }, { status: 429 });
    }
    RATE.set(ip, now);

    const { name = "", email = "", message = "", company = "" } = await req.json();

    if (company) return NextResponse.json({ ok: true }, { status: 200 });

    if (!name || !email || !message)
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) return NextResponse.json({ message: "Invalid email" }, { status: 400 });

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO = process.env.CONTACT_TO; 
    const FROM = process.env.CONTACT_FROM || "onboarding@resend.dev";

    if (!RESEND_API_KEY || !TO) {
      console.warn("[CONTACT] Missing envs", { hasKey: !!RESEND_API_KEY, hasTo: !!TO });
      return NextResponse.json({ message: "Server not configured" }, { status: 500 });
    }

    const resend = new Resend(RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });

    if (error) {
      console.error("[CONTACT] Resend error:", error);
      return NextResponse.json(
        { message: error.message || "Email send failed" },
        { status: 502 }
      );
    }

    console.log("[CONTACT] Sent OK:", data?.id);
    return NextResponse.json({ ok: true, id: data?.id }, { status: 200 });
  } catch (e) {
    console.error("[CONTACT] Server error:", e);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

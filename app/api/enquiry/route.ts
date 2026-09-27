import { NextRequest, NextResponse } from "next/server";
import { enquirySchema } from "@/lib/validation";
import { sendNotificationEmail } from "@/lib/mailer";

const submissions = new Map<string, number[]>();
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;

function isRateLimited(key: string) {
  const now = Date.now();
  const timestamps = (submissions.get(key) || []).filter((t) => now - t < WINDOW_MS);
  timestamps.push(now);
  submissions.set(key, timestamps);
  return timestamps.length > MAX_REQUESTS;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, value: string) {
  return `<tr><td style="padding:6px 16px 6px 0;color:#5c6478;font-size:13px;white-space:nowrap;vertical-align:top;">${label}</td><td style="padding:6px 0;color:#0a0d13;font-size:14px;">${value}</td></tr>`;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
    }

    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message || "Invalid input." },
        { status: 400 }
      );
    }

    const { name, email, phone, company, service, budget, timeline, message } = parsed.data;

    const html = `
      <div style="font-family:-apple-system,Segoe UI,Helvetica,Arial,sans-serif;max-width:560px;margin:0 auto;">
        <p style="letter-spacing:0.08em;font-size:12px;color:#45d6c4;margin:0 0 4px;">DEVBIT INDIA</p>
        <h1 style="font-size:20px;margin:0 0 20px;color:#0a0d13;">New Project Enquiry</h1>
        <table style="width:100%;border-collapse:collapse;border-top:1px solid #e5e7eb;">
          ${row("Name", escapeHtml(name))}
          ${row("Email", escapeHtml(email))}
          ${row("Phone", escapeHtml(phone || "—"))}
          ${row("Company", escapeHtml(company || "—"))}
          ${row("Service", escapeHtml(service))}
          ${row("Budget", escapeHtml(budget || "—"))}
          ${row("Timeline", escapeHtml(timeline || "—"))}
        </table>
        <p style="font-size:13px;color:#5c6478;margin:24px 0 6px;">Project Details</p>
        <p style="font-size:14px;color:#0a0d13;line-height:1.6;white-space:pre-wrap;border-top:1px solid #e5e7eb;padding-top:10px;">${escapeHtml(
          message
        ).replace(/\n/g, "<br/>")}</p>
        <p style="font-size:12px;color:#8b93a7;margin-top:28px;border-top:1px solid #e5e7eb;padding-top:14px;">
          Source: Devbit India Website · Submitted ${new Date().toLocaleString("en-IN", {
            timeZone: "Asia/Kolkata",
            dateStyle: "medium",
            timeStyle: "short",
          })} IST
        </p>
      </div>
    `;

    await sendNotificationEmail({
      subject: `New project enquiry from ${name} — ${service}`,
      replyTo: email,
      html,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("[api/enquiry] error:", error);
    return NextResponse.json(
      { error: "We couldn't send your enquiry right now. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}

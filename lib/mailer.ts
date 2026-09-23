// Sends transactional email via the Resend API using an environment variable.
// No credentials are ever exposed to the client — this file only runs on the server.

type MailPayload = {
  subject: string;
  html: string;
  replyTo?: string;
};

export async function sendNotificationEmail({ subject, html, replyTo }: MailPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL || process.env.CONTACT_TO_EMAIL || "devbitindia@gmail.com";
  const from = process.env.CONTACT_FROM_EMAIL || "Devbit India <onboarding@resend.dev>";

  if (!apiKey) {
    // In production, a missing key must NEVER be reported as a successful
    // send — that's exactly the "enquiry says sent but never arrives" bug.
    // The caller (the API route) turns this into an honest error response.
    if (process.env.NODE_ENV === "production") {
      throw new Error(
        "Email service is not configured: RESEND_API_KEY is missing in this environment."
      );
    }
    // Outside production (local dev / preview without a key), skip sending
    // but say so loudly, so it's never mistaken for a working integration.
    console.warn(
      "[mailer] RESEND_API_KEY not set — email NOT sent. This is only tolerated outside production."
    );
    return { skipped: true as const };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: replyTo,
      subject,
      html,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Email provider error: ${errText}`);
  }

  return { skipped: false };
}

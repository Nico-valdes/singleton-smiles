/** Default inbox for contact form submissions. */
const contactFormDefaultTo = "nicovaldes1104@gmail.com"

/**
 * Where `/api/contact` sends mail. Optional `CONTACT_FORM_TO_EMAIL` overrides (e.g. production clinic inbox).
 */
export function getContactFormRecipient(): string {
  const override = process.env.CONTACT_FORM_TO_EMAIL?.trim()
  if (override) return override
  return contactFormDefaultTo
}

const topicLabels: Record<string, string> = {
  appointment: "Appointment",
  "new-patient": "New patient",
  treatment: "Treatment question",
  billing: "Billing / insurance",
  other: "Other",
}

export function formatTopicLabel(topic: string | undefined): string {
  if (!topic) return "General"
  return topicLabels[topic] ?? topic
}

type ContactPayload = {
  name: string
  email: string
  phone?: string
  topic?: string
  message: string
}

export function buildContactEmailContent(data: ContactPayload) {
  const topic = formatTopicLabel(data.topic)
  const phone = data.phone?.trim() || "—"

  const text = [
    "New message from the Singleton Smiles website contact form",
    "",
    `Name: ${data.name}`,
    `Visitor email: ${data.email}`,
    `Phone: ${phone}`,
    `Topic: ${topic}`,
    "",
    "Message:",
    data.message,
    "",
    "---",
    "Reply to this message to respond to the visitor (use Reply).",
  ].join("\n")

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:24px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;font-size:15px;line-height:1.5;color:#0f172a;background:#f8fafc;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;">
    <tr>
      <td style="padding:20px 24px;background:#1d4ed8;color:#ffffff;font-size:17px;font-weight:600;">
        Singleton Smiles — website inquiry
      </td>
    </tr>
    <tr>
      <td style="padding:24px;">
        <p style="margin:0 0 16px;"><strong>Name</strong><br>${escapeHtml(data.name)}</p>
        <p style="margin:0 0 16px;"><strong>Email</strong><br><a href="mailto:${escapeHtml(data.email)}" style="color:#2563eb;">${escapeHtml(data.email)}</a></p>
        <p style="margin:0 0 16px;"><strong>Phone</strong><br>${escapeHtml(phone)}</p>
        <p style="margin:0 0 16px;"><strong>Topic</strong><br>${escapeHtml(topic)}</p>
        <p style="margin:0 0 8px;"><strong>Message</strong></p>
        <div style="margin:0;padding:16px;background:#f1f5f9;border-radius:8px;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
      </td>
    </tr>
  </table>
  <p style="max-width:560px;margin:16px auto 0;text-align:center;font-size:12px;color:#64748b;">
    Reply to this email to respond to the visitor.
  </p>
</body>
</html>`.trim()

  return { text, html, subject: `[Singleton Smiles] ${topic} — ${data.name}` }
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

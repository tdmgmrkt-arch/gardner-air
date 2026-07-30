import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request body" }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;

  // Honeypot check — if "company" field is filled, silently accept but don't forward
  if (payload.company) {
    return Response.json({ ok: true });
  }

  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) {
    console.warn(
      "[contact] GHL_WEBHOOK_URL is not set — submission received but not forwarded."
    );
    return Response.json({ ok: true });
  }

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: `${payload.firstName ?? ""} ${payload.lastName ?? ""}`.trim(),
        first_name: payload.firstName,
        last_name: payload.lastName,
        email: payload.email,
        phone: payload.phone,
        zip_code: payload.zipCode,
        message: payload.message ?? "",
        source_page: payload.sourcePage ?? "",
        submitted_at: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      console.error(
        `[contact] GHL webhook returned ${res.status}: ${await res.text()}`
      );
      return Response.json(
        { error: "Failed to forward submission" },
        { status: 500 }
      );
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("[contact] Failed to reach GHL webhook:", err);
    return Response.json(
      { error: "Network error forwarding submission" },
      { status: 500 }
    );
  }
}

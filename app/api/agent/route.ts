import { offlineAnswer } from "@/lib/agent-knowledge";

export const runtime = "nodejs";

const MAX_CHARS = 2000;

function isMessage(value: unknown): value is { role: "user" | "assistant"; content: string } {
  if (!value || typeof value !== "object") return false;
  const message = value as { role?: unknown; content?: unknown };
  return (message.role === "user" || message.role === "assistant")
    && typeof message.content === "string"
    && message.content.trim().length > 0;
}

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response("Bad request", { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return new Response("Bad request", { status: 400 });
  }
  const { messages, locale } = body as { messages?: unknown; locale?: unknown };
  const last = Array.isArray(messages) ? messages.filter(isMessage).at(-1) : undefined;
  if (!last || last.role !== "user") {
    return new Response("Bad request", { status: 400 });
  }

  const answer = offlineAnswer(last.content.slice(0, MAX_CHARS), locale === "en" ? "en" : "zh");
  return new Response(answer, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "x-agent-mode": "offline",
      "cache-control": "no-store",
    },
  });
}

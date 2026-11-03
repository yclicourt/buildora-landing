import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const EMAIL_MAX_LENGTH = 254;
const INTEREST_MAX_LENGTH = 50;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type WaitlistBody = {
  email?: unknown;
  interest?: unknown;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(req: Request) {
  let body: WaitlistBody;
  try {
    const parsed: unknown = await req.json();
    if (!isRecord(parsed)) {
      return NextResponse.json(
        { ok: false, error: "invalid_body" },
        { status: 400 },
      );
    }
    body = parsed;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_body" },
      { status: 400 },
    );
  }

  const email =
    typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  if (
    !email ||
    email.length > EMAIL_MAX_LENGTH ||
    !EMAIL_RE.test(email)
  ) {
    return NextResponse.json(
      { ok: false, error: "invalid_email" },
      { status: 400 },
    );
  }

  let interest: string | null = null;
  if (typeof body.interest === "string" && body.interest.trim() !== "") {
    interest = body.interest.trim().slice(0, INTEREST_MAX_LENGTH);
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseAnonKey) {
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500 },
    );
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey);
  const { error } = await supabase
    .from("waitlist")
    .insert({ email, interest });

  if (error) {
    // 23505 = unique violation: el email ya está en la lista.
    if (error.code === "23505") {
      return NextResponse.json({ ok: true, already: true });
    }
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "method_not_allowed" },
    { status: 405 },
  );
}

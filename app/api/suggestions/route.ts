import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const STACK_MAX_LENGTH = 100;
const DESCRIPTION_MAX_LENGTH = 500;
const EMAIL_MAX_LENGTH = 254;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SuggestionsBody = {
  stack?: unknown;
  description?: unknown;
  email?: unknown;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(req: Request) {
  let body: SuggestionsBody;
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

  const stack =
    typeof body.stack === "string" ? body.stack.trim() : "";
  if (!stack || stack.length > STACK_MAX_LENGTH) {
    return NextResponse.json(
      { ok: false, error: "invalid_stack" },
      { status: 400 },
    );
  }

  let description: string | null = null;
  if (typeof body.description === "string" && body.description.trim() !== "") {
    description = body.description.trim().slice(0, DESCRIPTION_MAX_LENGTH);
  }

  let email: string | null = null;
  if (typeof body.email === "string" && body.email.trim() !== "") {
    email = body.email.trim().toLowerCase();
    if (email.length > EMAIL_MAX_LENGTH || !EMAIL_RE.test(email)) {
      return NextResponse.json(
        { ok: false, error: "invalid_email" },
        { status: 400 },
      );
    }
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
    .from("stack_suggestions")
    .insert({ stack, description, email });

  if (error) {
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

"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

type Status = "idle" | "sending" | "error";

const STACK_MAX = 100;
const DESCRIPTION_MAX = 500;
const EMAIL_MAX = 254;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SuggestionsForm() {
  const { t } = useLanguage();
  const [stack, setStack] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const stackValue = stack.trim();
    const emailValue = email.trim();
    if (!stackValue) {
      setStatus("error");
      setMessage(t.suggestions.errStack);
      return;
    }
    if (emailValue && !EMAIL_RE.test(emailValue)) {
      setStatus("error");
      setMessage(t.suggestions.errEmail);
      return;
    }
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/suggestions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stack: stackValue,
          description: description.trim() || null,
          email: emailValue || null,
        }),
      });
      const data = (await res.json()) as { ok?: boolean };
      if (res.ok && data.ok) {
        setStack("");
        setDescription("");
        setEmail("");
        setStatus("idle");
        setMessage(t.suggestions.ok);
      } else {
        setStatus("error");
        setMessage(t.suggestions.errSave);
      }
    } catch {
      setStatus("error");
      setMessage(t.suggestions.errSave);
    }
  }

  const inputClass =
    "h-11 w-full rounded-[10px] border border-line bg-panel px-4 text-[15px] text-ink outline-none placeholder:text-muted focus:border-ember";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-[640px] flex-col items-stretch gap-2.5"
    >
      <input
        type="text"
        value={stack}
        onChange={(e) => setStack(e.target.value)}
        placeholder={t.suggestions.stackPlaceholder}
        aria-label={t.suggestions.stackAria}
        required
        maxLength={STACK_MAX}
        className={inputClass}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder={t.suggestions.descPlaceholder}
        aria-label={t.suggestions.descAria}
        maxLength={DESCRIPTION_MAX}
        rows={3}
        className="w-full rounded-[10px] border border-line bg-panel px-4 py-3 text-[15px] text-ink outline-none placeholder:text-muted focus:border-ember"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t.suggestions.emailPlaceholder}
        aria-label={t.suggestions.emailAria}
        maxLength={EMAIL_MAX}
        className={inputClass}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-ember"
      >
        {status === "sending" ? t.suggestions.sending : t.suggestions.submit}
      </button>
      {message && (
        <p
          role={status === "error" ? "alert" : "status"}
          className={`w-full text-center text-sm ${
            status === "error" ? "text-err" : "text-muted"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

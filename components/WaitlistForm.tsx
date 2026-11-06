"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/i18n";

type Status = "idle" | "sending" | "ok" | "already" | "error";

const EMAIL_MAX = 254;

export default function WaitlistForm() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("all");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus("error");
      setMessage(t.waitlist.errEmail);
      return;
    }
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value, interest }),
      });
      const data = (await res.json()) as { ok?: boolean; already?: boolean };
      if (res.ok && data.ok) {
        if (data.already) {
          setStatus("already");
          setMessage(t.waitlist.already);
        } else {
          setStatus("ok");
          setMessage(t.waitlist.ok);
        }
      } else {
        setStatus("error");
        setMessage(t.waitlist.errSave);
      }
    } catch {
      setStatus("error");
      setMessage(t.waitlist.errSave);
    }
  }

  const done = status === "ok" || status === "already";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-[640px] flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:flex-wrap"
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t.waitlist.emailPlaceholder}
        aria-label={t.waitlist.emailAria}
        required
        maxLength={EMAIL_MAX}
        className="h-11 min-w-[260px] flex-1 rounded-[10px] border border-[#44403C] bg-[#292524] px-4 text-[15px] text-[#FAF7F2] outline-none placeholder:text-[#A8A29E] focus:border-ember"
      />
      <select
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        aria-label={t.waitlist.interestAria}
        className="h-11 rounded-[10px] border border-[#44403C] bg-[#292524] px-3 text-[15px] text-[#FAF7F2] outline-none focus:border-ember"
      >
        <option value="all">{t.waitlist.optAll}</option>
        <option value="path-1">{t.waitlist.optPath1}</option>
        <option value="path-2">{t.waitlist.optPath2}</option>
        <option value="path-3">{t.waitlist.optPath3}</option>
        <option value="news">{t.waitlist.optNews}</option>
      </select>
      <button type="submit" disabled={status === "sending"} className="btn btn-ember">
        {status === "sending"
          ? t.waitlist.sending
          : done
            ? t.waitlist.reserved
            : t.waitlist.submit}
      </button>
      {message && (
        <p
          role={status === "error" ? "alert" : "status"}
          className={`w-full text-center text-sm ${
            status === "error" ? "text-wl-err" : "text-wl-msg"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

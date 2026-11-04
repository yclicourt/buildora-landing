"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "already" | "error";

const EMAIL_MAX = 254;

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("all");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus("error");
      setMessage(
        "Escribe un email válido para avisarte cuando tu camino esté listo.",
      );
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
          setMessage(
            "Ya estás en la lista con ese email. Te avisaremos cuando tu camino esté listo.",
          );
        } else {
          setStatus("ok");
          setMessage(
            "¡Listo! Estás en la fila de acceso anticipado. Te avisaremos cuando tu camino esté listo.",
          );
        }
      } else {
        setStatus("error");
        setMessage("No se pudo guardar tu email. Inténtalo de nuevo.");
      }
    } catch {
      setStatus("error");
      setMessage("No se pudo guardar tu email. Inténtalo de nuevo.");
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
        placeholder="tu@email.com"
        aria-label="Email"
        required
        maxLength={EMAIL_MAX}
        className="h-11 min-w-[260px] flex-1 rounded-[10px] border border-[#44403C] bg-[#292524] px-4 text-[15px] text-[#FAF7F2] outline-none placeholder:text-[#A8A29E] focus:border-ember"
      />
      <select
        value={interest}
        onChange={(e) => setInterest(e.target.value)}
        aria-label="Qué te interesa"
        className="h-11 rounded-[10px] border border-[#44403C] bg-[#292524] px-3 text-[15px] text-[#FAF7F2] outline-none focus:border-ember"
      >
        <option value="all">Todos los caminos</option>
        <option value="path-1">Un camino (Next.js + NestJS)</option>
        <option value="path-2">Disponible (React + Django)</option>
        <option value="news">Solo quiero enterarme</option>
      </select>
      <button type="submit" disabled={status === "sending"} className="btn btn-ember">
        {status === "sending" ? "Guardando…" : done ? "Reservado ✓" : "Quiero mi acceso →"}
      </button>
      {message && (
        <p
          role={status === "error" ? "alert" : "status"}
          className={`w-full text-center text-sm ${
            status === "error" ? "text-[#FCA5A5]" : "text-[#A8A29E]"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

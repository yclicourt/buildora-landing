"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "error";

const STACK_MAX = 100;
const DESCRIPTION_MAX = 500;
const EMAIL_MAX = 254;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SuggestionsForm() {
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
      setMessage("Escribe el stack que quieres sugerir.");
      return;
    }
    if (emailValue && !EMAIL_RE.test(emailValue)) {
      setStatus("error");
      setMessage("Ese email no parece válido. Déjalo vacío o corrígelo.");
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
        setMessage("¡Gracias! Tu sugerencia quedó registrada.");
      } else {
        setStatus("error");
        setMessage("No se pudo guardar tu sugerencia. Inténtalo de nuevo.");
      }
    } catch {
      setStatus("error");
      setMessage("No se pudo guardar tu sugerencia. Inténtalo de nuevo.");
    }
  }

  const inputClass =
    "h-11 w-full rounded-[10px] border border-line bg-white px-4 text-[15px] text-ink outline-none placeholder:text-muted focus:border-ember";

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-[640px] flex-col items-stretch gap-2.5"
    >
      <input
        type="text"
        value={stack}
        onChange={(e) => setStack(e.target.value)}
        placeholder="Stack sugerido (ej. Vue + Laravel)"
        aria-label="Stack sugerido"
        required
        maxLength={STACK_MAX}
        className={inputClass}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción corta (opcional): qué te gustaría generar con ese stack"
        aria-label="Descripción corta"
        maxLength={DESCRIPTION_MAX}
        rows={3}
        className="w-full rounded-[10px] border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none placeholder:text-muted focus:border-ember"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="tu@email.com (opcional, para avisarte si se construye)"
        aria-label="Email (opcional)"
        maxLength={EMAIL_MAX}
        className={inputClass}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-ember"
      >
        {status === "sending" ? "Enviando…" : "Enviar sugerencia"}
      </button>
      {message && (
        <p
          role={status === "error" ? "alert" : "status"}
          className={`w-full text-center text-sm ${
            status === "error" ? "text-red-600" : "text-muted"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}

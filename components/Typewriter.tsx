"use client";

import { useEffect, useState } from "react";

const TYPE_MS = 70;
const DELETE_MS = 30;
const HOLD_MS = 1700;
const PAUSE_MS = 400;

// Escribe y borra las frases del hero en bucle, con una velocidad tranquila
// para que se lea como acento, no como teletipo. Con
// prefers-reduced-motion muestra la primera frase fija, sin animación.
export default function Typewriter({ items }: { items: string[] }) {
  const [text, setText] = useState(items[0] ?? "");
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      return;
    }
    if (items.length === 0) return;
    let item = 0;
    let pos = items[0].length;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      const current = items[item];
      if (!deleting) {
        if (pos < current.length) {
          pos += 1;
          setText(current.slice(0, pos));
          timer = setTimeout(tick, TYPE_MS);
        } else {
          deleting = true;
          timer = setTimeout(tick, HOLD_MS);
        }
      } else if (pos > 0) {
        pos -= 1;
        setText(current.slice(0, pos));
        timer = setTimeout(tick, DELETE_MS);
      } else {
        deleting = false;
        item = (item + 1) % items.length;
        timer = setTimeout(tick, PAUSE_MS);
      }
    };
    timer = setTimeout(tick, HOLD_MS);
    return () => clearTimeout(timer);
  }, [items]);

  return (
    <span>
      <span className="sr-only">{items.join(", ")}</span>
      <span aria-hidden="true">{text}</span>
      {!reduced && (
        <span aria-hidden="true" className="typewriter-caret">
          |
        </span>
      )}
    </span>
  );
}

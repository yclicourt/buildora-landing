import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buildora — Tu próximo proyecto, sin empezar de cero",
  description:
    "Buildora genera el esqueleto completo de tu aplicación: frontend, backend, base de datos, autenticación, Docker y CI. Reserva tu acceso anticipado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

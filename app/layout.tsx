import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import { THEME_SCRIPT } from "@/lib/theme";

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
    // suppressHydrationWarning: el script inline puede añadir la clase
    // .dark a <html> antes de la hidratación.
    <html lang="es" suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import { THEME_SCRIPT } from "@/lib/theme";

const SITE_URL = "https://buildora-landing.vercel.app";
const DESCRIPTION =
  "Buildora genera el esqueleto completo de tu aplicación: frontend, backend, base de datos, autenticación, Docker y CI. Gratis, open source y 100% tuyo.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Buildora — Tu próximo proyecto, sin empezar de cero",
    template: "%s | Buildora",
  },
  description: DESCRIPTION,
  keywords: [
    "generador de proyectos",
    "scaffold",
    "plantilla full stack",
    "Next.js",
    "NestJS",
    "Django",
    "Angular",
    "Spring Boot",
    "boilerplate",
    "Docker",
    "CI/CD",
    "open source",
  ],
  authors: [
    {
      name: "Yoan Carlos Licourt Acosta",
      url: "https://www.linkedin.com/in/yoancarlos",
    },
  ],
  creator: "Yoan Carlos Licourt Acosta",
  publisher: "YoaDevOps Consulting",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Buildora",
    title: "Buildora — Tu próximo proyecto, sin empezar de cero",
    description: DESCRIPTION,
    locale: "es_ES",
    alternateLocale: ["en_US"],
    // La imagen la aporta app/opengraph-image.tsx (1200×630); Next la
    // inyecta automáticamente como og:image y twitter:image.
  },
  twitter: {
    card: "summary_large_image",
    title: "Buildora — Tu próximo proyecto, sin empezar de cero",
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// Datos estructurados para Google: qué es Buildora y que es gratis.
// El sitio es una sola URL en dos idiomas (ES por defecto, EN por toggle),
// así que no hay hreflang: Google indexa la versión en español.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Buildora",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      url: SITE_URL,
      description: DESCRIPTION,
      inLanguage: ["es", "en"],
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: {
        "@type": "Person",
        name: "Yoan Carlos Licourt Acosta",
        url: "https://www.linkedin.com/in/yoancarlos",
      },
      license: "https://opensource.org/licenses/MIT",
    },
    {
      "@type": "WebSite",
      url: SITE_URL,
      name: "Buildora",
      inLanguage: ["es", "en"],
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

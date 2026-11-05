import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Buildora — Tu próximo proyecto, sin empezar de cero";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagen para compartir (Open Graph / Twitter): marca + título + stacks.
// Next la sirve en /opengraph-image y la inyecta como og:image y
// twitter:image en el HTML. La marca es el mismo SVG de app/icon.svg,
// redibujado aquí porque ImageResponse no lee archivos locales.
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#FAF7F2",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="64" height="64" viewBox="0 0 64 64">
            <rect width="64" height="64" rx="14" fill="#EA580C" />
            <path
              d="M12 40 H22 L28 26 L36 50 L42 40 H52"
              fill="none"
              stroke="#FAF7F2"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            style={{
              fontSize: 34,
              fontWeight: 800,
              letterSpacing: 2,
              color: "#1C1917",
            }}
          >
            BUILDORA
          </span>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: -2,
            color: "#1C1917",
            marginTop: 44,
          }}
        >
          Tu próximo proyecto,
          <br />
          <span style={{ color: "#EA580C" }}>sin empezar de cero.</span>
        </div>
        <div style={{ fontSize: 28, color: "#57534E", marginTop: 28 }}>
          Frontend · Backend · Base de datos · Autenticación · Docker · CI
        </div>
      </div>
    ),
    { ...size },
  );
}

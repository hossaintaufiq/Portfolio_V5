import { ImageResponse } from "next/og";

export const alt =
  "Hossain Ahmmed Taufiq, backend and AI engineer. Founder of Softlligence Technologies.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const proof = [
  ["4 apps", "on one multi-tenant backend"],
  ["20%", "faster front-end load"],
  ["< 10 tk", "target per speaking session"],
];

// The link-preview card shown when the site is shared.
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#ffffff",
          background:
            "radial-gradient(900px 520px at 90% 0%, rgba(36,64,216,0.7), rgba(36,64,216,0) 65%), linear-gradient(165deg, #16213a 0%, #0f1527 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 30, color: "#aab4cf" }}>Hossain Ahmmed Taufiq</div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 22,
              color: "#d5dcf0",
              border: "2px solid rgba(255,255,255,0.25)",
              borderRadius: 999,
              padding: "8px 20px",
            }}
          >
            <div style={{ width: 12, height: 12, borderRadius: 999, background: "#5fd38d", marginRight: 12 }} />
            Open to backend and AI roles
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 72,
              lineHeight: 1.06,
              fontWeight: 600,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            I build the backend and AI systems behind education and manufacturing software.
          </div>
          <div style={{ display: "flex", width: 420, height: 6, background: "#7f95ff", marginTop: 18, borderRadius: 6 }} />
        </div>

        <div style={{ display: "flex", gap: 56 }}>
          {proof.map(([big, small]) => (
            <div key={big} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 52, fontWeight: 600, letterSpacing: -1 }}>{big}</div>
              <div style={{ display: "flex", fontSize: 22, color: "#aab4cf", marginTop: 4 }}>{small}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size },
  );
}

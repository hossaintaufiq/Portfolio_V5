import { ImageResponse } from "next/og";

export const alt =
  "Hossain Ahmmed Taufiq, software engineer building backend and AI systems";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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
        <div style={{ display: "flex", fontSize: 30, color: "#aab4cf" }}>
          Hossain Ahmmed Taufiq
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 76,
            lineHeight: 1.08,
            fontWeight: 600,
            letterSpacing: -2,
            maxWidth: 980,
          }}
        >
          I build the backend and AI systems behind education and manufacturing
          software.
        </div>
        <div style={{ display: "flex", alignItems: "center", fontSize: 28, color: "#aab4cf" }}>
          <div style={{ width: 56, height: 4, background: "#7f95ff", marginRight: 20 }} />
          Backend AI engineer at Edumax Labs. Founder of Softlligence Technologies.
        </div>
      </div>
    ),
    { ...size },
  );
}

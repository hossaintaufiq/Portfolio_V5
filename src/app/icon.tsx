import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// A monogram favicon in the site's ink and cobalt.
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2440d8, #16213a)",
          color: "#ffffff",
          fontSize: 30,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        HT
      </div>
    ),
    { ...size },
  );
}

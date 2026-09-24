import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffc93c",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 120,
            height: 120,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 24,
            background: "#14110f",
            color: "#ffffff",
            fontSize: 48,
            fontWeight: 700,
            marginBottom: 36,
          }}
        >
          PM
        </div>
        <div
          style={{
            fontSize: 84,
            fontWeight: 700,
            color: "#14110f",
            letterSpacing: "-0.02em",
          }}
        >
          Pranosh M
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 32,
            color: "#4a4030",
            maxWidth: 900,
            textAlign: "center",
          }}
        >
          I build full-stack AI pipelines that survive a live demo, not just
          a notebook.
        </div>
      </div>
    ),
    size
  );
}

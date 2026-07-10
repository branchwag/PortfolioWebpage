import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#0d0b14",
        color: "#d8d4e0",
        fontFamily: "monospace",
      }}
    >
      <div style={{ fontSize: 64, color: "#4ade80", display: "flex" }}>
        {siteConfig.name}
      </div>
      <div style={{ fontSize: 28, marginTop: 24, display: "flex" }}>
        Software &amp; Systems Engineer
      </div>
    </div>,
    { ...size }
  );
}

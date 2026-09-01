import { ImageResponse } from "next/og";

export const alt =
  "Assaf Elovic - personal blog about AI agents, startups, and building";
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
          justifyContent: "center",
          background: "#faf7f0",
          color: "#1c1a17",
          padding: "80px",
        }}
      >
        <div
          style={{
            fontSize: 28,
            color: "#857e70",
            marginBottom: 28,
            display: "flex",
          }}
        >
          $ whoami
        </div>
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-0.02em",
            display: "flex",
            alignItems: "center",
          }}
        >
          Assaf Elovic
          <div
            style={{
              width: 14,
              height: 58,
              background: "#1c1a17",
              marginLeft: 14,
            }}
          />
        </div>
        <div
          style={{
            fontSize: 34,
            color: "#5c564a",
            marginTop: 24,
            lineHeight: 1.4,
            display: "flex",
          }}
        >
          Personal blog about AI agents, startups, and building.
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            fontSize: 24,
            color: "#857e70",
            display: "flex",
          }}
        >
          assafelovic.com
        </div>
      </div>
    ),
    size
  );
}

import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const runtime = "edge";

export async function GET() {
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
          background: "#0D1B2A",
          padding: 48,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 600,
            color: "#F8F6F1",
            fontFamily: "Georgia, serif",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          {SITE.cabinetFull}
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 28,
            color: "#C9A84C",
            fontFamily: "system-ui, sans-serif",
          }}
        >
          Expert judiciaire immobilier — {SITE.city}
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

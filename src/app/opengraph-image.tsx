import { ImageResponse } from "next/og";
import { portfolio } from "@/data/portfolio";

export const alt = portfolio.seo.ogTitle;

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#07090d",
        padding: "56px 64px",
        color: "#f1f5f9",
        fontFamily: "sans-serif",
        border: "1px solid #1e2733",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              borderRadius: "8px",
              border: "1.5px solid rgba(20, 255, 236, 0.5)",
              backgroundColor: "rgba(20, 255, 236, 0.1)",
              color: "#14ffec",
              fontSize: "18px",
              fontWeight: 700,
              fontFamily: "monospace",
            }}
          >
            MR
          </div>
          <span
            style={{
              fontSize: "20px",
              fontWeight: 600,
              color: "#f1f5f9",
            }}
          >
            {portfolio.name}
          </span>
        </div>

        <span
          style={{
            color: "#14ffec",
            fontSize: "16px",
            fontFamily: "monospace",
            letterSpacing: "0.1em",
          }}
        >
          {portfolio.shortLocation}
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <span
          style={{
            color: "#14ffec",
            fontSize: "16px",
            fontFamily: "monospace",
            letterSpacing: "0.14em",
          }}
        >
          {portfolio.hero.eyebrow}
        </span>
        <div
          style={{
            fontSize: "54px",
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            color: "#f1f5f9",
            maxWidth: "980px",
          }}
        >
          {portfolio.hero.headline}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTop: "1px solid #1e2733",
          paddingTop: "24px",
        }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          {portfolio.hero.supportingStack.slice(0, 5).map((item) => (
            <span
              key={item}
              style={{
                backgroundColor: "#141a23",
                border: "1px solid #2d3b4d",
                borderRadius: "6px",
                padding: "6px 12px",
                fontSize: "15px",
                fontFamily: "monospace",
                color: "#94a3b8",
              }}
            >
              {item}
            </span>
          ))}
        </div>

        <span
          style={{
            fontSize: "16px",
            fontFamily: "monospace",
            color: "#64748b",
          }}
        >
          mathew-pi.vercel.app
        </span>
      </div>
    </div>,
    size,
  );
}

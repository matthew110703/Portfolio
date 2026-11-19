import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#07090d",
        borderRadius: "36px",
        border: "4px solid rgba(20, 255, 236, 0.55)",
        color: "#14ffec",
        fontSize: "76px",
        fontWeight: 700,
        fontFamily: "monospace",
        letterSpacing: "-0.04em",
      }}
    >
      MR
    </div>,
    size,
  );
}

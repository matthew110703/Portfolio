import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#07090d",
        borderRadius: "6px",
        border: "1.5px solid rgba(20, 255, 236, 0.55)",
        color: "#14ffec",
        fontSize: "14px",
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

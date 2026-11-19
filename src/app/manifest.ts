import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: portfolio.seo.title,
    short_name: portfolio.name,
    description: portfolio.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#07090d",
    theme_color: "#07090d",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}

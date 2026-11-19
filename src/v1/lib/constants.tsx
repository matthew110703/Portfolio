import type { ReactNode } from "react";
import { Icon } from "@/v1/components/ui";
import {
  HomeFilled,
  HomeOutlined,
  InfoCircleFilled,
  InfoCircleOutlined,
  ProductFilled,
  ProductOutlined,
} from "@/v1/components/icons";

export interface V1NavigationLink {
  label: string;
  icon: ReactNode;
  activeIcon: ReactNode;
  href: string;
}

export const navigationLinks: V1NavigationLink[] = [
  {
    label: "Home",
    icon: <HomeOutlined style={{ fontSize: "24px" }} />,
    activeIcon: <HomeFilled style={{ fontSize: "24px" }} />,
    href: "/v1",
  },
  {
    label: "About",
    icon: <InfoCircleOutlined style={{ fontSize: "24px" }} />,
    activeIcon: <InfoCircleFilled style={{ fontSize: "24px" }} />,
    href: "/v1/about",
  },
  {
    label: "Portfolio",
    icon: <ProductOutlined style={{ fontSize: "24px" }} />,
    activeIcon: <ProductFilled style={{ fontSize: "24px" }} />,
    href: "/v1/portfolio",
  },
  {
    label: "Say Hi!",
    icon: <Icon alt="Contact" size={24} src="/icons/waving-hand.svg" />,
    activeIcon: (
      <Icon alt="Contact" size={24} src="/icons/waving-hand-filled.svg" />
    ),
    href: "/v1/contact",
  },
];

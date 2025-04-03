import { Icon } from "@/components/ui";
import {
  HomeOutlined,
  HomeFilled,
  InfoCircleFilled,
  InfoCircleOutlined,
  ProductFilled,
  ProductOutlined,
} from "@ant-design/icons";

export const navigationLinks = [
  {
    label: "Home",
    icon: <HomeOutlined style={{ fontSize: "24px" }} />,
    activeIcon: <HomeFilled style={{ fontSize: "24px" }} />,
    href: "/",
  },
  {
    label: "About",
    icon: <InfoCircleOutlined style={{ fontSize: "24px" }} />,
    activeIcon: <InfoCircleFilled style={{ fontSize: "24px" }} />,
    href: "/about",
  },
  {
    label: "Portfolio",
    icon: <ProductOutlined style={{ fontSize: "24px" }} />,
    activeIcon: <ProductFilled style={{ fontSize: "24px" }} />,
    href: "/portfolio",
  },
  {
    label: "Say Hi!",
    icon: <Icon size={24} src="/icons/waving-hand.svg" />,
    activeIcon: <Icon size={24} src="/icons/waving-hand-filled.svg" />,
    href: "/contact",
  },
];

import {
  Home,
  HomeOutlined,
  Info,
  InfoOutlined,
  AssignmentInd,
  AssignmentIndOutlined,
  WavingHand,
  WavingHandOutlined,
} from "@mui/icons-material";

export const navigationLinks = [
  { label: "Home", icon: <HomeOutlined />, activeIcon: <Home />, href: "/" },
  {
    label: "About",
    icon: <InfoOutlined />,
    activeIcon: <Info />,
    href: "/about",
  },
  {
    label: "Portfolio",
    icon: <AssignmentIndOutlined />,
    activeIcon: <AssignmentInd />,
    href: "/portfolio",
  },
  {
    label: "Say Hi!",
    icon: <WavingHandOutlined />,
    activeIcon: <WavingHand />,
    href: "/contact",
  },
];

// Card Actions
import { OpenInNewOutlined } from "@mui/icons-material";
import { Icon } from "@/components";
export const cardActions = {
  cms: [
    {
      label: "Live Demo",
      icon: <OpenInNewOutlined fontSize="small" />,
      href: "/",
    },
    {
      label: "Live Demo",
      icon: <Icon src={"/icons/github.svg"} size={16} />,
      href: "/",
    },
  ],
};

// UI
import { ContactLink, LinkButton } from "@/components/buttons";

// Icons
import { Icon } from "@/components/ui";
import {
  LinkedinFilled,
  GithubOutlined,
  XOutlined,
  MailFilled,
} from "@ant-design/icons";

import portfolio from "@/lib/portfolio.json";

// Motion
import * as motion from "motion/react-client";
import { slideInFromBottom } from "@/lib/motion";

const ContactOverview = ({ className }) => {
  return (
    <motion.footer
      variants={slideInFromBottom}
      initial="initial"
      whileInView={"animate"}
      exit="exit"
      viewport={{ once: true }}
      className={`flex flex-col items-center gap-4 ${className}`}
    >
      <ContactLink icon={<MailFilled />} text={portfolio.email} />
      <ContactLink
        type={"location"}
        icon={<Icon src={"/icons/pin.svg"} alt="Location" size={24} />}
        text={portfolio.location}
      />

      <div className="flex flex-wrap gap-4">
        <LinkButton
          icon={<LinkedinFilled />}
          href={portfolio.social.linkedin}
          text={"LinkedIn"}
        />
        <LinkButton
          icon={<GithubOutlined />}
          href={portfolio.social.github}
          text={"Github"}
        />
        <LinkButton
          icon={<XOutlined />}
          href={portfolio.social.twitter}
          text={"Twitter"}
        />
      </div>
    </motion.footer>
  );
};

export default ContactOverview;

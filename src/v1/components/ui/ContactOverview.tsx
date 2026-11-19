import { ContactLink, LinkButton } from "@/v1/components/buttons";
import { Icon } from "@/v1/components/ui";
import {
  GithubOutlined,
  LinkedinFilled,
  MailFilled,
  XOutlined,
} from "@/v1/components/icons";
import portfolio from "@/v1/data/portfolio.json";
import * as motion from "motion/react-client";
import { slideInFromBottom } from "@/v1/lib/motion";

const ContactOverview = ({ className = "" }: { className?: string }) => {
  return (
    <motion.footer
      variants={slideInFromBottom}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true }}
      className={`flex flex-col items-center gap-4 ${className}`}
    >
      <ContactLink
        href={`mailto:${portfolio.email}?subject=Get%20In%20Touch!`}
        icon={<MailFilled />}
        text={portfolio.email}
      />
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

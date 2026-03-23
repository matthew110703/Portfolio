// Next imports
import Link from "next/link";
import Image from "next/image";

// Icons
import { ExportOutlined } from "@ant-design/icons";

// Motion
import * as motion from "motion/react-client";
import { slideInFromRight, viewAllButtonAnimation } from "@/lib/motion";

const ViewAllButton = ({ className }) => {
  return (
    <motion.div
      {...slideInFromRight}
      transition={{
        when: "beforeChildren",
        delayChildren: 0.3,
      }}
      className={`relative flex flex-col overflow-hidden rounded-3xl bg-white p-4 lg:p-8 ${className}`}
    >
      <div className="text-shadow flex flex-grow flex-col items-center justify-start gap-2">
        <ul className="hidden text-center *:text-sm *:font-semibold xl:block">
          <li>Eat</li>
          <li>Sleep</li>
          <li>Code</li>
          <li>Repeat</li>
        </ul>
        <Image
          src={"/icons/dev.gif"}
          alt="Dev Icon (Animated)"
          width={48}
          height={48}
          unoptimized
        />
      </div>

      <motion.div
        {...viewAllButtonAnimation}
        className="bg-primary bottom-0 left-0 w-full"
      >
        <Link
          href={"/portfolio"}
          className="flex w-full items-center justify-center gap-4 self-center justify-self-center rounded-3xl px-4 py-6"
          title="View All Projects"
        >
          <p className="text-shadow hidden text-center text-lg font-semibold lg:block">
            View All
          </p>
          <ExportOutlined
            style={{ color: "var(--color-shadow)", fontSize: "24px" }}
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ViewAllButton;

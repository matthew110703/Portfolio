// Next imports
import Link from "next/link";
import Image from "next/image";

// Icons
import { ExportOutlined } from "@ant-design/icons";

const ViewAllButton = ({ className }) => {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-3xl bg-white ${className}`}
    >
      <div className="text-shadow flex flex-grow flex-col items-center justify-center gap-2">
        <ul className="hidden text-center *:text-sm *:font-semibold lg:block">
          <li>Eat</li>
          <li>Sleep</li>
          <li>Code</li>
          <li>Repeat</li>
        </ul>
        <Image
          src={"/icons/dev.gif"}
          alt="Dev"
          width={48}
          height={48}
          unoptimized
        />
      </div>
      <Link
        href={"/portfolio"}
        className="bg-primary flex w-full justify-center gap-4 self-center justify-self-center rounded-3xl px-4 py-6"
      >
        <p className="text-shadow text-center text-lg font-semibold">
          View All
        </p>
        <ExportOutlined
          style={{ color: "var(--color-shadow)", fontSize: "24px" }}
        />
      </Link>
    </div>
  );
};

export default ViewAllButton;

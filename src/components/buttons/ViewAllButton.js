import React from "react";

// Next imports
import Link from "next/link";
import Image from "next/image";

// Icons
import { ExportOutlined, CodeOutlined } from "@ant-design/icons";

const ViewAllButton = ({ className, children }) => {
  return (
    <div
      className={`flex flex-col overflow-hidden rounded-3xl bg-white ${className}`}
    >
      <div className="text-shadow flex flex-grow flex-col items-center justify-center">
        <div className="hidden text-center *:text-sm *:font-semibold lg:block">
          <p>Eat</p>
          <p>Sleep</p>
          <p>Code</p>
          <p>Repeat</p>
        </div>
        {/* <CodeOutlined style={{ fontSize: "48px" }} /> */}
        <Image src={"/icons/dev.gif"} alt="Dev" width={60} height={60} />
      </div>
      <Link
        href={"/portfolio"}
        className="bg-primary flex w-full justify-center gap-4 self-center justify-self-center rounded-3xl px-4 py-6"
      >
        <p className="text-shadow text-lg font-semibold">View All</p>
        <ExportOutlined
          style={{ color: "var(--color-shadow)", fontSize: "24px" }}
        />
      </Link>
    </div>
  );
};

export default ViewAllButton;

import React from "react";

// Next imports
import Link from "next/link";

// Icons
import { ExportOutlined } from "@ant-design/icons";

const ViewAllButton = ({ className, image, href, children }) => {
  return (
    <Link href={href || "/"} className="overflow-hidden rounded-3xl bg-white">
      <div className="h-32">{children}</div>
      <div className="bg-primary flex w-[150px] min-w-[100px] justify-center gap-4 rounded-3xl px-4 py-6">
        <p className="text-shadow text-lg font-semibold">View All</p>
        <ExportOutlined
          style={{ color: "var(--color-shadow)", fontSize: "24px" }}
        />
      </div>
    </Link>
  );
};

export default ViewAllButton;

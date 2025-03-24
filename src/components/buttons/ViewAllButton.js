import React from "react";
import PropTypes from "prop-types";

// Next imports
import Image from "next/image";
import Link from "next/link";

// MUI icons
import { OpenInNewOutlined } from "@mui/icons-material";

const ViewAllButton = ({ className, image, href }) => {
  return (
    <Link href={href || "/"}>
      <div className={`relative h-2/3 ${className}`}>
        <Image src={image || ""} alt="view all" fill />
      </div>
      <aside className="bg-primary h-1/3 rounded-b-3xl flex gap-x-2 justify-center items-center">
        <h2 className="text-xl text-shadow font-semibold leading-5">
          View <br />
          <span className="text-sm font-light">All Projects</span>
        </h2>
        <OpenInNewOutlined color="info" />
      </aside>
    </Link>
  );
};

ViewAllButton.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  href: PropTypes.string,
};

export default ViewAllButton;

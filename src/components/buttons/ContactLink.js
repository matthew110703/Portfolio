import React from "react";
import Link from "next/link";

const ContactLink = ({ text, icon, href, className }) => {
  return (
    <Link
      href={href}
      className={`flex items-center gap-x-2 text-sm font-body font-semibold ${className}`}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default ContactLink;

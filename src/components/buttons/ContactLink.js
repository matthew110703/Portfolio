import React from "react";
import Link from "next/link";

const ContactLink = ({ text, icon, href, className }) => {
  return (
    <Link
      href={href || "#"}
      className={`text-primary font-body flex items-center gap-x-2 text-sm font-semibold ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-lg">{icon}</span>
      <span>{text}</span>
    </Link>
  );
};

export default ContactLink;

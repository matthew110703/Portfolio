import type { ReactNode } from "react";
import Link from "next/link";

interface LinkButtonProps {
  text: string;
  href?: string;
  className?: string;
  icon?: ReactNode;
}

const LinkButton = ({
  text,
  href = "#",
  className = "",
  icon,
}: LinkButtonProps) => {
  return (
    <Link
      href={href}
      role="button"
      className={`text-shadow bg-primary flex items-center gap-x-1.5 rounded-3xl px-3 py-1 text-xs font-semibold transition-all ease-in-out hover:scale-105 active:scale-95 md:text-sm ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={text}
    >
      <span className="text-lg">{icon}</span>
      <span>{text}</span>
    </Link>
  );
};

export default LinkButton;

import Link from "next/link";

const LinkButton = ({ text, href = "#", className, icon }) => {
  return (
    <Link
      href={href}
      role="button"
      className={`text-shadow bg-primary flex items-center gap-x-1.5 rounded-3xl px-3 py-1 text-xs font-semibold md:text-sm ${className}`}
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

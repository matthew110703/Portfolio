import Image from "next/image";

interface IconProps {
  src: string;
  alt?: string;
  size?: number;
  className?: string;
  spin?: boolean;
}

const Icon = ({
  src,
  alt = "icon",
  size = 16,
  className = "",
  spin = false,
}: IconProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={` ${spin ? "animate-spin" : ""} ${className}`}
      aria-label={alt}
      title={alt}
      priority={spin}
    />
  );
};

export default Icon;

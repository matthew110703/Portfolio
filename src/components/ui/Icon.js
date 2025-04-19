import Image from "next/image";

const Icon = ({ src, alt = "icon", size = 16, className, spin = false }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={` ${spin ? "animate-spin" : ""} ${className}`}
      aria-label={alt}
      title={alt}
      priority={true}
    />
  );
};

export default Icon;

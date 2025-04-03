import Image from "next/image";

const Icon = ({ src, alt = "icon", size = 16, className }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={`${className}`}
      aria-label={alt}
      title={alt}
      loading="lazy"
    />
  );
};

export default Icon;

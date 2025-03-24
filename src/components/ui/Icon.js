import React from "react";
import PropTypes from "prop-types";

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
    />
  );
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
};

export default Icon;

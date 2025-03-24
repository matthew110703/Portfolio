import React from "react";
import PropTypes from "prop-types";

const TitleCard = ({ text, className }) => {
  return (
    <div
      className={`bg-shadow shadow-primary w-full max-w-md justify-center rounded-3xl p-4 shadow-md ${className}`}
    >
      <h1 className="font-title text-center text-4xl font-bold text-white">
        {text}
      </h1>
    </div>
  );
};

TitleCard.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default TitleCard;

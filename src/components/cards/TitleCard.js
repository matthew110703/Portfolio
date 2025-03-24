import React from "react";
import PropTypes from "prop-types";

const TitleCard = ({ text, className }) => {
  return (
    <div
      className={`w-full p-4 bg-shadow rounded-3xl shadow-md shadow-primary justify-center ${className}`}
    >
      <h1 className="text-6xl font-bold font-title text-center text-white">
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

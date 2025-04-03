const TitleCard = ({ text, className }) => {
  return (
    <div
      className={`bg-shadow shadow-primary w-full justify-center rounded-3xl p-4 shadow-md ${className}`}
    >
      <h1 className="font-title text-center text-4xl font-bold text-white">
        {text}
      </h1>
    </div>
  );
};

export default TitleCard;

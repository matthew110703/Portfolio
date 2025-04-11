const Heading = ({ text, id }) => {
  return (
    <div className="space-y-2">
      <h2
        id={id}
        className="text-primary font-main text-3xl font-semibold md:text-4xl"
      >
        {text}
      </h2>
      <svg className="h-[2px] w-1/4">
        <line
          x1="0"
          x2="100%"
          y1="1"
          y2="1"
          className="stroke-primary stroke-2"
        />
      </svg>
    </div>
  );
};

export default Heading;

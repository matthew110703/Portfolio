const TimelineHeader = ({ title = "" }) => {
  return (
    <header className="flex w-full items-center gap-x-2">
      <h2 className="text-primary font-main text-2xl font-semibold">{title}</h2>
      <svg className="h-[2px] w-full">
        <line
          x1="0"
          x2="100%"
          y1="1"
          y2="1"
          className="stroke-primary stroke-2"
        />
      </svg>
    </header>
  );
};

export default TimelineHeader;

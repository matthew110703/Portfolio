// Motion
import * as motion from "motion/react-client";
import { fadeIn, wipeInFromLeft } from "@/lib/motion";

const TimelineHeader = ({ title = "", id }) => {
  return (
    <motion.header
      variants={fadeIn}
      {...fadeIn}
      transition={{ when: "beforeChildren" }}
      className="flex w-full items-center gap-x-2"
    >
      <h2 id={id} className="text-primary font-main text-2xl font-semibold">
        {title}
      </h2>
      <motion.svg
        variants={wipeInFromLeft}
        initial="initial"
        whileInView={"animate"}
        transition={{
          delay: 0.3,
          duration: 1,
          ease: "easeInOut",
        }}
        viewport={{ once: true }}
        className="h-[2px] w-full"
      >
        <line
          x1="0"
          x2="100%"
          y1="1"
          y2="1"
          className="stroke-primary stroke-2"
        />
      </motion.svg>
    </motion.header>
  );
};

export default TimelineHeader;

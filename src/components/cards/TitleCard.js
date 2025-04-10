// Motion
import * as motion from "motion/react-client";
import { slideInFromTop } from "@/lib/motion";

const TitleCard = ({ text, className }) => {
  return (
    <motion.div
      variants={slideInFromTop}
      {...slideInFromTop}
      aria-label="Title"
      className={`bg-shadow shadow-primary w-full justify-center rounded-3xl p-4 shadow-md ${className}`}
    >
      <h1 className="font-title text-center text-4xl font-bold text-white">
        {text}
      </h1>
    </motion.div>
  );
};

export default TitleCard;

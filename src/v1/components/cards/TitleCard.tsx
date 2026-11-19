import * as motion from "motion/react-client";
import { slideInFromTop } from "@/v1/lib/motion";

interface TitleCardProps {
  text: string;
  className?: string;
  id?: string;
}

const TitleCard = ({ text, className = "", id }: TitleCardProps) => {
  return (
    <motion.div
      {...slideInFromTop}
      aria-label="Title"
      className={`bg-shadow shadow-primary w-full justify-center rounded-3xl p-4 shadow-md ${className}`}
    >
      <h1
        id={id}
        className="font-title text-center text-4xl font-bold text-white"
      >
        {text}
      </h1>
    </motion.div>
  );
};

export default TitleCard;

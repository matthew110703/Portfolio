// UI
import { Tag } from "../ui";

// Motion
import * as motion from "motion/react-client";
import { slideInFromLeft } from "@/lib/motion";

const TimelineCard = ({ children, from, to, title, org, tags = [] }) => {
  return (
    <motion.article
      variants={slideInFromLeft}
      initial="initial"
      whileInView="animate"
      exit="exit"
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="w-full items-start gap-x-4 px-4 py-2 lg:flex"
    >
      <time className="font-main min-w-[25%] text-sm font-light text-nowrap text-gray-400">
        {from} - {to}
      </time>
      <section className="space-y-2">
        <header>
          <h3 className="text-base font-bold">{title}</h3>
          <a
            className="hover:text-primary text-sm font-semibold text-gray-400 after:ml-1 after:align-baseline after:content-['↗'] hover:after:ml-2.5 hover:after:align-top"
            href={org.url}
            target="_blank"
            rel="noreferrer"
          >
            {org.name}
          </a>
        </header>
        <p className="font-body text-sm font-light">{children}</p>
        <footer>
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <li key={tag}>
                <Tag title={tag} />
              </li>
            ))}
          </ul>
        </footer>
      </section>
    </motion.article>
  );
};

export default TimelineCard;

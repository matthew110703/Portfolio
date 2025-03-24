import React from "react";

/**
 * @name TimelineCard
 * @param {Object} props - Props for the TimelineCard component
 * @param {Node} props.children - Summary of the timeline card content (paragraphs)
 * @param {string} props.from - Start date of the timeline card
 * @param {string} props.to - End date of the timeline card
 * @param {string} props.title - Title of the timeline card
 * @param {string} props.subTitle - Subtitle of the timeline card
 * @param {string[]} [props.tags = []] - List of tags for the timeline card
 * @param {string} [props.link = "#"] - Link to the timeline card source
 */
const TimelineCard = ({
  children,
  from,
  to,
  title,
  subTitle,
  tags = [],
  link = "#",
}) => {
  return (
    <article className="w-full md:flex items-start gap-x-12 px-4 py-2">
      <time className="font-light text-gray-400 font-main text-sm text-nowrap">
        {from} - {to}
      </time>
      <section className="space-y-2">
        <header>
          <h3 className="text-base font-bold">{title}</h3>
          <a
            className="text-sm font-semibold text-gray-500"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {subTitle}
          </a>
        </header>
        <summary className="list-none font-light font-body text-sm">
          {children}
        </summary>
        <footer>
          <ul className="flex flex-wrap gap-x-2">
            {tags?.map((tag, index) => (
              <li
                key={index}
                className="text-xs font-semibold bg-primary bg-opacity-25 text-primary px-2 py-1 rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </footer>
      </section>
    </article>
  );
};

export default TimelineCard;

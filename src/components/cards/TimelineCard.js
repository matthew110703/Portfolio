// UI
import { Tag } from "../ui";

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
  org,
  tags = [],
  link = "https://example.com",
}) => {
  return (
    <article className="w-full items-start gap-x-12 px-4 py-2 sm:flex">
      <time className="font-main text-sm font-light text-nowrap text-gray-400">
        {from} - {to}
      </time>
      <section className="space-y-2">
        <header>
          <h3 className="text-base font-bold">{title}</h3>
          <a
            className="hover:text-primary text-sm font-semibold text-gray-500 after:ml-1 after:align-top hover:after:content-['↗']"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {org}
          </a>
        </header>
        <p className="font-body text-sm font-light">{children}</p>
        <footer>
          <ul className="flex flex-wrap gap-x-2">
            {tags.map((tag) => (
              <Tag key={tag} title={tag} />
            ))}
          </ul>
        </footer>
      </section>
    </article>
  );
};

export default TimelineCard;

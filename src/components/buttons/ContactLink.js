const ContactLink = ({ type = "link", text, icon, href, className }) => {
  return (
    <a
      href={href || "#"}
      className={`text-primary font-body flex items-center gap-x-2 text-sm font-semibold ${className}`}
      title={text}
      aria-label={text}
    >
      <span className="text-lg">{icon}</span>
      {type === "location" ? (
        <address className="not-italic">
          <span>{text}</span>
        </address>
      ) : (
        <span>{text}</span>
      )}
    </a>
  );
};

export default ContactLink;

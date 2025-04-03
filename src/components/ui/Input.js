const Input = ({
  type = "text",
  name,
  label,
  placeHolder,
  required = false,
  ...rest
}) => {
  return (
    <div className="border-primary/50 focus-within:border-primary/100 relative my-2 border-b">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeHolder}
        className="peer w-full p-1.5 outline-none"
        required={required}
        {...rest}
      />
      <label
        htmlFor={name}
        className={`text-primary invisible absolute -top-4 left-0 px-1 text-xs transition-all peer-focus:visible after:ml-1 after:align-top ${required ? "after:content-['*']" : "after:content-['(optional)']"}`}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;

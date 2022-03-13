const Typography = ({ type, children }) => {
  if (type === "title")
    return <h1 className="text-2xl md:text-4xl">{children}</h1>;
  if (type === "label")
    return (
      <h3 className="text-lg md:text-xl dark:text-zinc-400">{children}</h3>
    );
  if (type === "small")
    return (
      <small className="text-xs text-gray-500 md:text-sm">{children}</small>
    );
  return (
    <p className="text-justify text-gray-600 dark:text-zinc-500 text-sm md:text-base">
      {children}
    </p>
  );
};

export default Typography;

const Typography = ({ type, children }) => {
  if (type === "title") return <h1 className="text-3xl">{children}</h1>;
  if (type === "label") return <h3 className="text-2xl">{children}</h3>;
  if (type === "small") return <p className="text-sm">{children}</p>;
  return <p>{children}</p>;
};

export default Typography;

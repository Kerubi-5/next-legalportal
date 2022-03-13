const Button = ({ children, color, icon }) => {
  const theme = () => {
    if (color === "danger")
      return "text-rose-100 bg-rose-500 hover:bg-rose-600";
    if (color === "info") return "text-cyan-100 bg-cyan-500 hover:bg-cyan-600";
    if (color === "success")
      return "text-green-100 bg-green-500 hover:bg-green-600";
    if (color === "danger-outline")
      return "text-rose-500 border border-rose-500 hover:bg-rose-600 hover:text-rose-100";
    if (color === "info-outline")
      return "text-cyan-500 border border-cyan-500 hover:bg-cyan-600 hover:text-cyan-100";
    if (color === "success-outline")
      return "text-green-500 border border-green-500 hover:bg-green-600 hover:text-green-100";
  };
  return (
    <button
      type="button"
      className={`inline-flex items-center px-6 py-2 text-sm font-medium text-center rounded ${theme()}`}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;

const Button = ({ children, color, icon }) => {
  return (
    <button type="button" className={`btn ${color}`}>
      {icon}
      {children}
    </button>
  );
};

export default Button;

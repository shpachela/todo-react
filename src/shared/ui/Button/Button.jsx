import styles from "./Button.module.scss";

const Button = ({
  children,
  className,
  type = "button",
  onClick,
  isDisabled,
}) => {
  return (
    <button onClick={onClick} className={`${styles.button} ${className}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
};

export default Button;

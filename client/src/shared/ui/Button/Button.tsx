import { memo } from "react";

import ButtonProps from "./Button.types.ts";
import styles from "./Button.module.css";

export const ButtonComponent = ({
  onClick,
  className,
  type,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`${styles.button} ${className ? className : ""}`.trim()}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const Button = memo(ButtonComponent);

export default Button;

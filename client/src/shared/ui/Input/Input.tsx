import { InputProps } from "@/shared/ui/Input/Input.types.ts";
import styles from "./Input.module.css";

const Input = ({
  className,
  type = "text",
  onChange,
  placeholder = "",
}: InputProps) => {
  return (
    <input
      className={`${styles.input} ${className ? className : ""}`.trim()}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;

import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

import styles from "./Input.module.css";

interface InputProps {
  className?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string;
}

const Input = ({className, type, onChange, placeholder='' }: InputProps) => {
  return (
    <input className={`${styles.input} ${className ? className : ''}`.trim()} type={type} placeholder={placeholder} onChange={onChange} />
  )
}

export default Input;
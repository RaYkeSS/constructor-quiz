import { useCallback, MouseEvent, memo } from "react";


import ButtonProps from './Button.types.ts'
import styles from "./Button.module.css";


const ButtonComponent  = ({onClick, className, type, children}: ButtonProps) => {

  const onClickMemo = useCallback((e:  MouseEvent<HTMLButtonElement>) => {
    onClick ? onClick(e) : null;
  }, [onClick])

  return (
    <button
      className={`${styles.button} ${className ? className : ''}`.trim()}
      type={type}
      onClick={onClickMemo}
    >
      {children}
    </button>
  );
}

const Button = memo(ButtonComponent);

export default Button;
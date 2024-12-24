import { ChangeEvent, Dispatch, MouseEvent, SetStateAction, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import styles from "./Auth.module.css"



const Auth = ({open, setOpen}: {open: Boolean, setOpen: Dispatch<SetStateAction<boolean>>}) => {
  const [hidden, setHidden] = useState(false);
  const refs = {
    email: useRef<string>(''),
    password: useRef<string>('')
  }

  const handleHide = () => {
    setHidden(prevState => !prevState)
  }

  const handleFormClick = (e: MouseEvent<HTMLFormElement>) => {
    e.stopPropagation();
  };

  const handleInputChange = useCallback((key: keyof typeof refs) => (e: ChangeEvent<HTMLInputElement>) => {
    refs[key].current = e.target.value;
  }, [])

  useEffect(() => {
    if (!hidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    console.log(hidden, open);
    return () => {
      setOpen(false);
      setHidden(false);
      document.body.style.overflow = "";
    };
  }, [hidden]);

  return createPortal(
    <div style={{ display: hidden || !open ? "none" : ""}} className={styles.backdrop} onClick={handleHide}>
    <form className={styles.form} onClick={handleFormClick}>
      <h3>Регистрация</h3>
      <input className={styles.input} type="email" placeholder="Email" onChange={handleInputChange('email')} />
      <input className={styles.input} type="password" placeholder="Password" onChange={handleInputChange('password')} />
      <a>Забыли пароль?</a>
      <button className={styles.button} type="submit" onClick={(e) => e.preventDefault()}>Войти</button>
    </form>
    </div>
  , document.body);
};

export default Auth;


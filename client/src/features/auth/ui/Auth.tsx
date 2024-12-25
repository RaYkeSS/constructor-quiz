import { ChangeEvent, useCallback, useRef } from "react";

import { Button, Input } from "shared/ui/";

import styles from "./Auth.module.css"



const Auth = () => {
  const refs = {
    email: useRef<string>(''),
    password: useRef<string>('')
  }

  const handleInputChange = useCallback((key: keyof typeof refs) => (e: ChangeEvent<HTMLInputElement>) => {
    refs[key].current = e.target.value;
    console.log(refs[key].current);
  }, [])

  return (
      <form className={styles.form}>
        <h3>Регистрация</h3>
        <Input type="email" placeholder="Email" onChange={handleInputChange('email')} />
        <Input type="password" placeholder="Password" onChange={handleInputChange('password')} />
        <a>Забыли пароль?</a>
        <Button type='submit' onClick={(e) => e.preventDefault()}>Войти</ Button>
      </form>
  )
};

export default Auth;


import { type ChangeEvent } from "react";

import { Button, Input, Loader } from "~/shared/ui";
import styles from "./Login.module.css";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin.ts";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, error, handleLogin } = useLogin();

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form className={styles.form}>
      {error && <div>{error.message}</div>}
      {loading ? (
        <Loader size="lg" />
      ) : (
        <>
          <h3>Войти</h3>
          <Input
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password}
          />
          <Button
            type="submit"
            onClick={handleLogin}
            style={{ marginTop: "auto" }}
            disabled={loading}
          >
            Войти
          </Button>
        </>
      )}
    </form>
  );
};

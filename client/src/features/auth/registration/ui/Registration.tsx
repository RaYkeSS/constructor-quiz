import { ChangeEvent, useCallback, useRef } from "react";
import { useMutation } from "@apollo/client";

import { Button, Input, Link, Loader } from "~/shared/ui";
// import { RegistrationProps } from "../model";
import handleAuth from "../model/handleAuth.ts";

import { CREATE_USER } from "../model/schema.ts";
import { GET_USER } from "~/entities/user";

import styles from "./Registration.module.css";

export const Registration = () => {
  const refs = {
    email: useRef<string>(""),
    password: useRef<string>(""),
  };

  const handleInputChange = useCallback(
    (key: keyof typeof refs) => (e: ChangeEvent<HTMLInputElement>) => {
      refs[key].current = e.target.value;
    },
    [],
  );

  const [login, { loading }] = useMutation(CREATE_USER, {
    update(cache, { data: { login } }) {
      cache.writeQuery({
        query: GET_USER,
        // variables: { id: login.user.id },
        data: {
          getUserById: {
            __typename: "User",
            email: login.user.email,
            id: login.user.id,
            token: login.user.token,
          },
        },
      });
    },
  });

  return (
    <form className={styles.form}>
      {loading ? (
        <Loader size="lg" />
      ) : (
        <>
          <h3>Регистрация</h3>
          <Input
            type="email"
            placeholder="Email"
            onChange={handleInputChange("email")}
          />
          <Input
            type="password"
            placeholder="Password"
            onChange={handleInputChange("password")}
          />
          <Link to={"/remember"}>Забыли пароль?</Link>
          <Button
            type="submit"
            onClick={(e) => handleAuth<typeof e, typeof login>(e, login)}
            style={{ marginTop: "auto" }}
          >
            Зарегистрироваться
          </Button>
        </>
      )}
    </form>
  );
};

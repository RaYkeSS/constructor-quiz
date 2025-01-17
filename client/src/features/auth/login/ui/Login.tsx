import { type ChangeEvent } from "react";

import { Button, Input, Loader } from "~/shared/ui";
// import { handleLogin } from "../model/handleLogin.ts";
import styles from "./Login.module.css";
import { useState } from "react";

import { LOGIN_USER } from "../model/schema.ts";
import { GET_USER } from "~/graphql";

import { ApolloError, useMutation } from "@apollo/client";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const [login, { loading }] = useMutation(LOGIN_USER, {
    update(cache, { data: { login } }) {
      cache.writeQuery({
        query: GET_USER,
        variables: { id: "cm60qivrt0000uutsh82t589r" },
        data: {
          getUserById: {
            __typename: "User",
            email: login.email,
            id: login.id,
          },
        },
      });
    },
  });

  const handleLogin = async (e: React.MouseEvent) => {
    e.preventDefault();
    // console.log(loading);
    try {
      const { data } = await login({
        variables: {
          email: "test2025@test.ru",
          password: "test2025@test.ru",
        },
      });
      console.log("Login successful:", data);
    } catch (error) {
      if (error instanceof ApolloError) {
        console.error("ApolloError:", error.message);
        console.error("GraphQL Errors:", error.graphQLErrors);
        console.error("Network Error:", error.networkError);
      } else {
        console.error("Unexpected error:", error);
      }
    }
  };

  return (
    <form className={styles.form}>
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

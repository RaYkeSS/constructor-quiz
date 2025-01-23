import { MouseEvent } from "react";
import { ApolloError, useMutation } from "@apollo/client";
import { LOGIN_USER } from "~/features/auth/login/model/schema.ts";
import { writeUserToCache } from "~/entities/user/api/userApi.ts";
import { useNavigate } from "react-router";

import { ENDPOINTS } from "~/shared/endpoints";

export const useLogin = () => {
  const navigate = useNavigate();
  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    update(cache, { data: { login } }) {
      writeUserToCache(cache, login);
    },
  });

  const handleLogin = async (e: MouseEvent) => {
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
      navigate(ENDPOINTS.home);
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

  return { loading, error, handleLogin };
};

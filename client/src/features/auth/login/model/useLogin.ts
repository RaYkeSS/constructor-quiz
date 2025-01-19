import { ApolloError, useMutation } from "@apollo/client";
import { LOGIN_USER } from "~/features/auth/login/model/schema.ts";
import { GET_USER } from "~/entities/user";

export const useLogin = () => {
  const [login, { loading, error }] = useMutation(LOGIN_USER, {
    update(cache, { data: { login } }) {
      cache.writeQuery({
        query: GET_USER,
        // variables: { id: login.id },
        data: {
          getUser: {
            __typename: "User",
            ...login,
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

  return { loading, error, handleLogin };
};

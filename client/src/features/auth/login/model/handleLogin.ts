import { type IhandleLogin } from "./types";
import { ApolloError } from "@apollo/client";

export const handleLogin: IhandleLogin = async (e, login) => {
  // e.preventDefault();
  // try {
  //   const { data } = await login({
  //     variables: { email: "test2025@test.ru", password: "test2025@test.ru" },
  //   });
  //   console.log("Login successful:", data);
  //
  // } catch (error) {
  //   console.error(error);
  // }

  e.preventDefault();
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

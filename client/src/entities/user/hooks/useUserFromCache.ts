import { useApolloClient } from "@apollo/client";
import { GET_USER } from "~/entities/user";

export const useUserFromCache = () => {
  const client = useApolloClient();
  const data = client.readQuery({ query: GET_USER });

  return data ? data.getUser : null;
};

import { ApolloCache } from "@apollo/client";

import { GET_USER } from "~/entities/user";

import { User } from "../model";

export const writeUserToCache = (cache: ApolloCache<any>, userData: User) => {
  return cache.writeQuery({
    query: GET_USER,
    // variables: { id: login.id },
    data: {
      getUser: {
        ...userData,
        __typename: "User",
      },
    },
  });
};

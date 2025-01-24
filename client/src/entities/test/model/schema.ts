import { gql } from "@apollo/client";

export const GET_TESTS = gql`
  query getTests {
    getTests {
      title
      questions {
        id
      }
      authorId
      createdAt
      id
    }
  }
`;

export const CREATE_TEST = gql``;

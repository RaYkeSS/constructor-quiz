import { gql } from "@apollo/client";

export const GET_USER = gql`
  query GetUser {
    getUser {
      email
      id
      #      tests {
      #        id
      #      }
      #      completedTests {
      #        id
      #      }
      #      userAnswers {
      #        id
      #      }
    }
  }
`;

export const GET_USERS = gql`
  query GetUsers {
    getUsers {
      email
      id
    }
  }
`;

// export const GET_USER_BY_ID = gql`
//     query GetUserById($id: ID) {
//         getUserById(id: $id) {
//             email
//             id
//             #      tests {
//             #        id
//             #      }
//             #      completedTests {
//             #        id
//             #      }
//             #      userAnswers {
//             #        id
//             #      }
//         }
//     }
// `;

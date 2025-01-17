import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      email
      id
    }
  }
`;

// {
//   query: 'mutation Mutation($email: String, $password: String) {\n' +
//   '  login(email: $email, password: $password) {\n' +
//   '    email\n' +
//   '    id\n' +
//   '  }\n' +
//   '}',
//     variables: { email: 'test2025@test.ru', password: 'test2025@test.ru' },
//   operationName: 'Mutation'
// }
//
//

// {
//   query: 'mutation Mutation($email: String!, $password: String!) {\n' +
//   '  login(email: $email, password: $password) {\n' +
//   '    email\n' +
//   '    id\n' +
//   '    __typename\n' +
//   '  }\n' +
//   '}'
//     variables: { email: 'test2025@test.ru', password: 'test2025@test.ru' },
//   operationName: 'Mutation',
// }

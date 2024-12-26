import { gql } from "apollo-server";

export const answerSchema = gql`
  type Answer {
    id: ID!
    value: String!
    correct: Boolean! # Правильность ответа
    question: Question! # Вопрос, к которому относится ответ
    userAnswers: [UserAnswer!] # Ответы пользователей
  }
`;

// export const answerSchema = gql`
//     type Query {
//         answer(id: String!): Answer
//         userAnswers(UserId: String!): [UserAnswers]
//     }
//
//     type Mutation {
//         addAnswer(id: String!, value: String!, correct: Boolean): User!
//     }
//
//     type Answer {
//         id: String!
//         value: String
//         correct: Boolean
//         questionId:  String
//     }
//
//     type UserAnswers {
//         id: String!
//         UserId: String!
//         answerId: String!
//         user: User
//         answer: Answer
//         value: String
//     }
//
// `;

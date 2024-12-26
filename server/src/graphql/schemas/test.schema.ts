import { gql } from "apollo-server";

export const testSchema = gql`
  type Test {
    id: ID!
    title: String!
    author: User! # Автор теста
    createdAt: String! # Дата создания
    questions: [Question!] # Вопросы теста
    completedTests: [CompletedTest] # Пройденные тесты
  }
`;

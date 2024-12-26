import { gql } from 'apollo-server';

export const querySchema = gql`
  type Query {
  # Пользователи
    getUsers: [User!]!
    getUserById(id: ID!): User
  
  # Тесты
    getTests: [Test!]!
    getTestById(id: ID!): Test
  
  # Вопросы
    getQuestionsByTest(testId: ID!): [Question!]!
  
  # Ответы
    getAnswersByQuestion(questionId: ID!): [Answer!]!
  }
`


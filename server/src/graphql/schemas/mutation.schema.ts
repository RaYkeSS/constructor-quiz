import { gql } from 'apollo-server';

export const mutationSchema = gql`
    type Mutation {
        # Пользователи
        createUser(email: String!, password: String!): User!

        # Тесты
        createTest(title: String!, authorId: ID!): Test!

        # Вопросы
        createQuestion(
            description: String!
            type: QuestionType!
            order: Int!
            testId: ID!
        ): Question!

        # Ответы
        createAnswer(
            value: String!
            correct: Boolean!
            questionId: ID!
        ): Answer!

        # Пройденные тесты
        completeTest(userId: ID!, testId: ID!, right: Int!, wrong: Int!): CompletedTest!

        # Ответы пользователей
        submitAnswer(userId: ID!, answerId: ID!, value: String): UserAnswer!
    }
`
import { gql } from 'apollo-server';

export const questionSchema = gql`
    type Question {
        id: ID!
        description: String!
        type: QuestionType! # Тип вопроса (перечисление)
        order: Int!
        test: Test! # Тест, к которому относится вопрос
        answers: [Answer!]! # Варианты ответа
    }
    enum QuestionType {
        MULTIPLE_CHOICE
        SINGLE_CHOICE
        TEXT_INPUT
    }
`



// export const questionSchema = gql`
//     type Query {
//         question: Question
//     }
//
//     type Mutation {
//         addQuestion(description: String!, type: String, quizId: String,): Question
//     }
//
//     type Question {
//         id:       String
//         description: String
//         type:        String
//         order:       Int
//         quizId:      String
//         quiz:        Quiz
//         answer:      [Answer]
//     }
//
// `;
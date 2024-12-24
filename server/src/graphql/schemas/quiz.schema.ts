import { gql } from 'apollo-server';

export const quizSchema = gql`
    type Quiz {
        id: String!
        title: String!
        questions: [Question]
    }

    type Question {
        id: String!
        text: String!
        options: [String]
    }
    
    type Answer {
        id: String!
        value: String!
        correct: Boolean!
    }
    
    type Query {
        quiz(id: String!): Quiz
        quizzes: [Quiz]
        answer: Answer
    }
`;
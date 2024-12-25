import { gql } from 'apollo-server';

export const questionsSchema = gql`
    type Query {
        question: Question
    }

    type Mutation {
        addQuestion(text: String!, options: [String]): Question
    }

    type Question {
        id: String
        text: String
        options: [String]
    }

`;
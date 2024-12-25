import { gql } from 'apollo-server';

export const answersSchema = gql`
    type Query {
        answer(id: String!): Answer
        userAnswers(UserId: String!): [UserAnswers]
    }

    type Mutation {
        addAnswer(id: String!, value: String!, correct: Boolean): User!
    }

    type Answer {
        id: String!
        value: String
        correct: Boolean
        questionId:  String
    }
    
    type UserAnswers {
        id: String!
        UserId: String!
        answerId: String!
        user: User
        answer: Answer
        value: String
    }

`;
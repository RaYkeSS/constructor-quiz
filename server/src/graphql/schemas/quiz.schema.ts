import { gql } from 'apollo-server';

export const quizSchema = gql`
    type Query {
        quiz(id: String!): Quiz
        quizzes: [Quiz]
        answer: Answer
    }
    
    type Quiz {
        id: String!
        title: String
        authorId: String
        questions: [Question]
        createdAt: String
        completedQuiz: [CompletedQuiz]
    }
    
    type CompletedQuiz {
        id: String!
        userId: String!
        quizId: String!
        user: User
        quiz: Quiz
        correct: Int
        wrongAnswer: Int
    }
    
`;

// import { gql } from 'apollo-server';
import { userSchema } from './user.schema';
import { quizSchema } from './quiz.schema';
import { questionsSchema } from './questions.schema';
import { answersSchema } from './answers.schema';

// const baseSchema = gql`
//
// `;

export const typeDefs = [userSchema, quizSchema, questionsSchema, answersSchema];
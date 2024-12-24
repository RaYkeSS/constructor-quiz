import { gql } from 'apollo-server';
import { userSchema } from './user.schema';
import { quizSchema } from './quiz.schema';

// const baseSchema = gql`
//
// `;

export const typeDefs = [userSchema, quizSchema];
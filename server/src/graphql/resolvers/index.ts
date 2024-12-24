import { userResolvers } from './user.resolver';
import { quizResolvers } from './quiz.resolver';

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...quizResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,

  }
};
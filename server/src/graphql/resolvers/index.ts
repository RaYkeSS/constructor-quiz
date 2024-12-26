import { userResolvers } from "./user.resolver";
import { testResolvers } from "./test.resolver";
import { questionResolvers } from "./question.resolver";
import { answerResolvers } from "./answer.resolver";
import { completedTestResolvers } from "./completedTest.resolver";
import { userAnswerResolvers } from "./userAnswer.resolver";

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...testResolvers.Query,
    ...questionResolvers.Query,
    ...answerResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
  User: {
    ...userResolvers.User,
  },
  Test: {
    ...testResolvers.Test,
  },
  Question: {
    ...questionResolvers.Question,
  },
  Answer: {
    ...answerResolvers.Answer,
  },
  CompletedTest: {
    ...completedTestResolvers.CompletedTest,
  },
  UserAnswer: {
    ...userAnswerResolvers.UserAnswer,
  },
};

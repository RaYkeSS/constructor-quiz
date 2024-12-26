import { PrismaClient } from "@prisma/client";

import { Resolvers } from "../generated/types";

const prisma = new PrismaClient();

export const questionResolvers: Resolvers = {
  Query: {
    getQuestionsByTest: async (_, { testId }) => {
      return prisma.question.findMany({
        where: { testId },
        include: {
          answers: true,
        },
      });
    },
  },
  Mutation: {
    // Создание вопроса
    createQuestion: async (_, { description, type, order, testId }) => {
      return prisma.question.create({
        data: {
          description,
          type,
          order,
          testId,
        },
      });
    },
  },
  Question: {
    test: async (parent) => {
      return prisma.test.findUnique({
        where: { id: parent.testId },
      });
    },
    answers: async (parent) => {
      return prisma.answer.findMany({
        where: { questionId: parent.id },
      });
    },
  },
};

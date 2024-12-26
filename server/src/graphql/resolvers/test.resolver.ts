import { PrismaClient } from "@prisma/client";
import { Resolvers } from "../generated/types";
// import { MutationAddQuestion } from "./types";

const prisma = new PrismaClient();

export const testResolvers: Resolvers = {
  Query: {
    // Получение всех тестов
    getTests: async () => {
      return prisma.test.findMany({
        include: {
          author: true,
          questions: true,
        },
      });
    },

    // Получение теста по ID
    getTestById: async (_, { id }) => {
      return prisma.test.findUnique({
        where: { id },
        include: {
          author: true,
          questions: true,
        },
      });
    },
  },
  Mutation: {
    // Создание теста
    createTest: async (_, { title, authorId }) => {
      return prisma.test.create({
        data: {
          title,
          authorId,
          createdAt: new Date(),
        },
      });
    },
    // Завершение теста
    completeTest: async (_, { userId, testId, right, wrong }) => {
      return prisma.completedTest.create({
        data: {
          userId,
          testId,
          right,
          wrong,
        },
      });
    },
  },
  Test: {
    author: async (parent) => {
      return prisma.user.findUnique({
        where: { id: parent.authorId },
      });
    },
    questions: async (parent) => {
      return prisma.question.findMany({
        where: { testId: parent.id },
      });
    },
    completedTests: async (parent) => {
      return prisma.completedTest.findMany({
        where: { testId: parent.id },
      });
    },
  },
};

import { PrismaClient } from "@prisma/client";
// import { instanceOf } from "graphql/jsutils/instanceOf";

import { Resolvers } from "../generated/types";

const prisma = new PrismaClient();

export const answerResolvers: Resolvers = {
  Query: {
    // Получение ответов по вопросу
    getAnswersByQuestion: async (_, { questionId }) => {
      return prisma.answer.findMany({
        where: { questionId },
      });
    },
  },
  Mutation: {
    // Создание ответа
    createAnswer: async (_, { value, correct, questionId }) => {
      return prisma.answer.create({
        data: {
          value,
          correct,
          questionId,
        },
      });
    },
    // Отправка ответа пользователя
    submitAnswer: async (_, { userId, answerId, value }) => {
      return prisma.userAnswer.create({
        data: {
          userId,
          answerId,
          value,
        },
      });
    },
  },
  Answer: {
    question: async (parent) => {
      return prisma.question.findUnique({
        where: { id: parent.questionId },
      });
    },
    userAnswers: async (parent) => {
      return prisma.userAnswer.findMany({
        where: { answerId: parent.id },
      });
    },
  },
};

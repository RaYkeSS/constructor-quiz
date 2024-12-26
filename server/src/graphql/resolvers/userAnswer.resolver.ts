import { PrismaClient } from "@prisma/client";
import { Resolvers } from "../generated/types";

const prisma = new PrismaClient();

export const userAnswerResolvers: Resolvers = {
  UserAnswer: {
    user: async (parent) => {
      return prisma.user.findUnique({
        where: { id: parent.userId },
      });
    },
    answer: async (parent) => {
      return prisma.answer.findUnique({
        where: { id: parent.answerId },
      });
    },
  },
};

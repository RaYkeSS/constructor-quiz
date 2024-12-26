import { PrismaClient } from "@prisma/client";
import { Resolvers } from "../generated/types";

const prisma = new PrismaClient();

export const completedTestResolvers: Resolvers = {
  CompletedTest: {
    user: async (parent) => {
      return prisma.user.findUnique({
        where: { id: parent.userId },
      });
    },
    test: async (parent) => {
      return prisma.test.findUnique({
        where: { id: parent.testId },
      });
    },
  },
};

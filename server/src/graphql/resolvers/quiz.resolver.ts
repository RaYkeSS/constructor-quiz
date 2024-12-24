import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const quizResolvers = {
  Query: {
    quiz: async (_: any, { id }: { id: string }) => {
      return await prisma.quiz.findUnique({
        where: { id },
        include: { questions: true },
      });
    },
    quizzes: async () => {
      return await prisma.quiz.findMany({
        include: { questions: true },
      });
    },
  },
};
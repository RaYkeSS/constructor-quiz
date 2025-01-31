import { idArg, queryType } from "nexus";

export const Query = queryType({
  definition(t) {
    t.list.field("getUsers", {
      type: "User",
      resolve: (_, __, { prisma }) => {
        return prisma.user.findMany();
      },
    });

    t.field("getUserById", {
      type: "User",
      args: { id: idArg() },
      resolve: (_, { id }, { prisma }) => {
        return prisma.user.findUnique({ where: { id } });
      },
    });

    t.list.field("getTests", {
      type: "Test",
      resolve: (_, __, { prisma }) => {
        return prisma.test.findMany({
          include: {
            questions: {
              include: {
                answers: true,
              },
            },
          },
        });
      },
    });

    t.field("getTestById", {
      type: "Test",
      args: { id: idArg() },
      resolve: (_, { id }, { prisma }) => {
        return prisma.test.findUnique({ where: { id } });
      },
    });

    t.list.field("getQuestionsByTest", {
      type: "Question",
      args: { testId: idArg() },
      resolve: (_, { testId }, { prisma }) => {
        return prisma.question.findMany({
          where: { testId },
          include: {
            answers: true,
          },
        });
      },
    });

    t.list.field("getAnswersByQuestion", {
      type: "Answer",
      args: { questionId: idArg() },
      resolve: (_, { questionId }, { prisma }) => {
        return prisma.answer.findMany({ where: { questionId } });
      },
    });
  },
});

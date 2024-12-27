import { booleanArg, idArg, intArg, mutationType, stringArg } from "nexus";
import { signJWT } from "../../auth";
import bcrypt from "bcrypt";

export const Mutation = mutationType({
  definition(t) {
    t.field("createUser", {
      type: "UserWithToken",
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (_, { email, password }, { prisma }) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
          data: {
            email,
            password: hashedPassword,
          },
        });
        return { user, token: signJWT(email) };
      },
    });

    t.field("login", {
      type: "UserWithToken", // Возвращаем токен
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (_, { email, password }, { prisma }) => {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
          throw new Error("User not found");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }

        return { user, token: signJWT(email) };
      },
    });

    t.field("createTest", {
      type: "Test",
      args: {
        title: stringArg(),
        authorId: stringArg(),
      },
      resolve: (_, { title, authorId }, { prisma, req, authenticate }) => {
        const auth = authenticate(req);
        console.log(auth);
        return prisma.test.create({
          data: {
            title,
            authorId,
          },
        });
      },
    });

    t.field("createQuestion", {
      type: "Question",
      args: {
        description: stringArg(),
        type: stringArg(),
        order: intArg(),
        testId: idArg(),
      },
      resolve: (_, { description, type, order, testId }, { prisma }) => {
        return prisma.question.create({
          data: {
            description,
            type,
            order,
            testId,
          },
        });
      },
    });

    t.field("createAnswer", {
      type: "Answer",
      args: {
        value: stringArg(),
        correct: booleanArg(),
        questionId: idArg(),
      },
      resolve: (_, { value, correct, questionId }, { prisma }) => {
        return prisma.answer.create({
          data: {
            value,
            correct,
            questionId,
          },
        });
      },
    });

    t.field("completeTest", {
      type: "CompletedTest",
      args: {
        userId: idArg(),
        testId: idArg(),
        right: intArg(),
        wrong: intArg(),
      },
      resolve: (_, { userId, testId, right, wrong }, { prisma }) => {
        return prisma.completedTest.create({
          data: {
            userId,
            testId,
            right,
            wrong,
          },
        });
      },
    });

    t.field("submitAnswer", {
      type: "UserAnswer",
      args: {
        userId: idArg(),
        answerId: idArg(),
        value: stringArg(),
      },
      resolve: (_, { userId, answerId, value }, { prisma }) => {
        return prisma.userAnswer.create({
          data: {
            userId,
            answerId,
            value,
          },
        });
      },
    });
  },
});

import {
  booleanArg,
  idArg,
  intArg,
  list,
  mutationType,
  stringArg,
} from "nexus";
import { signJWT } from "../../auth";
import bcrypt from "bcrypt";

export const Mutation = mutationType({
  definition(t) {
    t.field("createUser", {
      type: "User",
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (_, { email, password }, { prisma, res }) => {
        const isUserExists = await prisma.user.findUnique({ where: { email } });
        if (isUserExists) {
          throw new Error("User with email already exists");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await prisma.user.create({
          data: {
            email,
            password: hashedPassword,
          },
        });
        const token = signJWT(user.id);
        res.cookie("token", token, {
          httpOnly: true,
          secure: true,
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        });
        return { user };
      },
    });

    t.field("login", {
      type: "User", // Возвращаем токен
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (_, { email, password }, { prisma, res, req }) => {
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user) {
          throw new Error("User not found");
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
          throw new Error("Invalid password");
        }
        const token = signJWT(user.id);
        res.cookie("Token", token, {
          httpOnly: true,
          secure: true,
          sameSite: true,
          expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
        });
        if (req && req.headers) {
          const cookies = req.headers.cookie;
          console.log(cookies);
          console.log(typeof cookies);
        }
        return user;
      },
    });

    t.field("createTest", {
      type: "Test",
      args: {
        authorId: stringArg(),
        title: stringArg(),
        questions: list("QuestionWithAnswersInput"),
      },
      resolve: async (
        _,
        { title, authorId, questions },
        { prisma, req, authenticate },
      ) => {
        // const auth = authenticate(req);
        console.log(req, authenticate);

        const test = await prisma.test.create({
          data: {
            title,
            authorId,
          },
        });

        if (questions && questions.length > 0) {
          for (const question of questions) {
            const createdQuestion = await prisma.question.create({
              data: {
                description: question.description,
                type: question.type,
                testId: test.id,
              },
            });

            if (question.answers && question.answers.length > 0) {
              await prisma.answer.createMany({
                data: question.answers.map((answer: any) => ({
                  value: answer.value,
                  correct: answer.correct,
                  questionId: createdQuestion.id,
                })),
              });
            }
          }
        }
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

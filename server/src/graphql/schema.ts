import {
  objectType,
  enumType,
  stringArg,
  intArg,
  idArg,
  booleanArg,
  queryType,
  mutationType,
  makeSchema,
} from "nexus";
import bcrypt from "bcrypt";

// Определение типов
const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("email");
    t.string("password");
    t.list.field("tests", { type: "Test" });
    t.list.field("completedTests", { type: "CompletedTest" });
    t.list.field("userAnswers", { type: "UserAnswer" });
  },
});

const Test = objectType({
  name: "Test",
  definition(t) {
    t.string("id");
    t.string("title");
    t.string("authorId");
    t.field("author", { type: "User" });
    t.string("createdAt");
    t.list.field("questions", { type: "Question" });
    t.list.field("completedTests", { type: "CompletedTest" });
  },
});

const Question = objectType({
  name: "Question",
  definition(t) {
    t.string("id");
    t.string("description");
    t.field("type", { type: "QuestionType" });
    t.int("order");
    t.string("testId");
    t.field("test", { type: "Test" });
    t.list.field("answers", { type: "Answer" });
  },
});

const QuestionType = enumType({
  name: "QuestionType",
  members: ["MULTIPLE_CHOICE", "SINGLE_CHOICE", "TEXT_INPUT"],
});

const Answer = objectType({
  name: "Answer",
  definition(t) {
    t.string("id");
    t.string("value");
    t.boolean("correct");
    t.string("questionId");
    t.field("question", { type: "Question" });
    t.list.field("userAnswers", { type: "UserAnswer" });
  },
});

const CompletedTest = objectType({
  name: "CompletedTest",
  definition(t) {
    t.string("id");
    t.string("userId");
    t.field("user", { type: "User" });
    t.string("testId");
    t.field("test", { type: "Test" });
    t.int("right");
    t.int("wrong");
  },
});

const UserAnswer = objectType({
  name: "UserAnswer",
  definition(t) {
    t.string("id");
    t.string("userId");
    t.field("user", { type: "User" });
    t.string("answerId");
    t.field("answer", { type: "Answer" });
    t.string("value");
  },
});

// Определение Query
const Query = queryType({
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
        return prisma.test.findMany();
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
        return prisma.question.findMany({ where: { testId } });
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

// Определение Mutation
const Mutation = mutationType({
  definition(t) {
    t.field("createUser", {
      type: "User",
      args: {
        email: stringArg(),
        password: stringArg(),
      },
      resolve: async (_, { email, password }, { prisma }) => {
        const hashedPassword = await bcrypt.hash(password, 10);
        return prisma.user.create({
          data: {
            email,
            password: hashedPassword,
          },
        });
      },
    });

    t.field("createTest", {
      type: "Test",
      args: {
        title: stringArg(),
        authorId: stringArg(),
      },
      resolve: (_, { title, authorId }, { prisma }) => {
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

// Создание схемы
export const schema = makeSchema({
  types: [
    Query,
    Mutation,
    User,
    Test,
    Question,
    QuestionType,
    Answer,
    CompletedTest,
    UserAnswer,
  ],
});

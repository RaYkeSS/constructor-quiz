import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

import { Resolvers } from "../generated/types";

const prisma = new PrismaClient();

export const userResolvers: Resolvers = {
  Query: {
    // Получение всех пользователей
    getUsers: async () => {
      return prisma.user.findMany();
    },

    // Получение пользователя по ID
    getUserById: async (_, { id }) => {
      return prisma.user.findUnique({
        where: { id },
      });
    },
  },
  Mutation: {
    // Создание пользователя
    createUser: async (_, { email, password }) => {
      const hashedPassword = await bcrypt.hash(password, 10);
      return prisma.user.create({
        data: { email, password: hashedPassword },
      });
    },
  },
  User: {
    tests: async (parent) => {
      return prisma.test.findMany({
        where: { authorId: parent.id },
      });
    },
    completedTests: async (parent) => {
      return prisma.completedTest.findMany({
        where: { userId: parent.id },
      });
    },
    userAnswers: async (parent) => {
      return prisma.userAnswer.findMany({
        where: { userId: parent.id },
      });
    },
  },
};

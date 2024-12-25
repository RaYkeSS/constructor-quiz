import { PrismaClient } from '@prisma/client';
// import { instanceOf } from "graphql/jsutils/instanceOf";

import { QueryUser, LoginUser, MutationAddUser } from "./types";

const prisma = new PrismaClient();

export const userResolvers = {
  Query: {
    user: async (_: any, { email }: QueryUser) => await prisma.user.findUnique({ where: { email } }),
    users: async () => await prisma.user.findMany(),
    login: async (_: any, { email, password }: LoginUser) => await prisma.user.findUnique({ where: { email, password } }),
  },
  Mutation: {
    addUser: async (_: any, { name, email, password }: MutationAddUser) => {
      try {
        return  await prisma.user.create({
          data: {
            name,
            email,
            password,
          },
        });
      } catch (error) {
        throw new Error('Error creating user: ' + (error as Error).message);
      }
    },
  },
};
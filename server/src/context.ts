import { PrismaClient } from "@prisma/client";
import { authenticate } from "./auth";

const prisma = new PrismaClient();

export const context = {
  prisma,
  authenticate,
};

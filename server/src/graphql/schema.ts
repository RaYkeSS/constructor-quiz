import { makeSchema } from "nexus";
import {
  Query,
  Mutation,
  User,
  UserWithToken,
  Test,
  Question,
  QuestionType,
  Answer,
  CompletedTest,
  UserAnswer,
} from "./schemas";
import path from "node:path";

// Создание схемы
export const schema = makeSchema({
  types: [
    Query,
    Mutation,
    User,
    UserWithToken,
    Test,
    Question,
    QuestionType,
    Answer,
    CompletedTest,
    UserAnswer,
  ],
});
// outputs: {
//   schema: path.join(__dirname, "schema.graphql"), // Если вам нужен .graphql файл
// },

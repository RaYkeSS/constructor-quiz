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

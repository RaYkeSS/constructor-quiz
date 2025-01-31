// import path from "node:path";
import { makeSchema } from "nexus";
import {
  Query,
  Mutation,
  User,
  UserWithToken,
  Test,
  Question,
  QuestionType,
  QuestionWithAnswersInput,
  Answer,
  AnswerInput,
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
    QuestionWithAnswersInput,
    Answer,
    AnswerInput,
    CompletedTest,
    UserAnswer,
  ],
});
// outputs: {
//   schema: path.join(__dirname, "schema.graphql"),
// },

import { inputObjectType, objectType } from "nexus";

export const Answer = objectType({
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

export const AnswerInput = inputObjectType({
  name: "AnswerInput",
  definition(t) {
    t.string("value");
    t.boolean("correct");
  },
});

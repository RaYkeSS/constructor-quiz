import { enumType, objectType } from "nexus";

export const Question = objectType({
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

export const QuestionType = enumType({
  name: "QuestionType",
  members: ["MULTIPLE_CHOICE", "SINGLE_CHOICE", "TEXT_INPUT"],
});

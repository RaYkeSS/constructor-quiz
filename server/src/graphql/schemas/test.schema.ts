import { objectType } from "nexus";

export const Test = objectType({
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

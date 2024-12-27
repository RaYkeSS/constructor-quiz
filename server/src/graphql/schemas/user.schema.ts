import { objectType } from "nexus";

export const User = objectType({
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

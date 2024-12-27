import { objectType } from "nexus";

export const CompletedTest = objectType({
  name: "CompletedTest",
  definition(t) {
    t.string("id");
    t.string("userId");
    t.field("user", { type: "User" });
    t.string("testId");
    t.field("test", { type: "Test" });
    t.int("right");
    t.int("wrong");
  },
});

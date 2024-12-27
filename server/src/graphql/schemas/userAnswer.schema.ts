import { objectType } from "nexus";

export const UserAnswer = objectType({
  name: "UserAnswer",
  definition(t) {
    t.string("id");
    t.string("userId");
    t.field("user", { type: "User" });
    t.string("answerId");
    t.field("answer", { type: "Answer" });
    t.string("value");
  },
});

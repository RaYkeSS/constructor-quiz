import { ITest } from "~/entities/test";
import { IAnswer } from "~/entities/answer";

export interface IQuestion {
  answers: IAnswer[];
  description: string;
  id: string;
  order: number;
  test: ITest;
  type: keyof typeof QuestionType;
}

enum QuestionType {
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  SINGLE_CHOICE = "SINGLE_CHOICE",
  TEXT_INPUT = "TEXT_INPUT",
}

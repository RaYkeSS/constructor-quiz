import { IQuestion } from "../question";

export interface IAnswer {
  correct: boolean;
  id: string;
  question: IQuestion;
  questionId: string;
  userAnswers: IUserAnswers;
  value: string;
}

interface IUserAnswers {}

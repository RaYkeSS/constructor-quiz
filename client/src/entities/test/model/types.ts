import { User } from "~/entities/user";
import { IQuestion } from "~/entities/question";

export interface ITest {
  author: User;
  authorId: string;
  createdAt: Date;
  id: string;
  questions: IQuestion[];
  title: string;
}

export interface ITestCardProps extends Partial<ITest> {}

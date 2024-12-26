import { userSchema } from './user.schema';
import { testSchema } from './test.schema';
import { questionSchema } from './question.schema';
import { answerSchema } from './answer.schema';
import { completedTestSchema } from './completedTest.schema';
import { userAnswerSchema } from './userAnswer.schema';

// main
import { querySchema } from './query.schema';
import { mutationSchema } from './mutation.schema';


export const typeDefs = [userSchema, testSchema, questionSchema, answerSchema, completedTestSchema, userAnswerSchema, querySchema, mutationSchema];
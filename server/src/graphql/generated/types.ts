import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Answer = {
  __typename?: 'Answer';
  correct: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  question: Question;
  userAnswers?: Maybe<Array<UserAnswer>>;
  value: Scalars['String']['output'];
};

export type CompletedTest = {
  __typename?: 'CompletedTest';
  id: Scalars['ID']['output'];
  right: Scalars['Int']['output'];
  test: Test;
  user: User;
  wrong: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  completeTest: CompletedTest;
  createAnswer: Answer;
  createQuestion: Question;
  createTest: Test;
  createUser: User;
  submitAnswer: UserAnswer;
};


export type MutationCompleteTestArgs = {
  right: Scalars['Int']['input'];
  testId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
  wrong: Scalars['Int']['input'];
};


export type MutationCreateAnswerArgs = {
  correct: Scalars['Boolean']['input'];
  questionId: Scalars['ID']['input'];
  value: Scalars['String']['input'];
};


export type MutationCreateQuestionArgs = {
  description: Scalars['String']['input'];
  order: Scalars['Int']['input'];
  testId: Scalars['ID']['input'];
  type: QuestionType;
};


export type MutationCreateTestArgs = {
  authorId: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSubmitAnswerArgs = {
  answerId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
  value?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getAnswersByQuestion: Array<Answer>;
  getQuestionsByTest: Array<Question>;
  getTestById?: Maybe<Test>;
  getTests: Array<Test>;
  getUserById?: Maybe<User>;
  getUsers: Array<User>;
};


export type QueryGetAnswersByQuestionArgs = {
  questionId: Scalars['ID']['input'];
};


export type QueryGetQuestionsByTestArgs = {
  testId: Scalars['ID']['input'];
};


export type QueryGetTestByIdArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['ID']['input'];
};

export type Question = {
  __typename?: 'Question';
  answers: Array<Answer>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  order: Scalars['Int']['output'];
  test: Test;
  type: QuestionType;
};

export enum QuestionType {
  MultipleChoice = 'MULTIPLE_CHOICE',
  SingleChoice = 'SINGLE_CHOICE',
  TextInput = 'TEXT_INPUT'
}

export type Test = {
  __typename?: 'Test';
  author: User;
  completedTests?: Maybe<Array<Maybe<CompletedTest>>>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  questions?: Maybe<Array<Question>>;
  title: Scalars['String']['output'];
};

export type User = {
  __typename?: 'User';
  completedTests?: Maybe<Array<Maybe<CompletedTest>>>;
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  tests?: Maybe<Array<Maybe<Test>>>;
  userAnswers?: Maybe<Array<Maybe<UserAnswer>>>;
};

export type UserAnswer = {
  __typename?: 'UserAnswer';
  answer: Answer;
  id: Scalars['ID']['output'];
  user: User;
  value?: Maybe<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Answer: ResolverTypeWrapper<Answer>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  CompletedTest: ResolverTypeWrapper<CompletedTest>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Question: ResolverTypeWrapper<Question>;
  QuestionType: QuestionType;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Test: ResolverTypeWrapper<Test>;
  User: ResolverTypeWrapper<User>;
  UserAnswer: ResolverTypeWrapper<UserAnswer>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Answer: Answer;
  Boolean: Scalars['Boolean']['output'];
  CompletedTest: CompletedTest;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  Question: Question;
  String: Scalars['String']['output'];
  Test: Test;
  User: User;
  UserAnswer: UserAnswer;
};

export type AnswerResolvers<ContextType = any, ParentType extends ResolversParentTypes['Answer'] = ResolversParentTypes['Answer']> = {
  correct?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  question?: Resolver<ResolversTypes['Question'], ParentType, ContextType>;
  userAnswers?: Resolver<Maybe<Array<ResolversTypes['UserAnswer']>>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompletedTestResolvers<ContextType = any, ParentType extends ResolversParentTypes['CompletedTest'] = ResolversParentTypes['CompletedTest']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  right?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  test?: Resolver<ResolversTypes['Test'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  wrong?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  completeTest?: Resolver<ResolversTypes['CompletedTest'], ParentType, ContextType, RequireFields<MutationCompleteTestArgs, 'right' | 'testId' | 'userId' | 'wrong'>>;
  createAnswer?: Resolver<ResolversTypes['Answer'], ParentType, ContextType, RequireFields<MutationCreateAnswerArgs, 'correct' | 'questionId' | 'value'>>;
  createQuestion?: Resolver<ResolversTypes['Question'], ParentType, ContextType, RequireFields<MutationCreateQuestionArgs, 'description' | 'order' | 'testId' | 'type'>>;
  createTest?: Resolver<ResolversTypes['Test'], ParentType, ContextType, RequireFields<MutationCreateTestArgs, 'authorId' | 'title'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'email' | 'password'>>;
  submitAnswer?: Resolver<ResolversTypes['UserAnswer'], ParentType, ContextType, RequireFields<MutationSubmitAnswerArgs, 'answerId' | 'userId'>>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getAnswersByQuestion?: Resolver<Array<ResolversTypes['Answer']>, ParentType, ContextType, RequireFields<QueryGetAnswersByQuestionArgs, 'questionId'>>;
  getQuestionsByTest?: Resolver<Array<ResolversTypes['Question']>, ParentType, ContextType, RequireFields<QueryGetQuestionsByTestArgs, 'testId'>>;
  getTestById?: Resolver<Maybe<ResolversTypes['Test']>, ParentType, ContextType, RequireFields<QueryGetTestByIdArgs, 'id'>>;
  getTests?: Resolver<Array<ResolversTypes['Test']>, ParentType, ContextType>;
  getUserById?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryGetUserByIdArgs, 'id'>>;
  getUsers?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
};

export type QuestionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Question'] = ResolversParentTypes['Question']> = {
  answers?: Resolver<Array<ResolversTypes['Answer']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  test?: Resolver<ResolversTypes['Test'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['QuestionType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TestResolvers<ContextType = any, ParentType extends ResolversParentTypes['Test'] = ResolversParentTypes['Test']> = {
  author?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  completedTests?: Resolver<Maybe<Array<Maybe<ResolversTypes['CompletedTest']>>>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  questions?: Resolver<Maybe<Array<ResolversTypes['Question']>>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  completedTests?: Resolver<Maybe<Array<Maybe<ResolversTypes['CompletedTest']>>>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  tests?: Resolver<Maybe<Array<Maybe<ResolversTypes['Test']>>>, ParentType, ContextType>;
  userAnswers?: Resolver<Maybe<Array<Maybe<ResolversTypes['UserAnswer']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserAnswerResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserAnswer'] = ResolversParentTypes['UserAnswer']> = {
  answer?: Resolver<ResolversTypes['Answer'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Answer?: AnswerResolvers<ContextType>;
  CompletedTest?: CompletedTestResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Question?: QuestionResolvers<ContextType>;
  Test?: TestResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserAnswer?: UserAnswerResolvers<ContextType>;
};


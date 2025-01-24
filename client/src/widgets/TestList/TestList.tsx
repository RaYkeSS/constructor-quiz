import { ITest, TestCard } from "~/entities/test";

export const TestList = ({ tests }: { tests: ITest[] }) => {
  if (tests.length === 0) {
    return <div>No tests</div>;
  }

  return (
    <div>
      {tests.map((test) => (
        <TestCard
          key={test.id}
          title={test.title}
          questions={test.questions}
          createdAt={test.createdAt}
          authorId={test.authorId}
        />
      ))}
    </div>
  );
};

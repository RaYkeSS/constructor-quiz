import { Layout, Loader, Title } from "~/shared/ui";
import { Header, Footer } from "~/widgets";
import { TestList } from "~/widgets/TestList/TestList.tsx";
import { useQueryAllTests } from "~/entities/test";

export const TestPage = () => {
  const { data, loading, error } = useQueryAllTests();

  console.log("data", data);
  console.log("loading", loading);
  console.log("error", error);

  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Title variant="h1">TestPage</Title>
      {loading && <Loader />}
      {error && <p>Error</p>}
      {data?.length > 0 && <TestList tests={data} />}
    </Layout>
  );
};

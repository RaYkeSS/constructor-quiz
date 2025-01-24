import { Layout, Title } from "~/shared/ui";
import { Footer, Header } from "~/widgets";

export const CreateTestPage = () => {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Title variant="h1">Create Test</Title>
      <div
        style={{
          backgroundColor: "darkgray",
          width: "100%",
          height: "30vh",
          padding: "10vh",
          margin: "auto",
          marginTop: "10vh",
        }}
      ></div>
    </Layout>
  );
};

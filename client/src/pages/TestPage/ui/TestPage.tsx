import { Layout } from "~/shared/ui";
import { Header, Footer } from "~/widgets";

export const TestPage = () => {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <div>TestPage</div>
    </Layout>
  );
};

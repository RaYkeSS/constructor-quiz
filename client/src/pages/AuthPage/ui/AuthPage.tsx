import { Header } from "~/widgets";
import { Login } from "~/features/auth";
import { Layout } from "~/shared/ui";

export const AuthPage = () => {
  return (
    <Layout header={<Header />}>
      <Login />
    </Layout>
  );
};

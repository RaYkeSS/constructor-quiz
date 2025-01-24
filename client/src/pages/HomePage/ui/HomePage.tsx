// import { Container } from "~/shared/ui";
import { Layout, Title } from "~/shared/ui";
import { Header, Footer } from "~/widgets";

export const HomePage = () => {
  return (
    <Layout header={<Header />} footer={<Footer />}>
      <Title variant="h1">Home</Title>
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

// <Header />
// <Container>
//   <h1 className={"text-4xl mt-60"}>Home</h1>
//   <div
//     style={{
//       backgroundColor: "darkgray",
//       width: "100%",
//       height: "30vh",
//       padding: "10vh",
//       margin: "auto",
//       marginTop: "10vh",
//     }}
//   ></div>
// </Container>

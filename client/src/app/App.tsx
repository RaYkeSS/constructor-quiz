import { Header } from "~/widgets";

import "~/shared/styles/global.css";
// import { useEffect } from "react";
// import { gql, useMutation } from "@apollo/client";

// export const gTest = gql`
//   mutation Mutation($email: String!, $password: String!) {
//     login(email: $email, password: $password) {
//       email
//       id
//     }
//   }
// `;

function App() {
  // const [sometest, { data, loading, error }] = useMutation(gTest);
  //
  // useEffect(() => {
  //   const asyncTest = async () => {
  //     await sometest({
  //       variables: { email: "test2025@test.ru", password: "test2025@test.ru" },
  //     });
  //     console.log(data);
  //     console.log("loading " + loading);
  //     console.log("error " + error);
  //   };
  //   asyncTest();
  // }, []);

  return (
    <>
      <Header />
      <h1 className={"text-4xl mt-60"}></h1>
      <div
        style={{
          backgroundColor: "darkgray",
          width: "70vw",
          height: "30vh",
          padding: "10vh",
          margin: "auto",
          marginTop: "10vh",
        }}
      ></div>
    </>
  );
}

export default App;

import { useCallback, useEffect, useState } from "react";

import { AuthModal } from "features/auth";
import { Header } from "widgets";
import { Button } from "shared/ui";

import { gql, useMutation } from "@apollo/client";

import schema from "./graphql.schema.json";

import "shared/styles/global.css";

// const gTest = gql`
//   mutation Mutation($email: String!, $password: String!) {
//     createUser(email: $email, password: $password) {
//       token
//       user {
//         email
//         id
//         password
//       }
//     }
//   }
// `;

const gTest = gql`
  ${createUser}
`;

function App() {
  console.log(schema);
  const [isModalOpen, setModalOpen] = useState(false);

  const [sometest, { data, loading, error }] = useMutation(gTest);

  const handleButtonClick = useCallback(() => {
    setModalOpen(true);
  }, []);

  useEffect(() => {
    const asyncTest = async () => {
      await sometest({
        variables: { email: "front12346", password: "front22346" },
      });
      console.log(data);
      console.log(loading);
      console.log(error);
    };
    asyncTest();
  }, []);

  return (
    <>
      <Header
        isAuthenticated={false}
        onLogin={() => {}}
        onRegister={() => {}}
        userProfile={{ name: "oleg" }}
      />
      <Button onClick={handleButtonClick}>Open</Button>
      <h1 className={"text-4xl mt-60"}>
        111111111111111111111111111111111111111111111111111111111111111111111111111111111
      </h1>
      <AuthModal open={isModalOpen} setOpen={setModalOpen} />
    </>
  );
}

export default App;

import { Header } from "~/widgets/Header";

export const HomePage = () => {
  return (
    <>
      <Header />
      <h1 className={"text-4xl mt-60"}>Home</h1>
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
};

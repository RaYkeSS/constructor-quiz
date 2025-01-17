import { MouseEvent } from "react";

const handleAuth = async <
  E extends MouseEvent,
  T extends (...args: any[]) => Promise<any>,
>(
  e: E,
  login: T,
) => {
  e.preventDefault();
  try {
    const { data } = await login({
      variables: { email: "test", password: "test" },
    });
    // console.log(data);
    const token = await data.login.token;
    localStorage.setItem("token", JSON.stringify(token));
  } catch (error) {
    console.error(error);
  }
};

export default handleAuth;

import { MouseEvent, useEffect, useState } from "react";
import { gql, useApolloClient } from "@apollo/client";

import { Button } from "~/shared/ui";
import { User } from "~/entities";
import { RegistrationModal, LoginModal } from "~/features/auth";
import { Navbar } from "~/widgets";
import styles from "./Header.module.css";

export const GET_USER = gql`
  query GetUserById($id: ID) {
    getUserById(id: $id) {
      email
      id
    }
  }
`;

export const Header = () => {
  const [openAuth, setOpenAuth] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const client = useApolloClient();

  const handleModalClick = (e: MouseEvent<HTMLButtonElement>) => {
    const type = (e.target as HTMLButtonElement).dataset.type;
    if (type === "login") {
      setOpenLogin(true);
    }
    if (type === "auth") {
      setOpenAuth(true);
    }
  };

  useEffect(() => {
    const getUserById = client.readQuery({
      query: GET_USER,
    });
    setUser(getUserById?.getUserById);
    console.log(getUserById);
  }, [openAuth, openLogin]);

  return (
    <header className={styles.header}>
      {/* Логотип слева */}
      <div className={styles.logoDiv}>
        <img src="/logo.png" alt="Логотип" className={styles.img} />
      </div>

      {/* Навигация по центру */}
      <Navbar />
      {/* Кнопки справа */}
      {user ? (
        <Button>{user.email}</Button>
      ) : (
        <div>
          <Button onClick={(e) => handleModalClick(e)} data-type="login">
            Войти
          </Button>
          <LoginModal open={openLogin} setOpen={setOpenLogin} />
          <Button onClick={(e) => handleModalClick(e)} data-type="auth">
            Зарегистрироваться
          </Button>
          <RegistrationModal open={openAuth} setOpen={setOpenAuth} />
        </div>
      )}
    </header>
  );
};

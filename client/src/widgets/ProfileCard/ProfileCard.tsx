import { MouseEvent, useState } from "react";

import { Button } from "~/shared/ui";
import { useUserFromCache } from "~/entities/user";
import { LoginModal, RegistrationModal } from "~/features/auth";

export const ProfileCard = () => {
  const user = useUserFromCache();
  const [openAuth, setOpenAuth] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleModalClick = (e: MouseEvent<HTMLButtonElement>) => {
    const type = (e.target as HTMLButtonElement).dataset.type;
    if (type === "login") {
      setOpenLogin(true);
    }
    if (type === "auth") {
      setOpenAuth(true);
    }
  };

  if (!user) {
    return (
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
    );
  }

  return <Button>{user.email}</Button>;
};

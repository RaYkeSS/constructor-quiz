import { ButtonGroup, Link } from "shared/ui";
import { HeaderProps } from "@/widgets/Header/Header.types.ts";

import styles from "./Header.module.css";

const buttonArray = [
  { label: "Войти", onClick: () => {} },
  { label: "Зарегистрироваться", onClick: () => {} },
];

// const buttonArray = isAuthenticated
//   ? [{ label: "Профиль", onClick: () => console.log("Профиль") }]
//   : [
//       { label: "Войти", onClick: onLogin },
//       { label: "Зарегистрироваться", onClick: onRegister },
//     ];

const Header = ({
  isAuthenticated,
  onLogin,
  onRegister,
  userProfile,
}: HeaderProps) => {
  return (
    <header className={styles.header}>
      {/* Логотип слева */}
      <div className={styles.logoDiv}>
        <img src="/path/to/logo.png" alt="Логотип" className={styles.img} />
      </div>

      {/* Навигация по центру */}
      <nav className={styles.nav}>
        <Link
          to="/my-tests"
          className="text-light-primary hover:text-light-secondary"
        >
          Мои Тесты
        </Link>
        <Link
          to="/all-tests"
          className="text-light-primary hover:text-light-secondary"
        >
          Все тесты
        </Link>
        <Link
          to="/completed-tests"
          className="text-light-primary hover:text-light-secondary"
        >
          Пройденные тесты
        </Link>
      </nav>

      {/* Кнопки справа */}
      <ButtonGroup buttons={buttonArray} />
    </header>
  );
};

export default Header;

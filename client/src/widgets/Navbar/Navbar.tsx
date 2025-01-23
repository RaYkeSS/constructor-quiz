import styles from "./Navbar.module.css";
import { NavLink } from "~/shared/ui";

import { ENDPOINTS } from "~/shared/endpoints";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to={ENDPOINTS.my_tests}>Мои Тесты</NavLink>
      <NavLink to={ENDPOINTS.test}>Все тесты</NavLink>
      <NavLink to={ENDPOINTS.completed_tests}>Пройденные тесты</NavLink>
    </nav>
  );
};

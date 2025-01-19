import styles from "./Navbar.module.css";
import { NavLink } from "~/shared/ui";

export const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink to="/my-tests">Мои Тесты</NavLink>
      <NavLink to="/test">Все тесты</NavLink>
      <NavLink to="/completed-tests">Пройденные тесты</NavLink>
    </nav>
  );
};

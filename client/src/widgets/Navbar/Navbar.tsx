import styles from "./Navbar.module.css";
import { Link } from "~/shared/ui";

export const Navbar = () => {
  return (
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
  );
};

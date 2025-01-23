import { Link } from "~/shared/ui";
import { Navbar, ProfileCard } from "~/widgets";
import styles from "./Header.module.css";

import { ENDPOINTS } from "~/shared/endpoints";
import { ThemeToggle } from "~/features/themeToggle";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logoDiv}>
        <Link to={ENDPOINTS.home}>
          <img src="/logo.png" alt="Логотип" className={styles.img} />
        </Link>
      </div>
      <Navbar />
      <ThemeToggle />
      <ProfileCard />
    </div>
  );
};

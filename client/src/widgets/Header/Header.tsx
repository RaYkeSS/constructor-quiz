import { Link } from "~/shared/ui";
import { Navbar, ProfileCard } from "~/widgets";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logoDiv}>
        <Link to="/">
          <img src="/logo.png" alt="Логотип" className={styles.img} />
        </Link>
      </div>
      <Navbar />
      <ProfileCard />
    </header>
  );
};

import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div>{new Date().getFullYear()}</div>
      <div>
        <a href="/" className={styles.link}>
          Политика конфиденциальности
        </a>
        <span className="mx-2">|</span>
        <a href="/" className={styles.link}>
          Условия использования
        </a>
      </div>
    </div>
  );
};

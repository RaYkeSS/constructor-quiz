import { PropsWithChildren, ReactNode } from "react";

import styles from "./Layout.module.css";
import { Container } from "~/shared/ui";

interface Props {
  header?: ReactNode;
  footer?: ReactNode;
  aside?: ReactNode;
}

export const Layout = ({
  header,
  footer,
  aside,
  children,
}: PropsWithChildren<Props>) => {
  return (
    <div className={styles.container}>
      {header && <header className={styles.header}>{header}</header>}
      {aside && (
        <aside className={styles.aside}>
          <Container>{aside}</Container>
        </aside>
      )}
      <main className={styles.main}>
        <Container>{children}</Container>
      </main>
      {footer && <footer className={styles.footer}>{footer}</footer>}
    </div>
  );
};

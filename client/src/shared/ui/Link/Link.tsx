import { Link as RouterLink, LinkProps } from "react-router";

import styles from "./Link.module.css";

export const Link = ({ to, children, className = "", ...props }: LinkProps) => {
  return (
    <RouterLink
      to={to}
      className={`${styles.link} ${className ? className : ""}`.trim()}
      {...props}
    >
      {children}
    </RouterLink>
  );
};

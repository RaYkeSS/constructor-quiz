import { Link as RouterLink } from "react-router";

import { LinkProps } from "./Link.types.ts";

import styles from "./Link.module.css";

const Link = ({ to, children, className = "", ...props }: LinkProps) => {
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

export default Link;

import { NavLink as NavRouterLink } from "react-router";

import { LinkProps } from "./Link.types.ts";

import styles from "./Link.module.css";

export const NavLink = ({
  to,
  children,
  className = "",
  ...props
}: LinkProps) => {
  return (
    <NavRouterLink
      to={to}
      className={({ isActive }: { isActive: boolean }) =>
        `${styles.navlink} ${className} ${isActive ? styles.active : "hover:text-blue-500"}`
      }
      {...props}
    >
      {children}
    </NavRouterLink>
  );
};

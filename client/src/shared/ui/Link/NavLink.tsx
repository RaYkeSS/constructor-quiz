import { NavLink as NavRouterLink, NavLinkProps } from "react-router";

import styles from "./Link.module.css";

export const NavLink = ({
  to,
  children,
  className = "",
  ...props
}: NavLinkProps) => {
  return (
    <NavRouterLink
      end
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

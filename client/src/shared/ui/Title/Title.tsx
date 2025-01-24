import styles from "./Title.module.css";
import { ReactNode } from "react";

interface ITitleProps {
  children?: ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export const Title = ({ variant = "h6", className, children }: ITitleProps) => {
  const Tag = variant;
  return (
    <Tag className={`${styles[variant]} ${styles.color} ${className}`}>
      {children}
    </Tag>
  );
};

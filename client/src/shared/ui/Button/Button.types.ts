import React from "react";

export default interface ButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  className?: string,
  type?: "button" | "submit" | "reset" | undefined,
  children?: React.ReactNode,
}
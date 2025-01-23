import { PropsWithChildren } from "react";

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    console.log(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  } else {
    // Установите тему по умолчанию, если значение не найдено
    document.documentElement.setAttribute("data-theme", "light");
  }

  return children;
};

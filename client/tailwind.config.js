/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["selector", '[data-theme="dark"]'],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Цветовая палитра для светлой темы
        light: {
          primary: "#4F46E5", // Основной цвет
          secondary: "#FBBF24", // Вторичный цвет
          background: "#FFFFFF", // Цвет фона
          text: "#1F2937", // Цвет текста
          border: "#E5E7EB", // Цвет границ
        },
        // Цветовая палитра для темной темы
        dark: {
          primary: "#3B82F6", // Основной цвет
          secondary: "#FBBF24", // Вторичный цвет
          background: "#1F2937", // Цвет фона
          text: "#FFFFFF", // Цвет текста
          border: "#4B5563", // Цвет границ
        },
      },
      spacing: {
        "custom-xs": "4px", // sm
        "custom-sm": "8px", // md
        "custom-md": "12px", // lg
        "custom-lg": "16px", // xl
        "custom-xl": "20px", // 2xl
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark"],
      textColor: ["dark"],
      borderColor: ["dark"],
    },
  },
  plugins: [],
};

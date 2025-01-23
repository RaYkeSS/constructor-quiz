export const ThemeToggle = () => {
  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.getAttribute("data-theme") === "dark") {
      html.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      html.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <label
      htmlFor="theme-toggle"
      className="flex items-center cursor-pointer relative h-8 w-16 rounded-full bg-dark-background dark:bg-light-background ring-0 ring-inset shadow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute left-[0.5em] top-1/2 flex size-6 -translate-y-1/2 items-center justify-center text-light-border"
        aria-hidden="true"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="absolute right-[0.5em] top-1/2 size-6 -translate-y-1/2 rounded-full text-dark-border"
        aria-hidden="true"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path>
      </svg>
      <input
        className="peer sr-only"
        id="theme-toggle"
        name="theme-toggle"
        type="checkbox"
        onChange={toggleTheme}
        aria-labelledby="theme-toggle-label"
      />
      <span
        id="theme-toggle-label"
        className="absolute left-[0.25em] top-1/2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full bg-light-border dark:bg-dark-border to-zinc-400 transition-all duration-300 peer-checked:left-[calc(100%-1.75em)] peer-focus:ring-2 peer-focus:ring-light-border peer-focus:dark:ring-dark-border peer-hover:ring-2 peer-hover:ring-light-border peer-hover:dark:ring-dark-border"
        aria-hidden="true"
      ></span>
    </label>
  );
};

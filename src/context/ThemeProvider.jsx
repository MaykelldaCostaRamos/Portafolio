import { useEffect, useState } from "react";
import  { ThemeContext } from "./ThemeContext";


export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("system");

  // Aplicar tema según estado
  useEffect(() => {
    const applyTheme = (currentTheme) => {
      if (currentTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else if (currentTheme === "light") {
        document.documentElement.classList.remove("dark");
      } else if (currentTheme === "system") {
        const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        document.documentElement.classList.toggle("dark", isSystemDark);
      }
    };

    applyTheme(theme);

    const themeList = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") applyTheme("system");
    };
    themeList.addEventListener("change", handleChange);

    return () => themeList.removeEventListener("change", handleChange);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

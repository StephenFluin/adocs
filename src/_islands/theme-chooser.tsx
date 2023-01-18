import React from "react";
import { useEffect } from "react";

export default function ThemeSwitcher() {
  useEffect(() => {
    console.log("this is being run");
    if (typeof window === "undefined") return;
    // This is a hack to access global state and local storage easily
    const themes = ["System", "Light", "Dark"];
    const themeClasses = themes.map((theme) => theme.toLowerCase());
    let current = themes.indexOf(localStorage.getItem("theme") || "System");
    const switcher = document.getElementById("themeSwitcher");

    if (switcher) {
      // Update the button and the classList
      const setTheme = (theme: number) => {
        document.body.classList.remove(
          themeClasses[(theme + 1) % themes.length],
          themeClasses[(theme + 2) % themes.length]
        );
        document.body.classList.add(themeClasses[theme]);
        switcher.innerHTML = themes[theme];
      };

      setTheme(current);

      switcher?.addEventListener("click", () => {
        let next = (current + 1) % themes.length;
        // Persist accross loads
        localStorage.setItem("theme", themes[next]);
        setTheme(next);
        current = next;
      });
    }
  });
  return <div id="themeSwitcher"></div>;
}

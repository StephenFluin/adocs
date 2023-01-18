import React from 'react';
import { useMounted } from '../_includes/use-mounted';
import { useTheme } from 'next-themes';
type ThemeSwitchProps = {
  lite?: boolean;
};

const OPTIONS = [
  { key: "light", name: "Light" },
  { key: "dark", name: "Dark" },
  { key: "system", name: "System" },
];

export default function ThemeSwitch({ lite }) {
  const { setTheme, resolvedTheme, theme = "" } = useTheme();
  const mounted = useMounted();
  const WordTouse = mounted && resolvedTheme === "dark" ? 'Dark' : 'Light';
  return (
    // <Select
    //     title="Change theme"
    //     options={OPTIONS}
    //     onChange={(option) => {
    //       setTheme(option.key);
    //     }}
    //     selected={{
    //       key: theme,
    //       name: (
    //         <div className="nx-flex nx-items-center nx-gap-2 nx-capitalize">
    //           {WordTouse}
    //           <span className={lite ? "md:nx-hidden" : ""}>
    //             {mounted ? theme : "light"}
    //           </span>
    //         </div>
    //       ),
    //     }}
    //   /> 
    <div></div>
  );
}



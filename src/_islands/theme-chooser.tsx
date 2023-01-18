import React from 'react';
import { useMounted } from '../_includes/use-mounted';
type ThemeSwitchProps = {
  lite?: boolean;
};

const OPTIONS = [
  { key: "light", name: "Light" },
  { key: "dark", name: "Dark" },
  { key: "system", name: "System" },
];

export default function ThemeSwitch({ lite }) {
//   const { setTheme, resolvedTheme, theme = "" } = useTheme();
  const mounted = useMounted();
//   const IconToUse = mounted && resolvedTheme === "dark" ? MoonIcon : SunIcon;
  return (
    <div>
      hi there@
    </div>
  );
}


{/* <Select
        title="Change theme"
        options={OPTIONS}
        onChange={(option) => {
          setTheme(option.key);
        }}
        selected={{
          key: theme,
          name: (
            <div className="nx-flex nx-items-center nx-gap-2 nx-capitalize">
              <IconToUse />
              <span className={lite ? "md:nx-hidden" : ""}>
                {mounted ? theme : "light"}
              </span>
            </div>
          ),
        }}
      /> */}
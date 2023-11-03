import { useState } from 'react';

export const useThemeStore = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme(!darkTheme);

  return { darkTheme, toggleTheme };
};

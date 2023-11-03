import { useState } from 'react';

export const useTheme = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => setDarkTheme(!darkTheme);

  return { darkTheme, toggleTheme };
};

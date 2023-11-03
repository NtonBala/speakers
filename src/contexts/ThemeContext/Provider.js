import { ThemeContext } from './context';
import { useThemeStore } from './store';

export const ThemeProvider = ({ children }) => {
  const store = useThemeStore();

  return <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>;
};

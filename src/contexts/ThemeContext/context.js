import { createContext } from 'react';
import { useDefinedContext } from '../../hooks/useDefinedContext';

export const ThemeContext = createContext(undefined);

export const useThemeContext = () => useDefinedContext(ThemeContext);

import { useThemeContext } from '../../contexts/ThemeContext';

export default function DemoUseContext() {
  const { theme, setTheme } = useThemeContext();
  return (
    <div className="container">
      <h1>The Theme is: {theme}</h1>
      <hr />
      <button
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark');
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
}

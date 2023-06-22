import Layout from './components/layout/Layout';
import { ThemeProvider } from './contexts/ThemeContext';

const App = ({ url }) => {
  return (
    <ThemeProvider>
      <Layout url={url} />
    </ThemeProvider>
  );
};

export default App;

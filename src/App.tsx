import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Dashboard} from './components/Dashboard';
import {AppLayout} from './components/Layout';
import {defaultTheme} from './ui-kit/theme/theme';
import './ui-kit/fonts/fonts.css';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppLayout>
        <Dashboard />
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;

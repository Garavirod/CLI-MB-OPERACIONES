import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

import Container from './componentes/SideBar/Container';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container/>
    </ThemeProvider>
  );
}

export default App;

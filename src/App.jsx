import React from 'react';
import SideBar from './componentes/SideBar/SideBar';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import Lista from './componentes/SideBar/Lista';

import Container from './componentes/SideBar/Container';
import Routes from './Routes';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container/>
    </ThemeProvider>
  );
}

export default App;

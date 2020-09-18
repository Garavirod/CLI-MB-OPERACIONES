import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';

import Container from './componentesOperaciones/SideBar/Container';
import Routes from './RoutesOperaciones';
import { isLogin, hasRole } from './functions';

function App(props) {
  
  if(isLogin() && hasRole(localStorage.getItem('usertoken'))==='Operaciones')  
  return (
    <ThemeProvider theme={theme}>
      <Container/>
    </ThemeProvider>
  );
  else 
  return (
    <ThemeProvider theme={theme}>
      <Routes/>
    </ThemeProvider>
  );


 
}

export default App;
import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Header from './components/Header';
import Forms from './components/Checkout';
import { Container,Button, Typography } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


const sections = [
  { title: 'Sección 1', url: '#' },
  { title: 'Sección 2', url: '#' },
  { title: 'Gestion de operaciones', url: '/operaciones' },
  { title: 'Sección 4', url: '#' },
  { title: 'Sección 5', url: '#' },
  { title: 'Sección 6', url: '#' },
  { title: 'Sección 7', url: '#' },
  { title: 'Sección 8', url: '#' },
  { title: 'Sección 9', url: '#' },
  { title: 'Sección 10', url: '#' },
];

function App() {
  return (
    <div >
      <Router>
        {/* <Navbar/> */}
        <Header title="Metrobús" sections={sections} />
        <Switch>
          <Route path='/operaciones' component={Menu}/>

          <Route path='/formulario' component={Forms}/>
        </Switch>        
      </Router>
    </div>
  );
}

export default App;

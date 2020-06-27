import React from 'react';
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import { Container,Button, Typography } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <div >
      <Router>
        {/* <Navbar/> */}
        <Switch>
          <Route path='/' component={Menu}/>
        </Switch>        
      </Router>
    </div>
  );
}

export default App;

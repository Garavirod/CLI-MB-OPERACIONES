import React from 'react';
import Navbar from './components/Navbar';
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
      <Navbar/>
    </div>
  );
}

export default App;

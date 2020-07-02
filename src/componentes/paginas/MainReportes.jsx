import React from 'react';
import Container from '@material-ui/core/Container';
import Reportes from './Reportes';
import Header from './Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
  } from "react-router-dom";


const sections = [
    { title: 'Apoyos', url: '/reportes/apoyos' },
    { title: 'Incumplimientos', url: '/reportes/incumplimientos' },
    { title: 'Deducciones', url: '/reportes/deducciones' },
    { title: 'Afectaciones', url: '/reportes/afectaciones' },
    { title: 'Rsumen', url: '/reportes' },
    { title: 'Deducciones', url: '/reportes' },
    { title: 'Afectaciones', url: '/reportes' },
    { title: 'Rsumen', url: '/reportes' },



  ];

const MainReportes = ()=>{
    return (
        <Container maxWidth="lg" fixed>
        <Router>
            <Header title="Reportes" sections={sections} />
            <Switch>
                <Route path='/reportes/apoyos' component={Reportes}/>                
            </Switch>        
       </Router>
        </Container>
    )
}

export default MainReportes;
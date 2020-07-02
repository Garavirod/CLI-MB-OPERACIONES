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
    { title: 'Reportes', url: '/reportes/' },
    { title: 'Apoyos', url: '/reportes/apoyos' },
    { title: 'Incumplimientos', url: '/reportes/incumplimientos' },
    { title: 'Afectaciones', url: '/reportes/afectaciones' },
    { title: 'Deducciones', url: '/reportes/deducciones' },
    { title: 'Rsumen 1', url: '/reportes' },
    { title: 'Rsumen 2', url: '/reportes' },
  ];

  const apoyos = [
    //   createData('23-12-19', 21, 143, '23:12','TEPALCATES','APOYO'),
    {fecha:'23-12-19', corrida:21, economico:345, hora:'12:43', lugar:'TEPALCATES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
    {fecha:'23-12-19', corrida:21, economico:345, hora:'12:43', lugar:'TEPALCATES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
    {fecha:'23-12-19', corrida:21, economico:345, hora:'12:43', lugar:'TEPALCATES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
    {fecha:'23-12-19', corrida:21, economico:345, hora:'12:43', lugar:'TEPALCATES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
    {fecha:'23-12-19', corrida:21, economico:345, hora:'12:43', lugar:'TEPALCATES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
    {fecha:'23-12-19', corrida:21, economico:345, hora:'12:43', lugar:'TEPALCATES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
    {fecha:'23-12-19', corrida:21, economico:345, hora:'12:43', lugar:'TEPALCATES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
    {fecha:'23-12-19', corrida:21, economico:345, hora:'12:43', lugar:'TEPALCATES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
    {fecha:'23-12-19', corrida:21, economico:345, hora:'12:43', lugar:'TEPALCATES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
    {fecha:'23-12-19', corrida:21, economico:345, hora:'12:43', lugar:'TEPALCATES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
    {fecha:'23-12-19', corrida:21, economico:345, hora:'12:43', lugar:'TEPALCATES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
    {fecha:'23-12-19', corrida:21, economico:345, hora:'12:43', lugar:'TEPALCATES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
    
    ];

    const afectaciones = [
        //   createData('23-12-19', 21, 143, '23:12','TEPALCATES','APOYO'),
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        
    ];

    const incumplimientos = [
        //   createData('23-12-19', 21, 143, '23:12','TEPALCATES','APOYO'),
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'APOYO', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        
    ];

    

const MainReportes = ()=>{
    return (
        <Container maxWidth="lg" fixed>
        <Router>
            <Header title="Reportes" sections={sections} />
            <Switch>                
                <Route path='/reportes/apoyos'>
                    <Reportes title="Apoyos" data={apoyos}/>
                </Route> 
                <Route path='/reportes/afectaciones'>
                    <Reportes title="Afectaciones" data={afectaciones}/>
                </Route> 
                <Route path='/reportes/incumplimientos'>
                    <Reportes title="Incumplimientos" data={incumplimientos}/>
                </Route>
                <Route path='/reportes/'>
                    <h5>Bienvendo a la sección de reportes</h5>
                    <p>
                        En esta sección podrá visualizar los datos involucrados en los fromatos de control de servicios, bitacora de incorpoeraciones y entre ontros.
                        asi como también descargar los fromatos en PDF.
                        
                    </p>
                </Route>                 
            </Switch>        
       </Router>
        </Container>
    )
}

export default MainReportes;
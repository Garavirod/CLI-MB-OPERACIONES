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
    { title: 'Reglas (RO)', url: '/reportes/reglas' },
    // { title: 'Rsumen 2', url: '/reportes' },
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
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'AFECTACIÓN AJUSTE (MARCHA)', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'AFECTACIÓN AJUSTE (MARCHA)', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'AFECTACIÓN AJUSTE (MARCHA)', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'AFECTACIÓN AJUSTE (MARCHA)', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'AFECTACIÓN AJUSTE (MARCHA)', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'AFECTACIÓN AJUSTE (MARCHA)', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'AFECTACIÓN AJUSTE (MARCHA)', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'AFECTACIÓN AJUSTE (MARCHA)', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'AFECTACIÓN AJUSTE (MARCHA)', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'AFECTACIÓN AJUSTE (MARCHA)', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'AFECTACIÓN AJUSTE (MARCHA)', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-02-19', corrida:21, economico:345, hora:'12:43', lugar:'INDIOS VERDES',descripcion:'AFECTACIÓN AJUSTE (MARCHA)', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        
    ];

    const incumplimientos = [
        //   createData('23-12-19', 21, 143, '23:12','TEPALCATES','APOYO'),
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'FALTA DE UNIDAD PVI-1', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'FALTA DE UNIDAD PVI-1', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'FALTA DE UNIDAD PVI-1', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'FALTA DE UNIDAD PVI-1', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'FALTA DE UNIDAD PVI-1', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'FALTA DE UNIDAD PVI-1', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'FALTA DE UNIDAD PVI-1', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'FALTA DE UNIDAD PVI-1', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'FALTA DE UNIDAD PVI-1', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'FALTA DE UNIDAD PVI-1', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'FALTA DE UNIDAD PVI-1', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'09-12-19', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'FALTA DE UNIDAD PVI-1', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        
    ];

    const deducciones = [
        //   createData('23-12-19', 21, 143, '23:12','TEPALCATES','APOYO'),
        {fecha:'15-10-18', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'UNIDAD VARADA', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-10-18', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'UNIDAD VARADA', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-10-18', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'UNIDAD VARADA', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-10-18', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'UNIDAD VARADA', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-10-18', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'UNIDAD VARADA', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-10-18', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'UNIDAD VARADA', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-10-18', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'UNIDAD VARADA', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-10-18', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'UNIDAD VARADA', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-10-18', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'UNIDAD VARADA', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-10-18', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'UNIDAD VARADA', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-10-18', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'UNIDAD VARADA', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        {fecha:'15-10-18', corrida:21, economico:345, hora:'12:43', lugar:'Dr. Galvez',descripcion:'UNIDAD VARADA', infrome:'', total:23.32, validar:'ok', obs:'Ninguna'},
        
    ];

    const reglas = [
        //   createData('23-12-19', 21, 143, '23:12','TEPALCATES','APOYO'),
        {numRegla:'42-24', regla:'Cambiar la ruta de sus recorridos en la autorización de METROBÚS', deduc:1, referencia:'Definidos en el esquema operativo', rubro:'ccm'},
        {numRegla:'42-24', regla:'Cambiar la ruta de sus recorridos en la autorización de METROBÚS', deduc:1, referencia:'Definidos en el esquema operativo', rubro:'ccm'},
        {numRegla:'42-24', regla:'Cambiar la ruta de sus recorridos en la autorización de METROBÚS', deduc:1, referencia:'Definidos en el esquema operativo', rubro:'ccm'},
        {numRegla:'42-24', regla:'Cambiar la ruta de sus recorridos en la autorización de METROBÚS', deduc:1, referencia:'Definidos en el esquema operativo', rubro:'ccm'},
        {numRegla:'42-24', regla:'Cambiar la ruta de sus recorridos en la autorización de METROBÚS', deduc:1, referencia:'Definidos en el esquema operativo', rubro:'ccm'},
        {numRegla:'42-24', regla:'Cambiar la ruta de sus recorridos en la autorización de METROBÚS', deduc:1, referencia:'Definidos en el esquema operativo', rubro:'ccm'},
        {numRegla:'42-24', regla:'Cambiar la ruta de sus recorridos en la autorización de METROBÚS', deduc:1, referencia:'Definidos en el esquema operativo', rubro:'ccm'},
        {numRegla:'42-24', regla:'Cambiar la ruta de sus recorridos en la autorización de METROBÚS', deduc:1, referencia:'Definidos en el esquema operativo', rubro:'ccm'},
        {numRegla:'42-24', regla:'Cambiar la ruta de sus recorridos en la autorización de METROBÚS', deduc:1, referencia:'Definidos en el esquema operativo', rubro:'ccm'},
        {numRegla:'42-24', regla:'Cambiar la ruta de sus recorridos en la autorización de METROBÚS', deduc:1, referencia:'Definidos en el esquema operativo', rubro:'ccm'},
        {numRegla:'42-24', regla:'Cambiar la ruta de sus recorridos en la autorización de METROBÚS', deduc:1, referencia:'Definidos en el esquema operativo', rubro:'ccm'},
        {numRegla:'42-24', regla:'Cambiar la ruta de sus recorridos en la autorización de METROBÚS', deduc:1, referencia:'Definidos en el esquema operativo', rubro:'ccm'},
        
    ];
    

const MainReportes = ()=>{
    return (
        <Container maxWidth="md" fixed>
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
                <Route path='/reportes/reglas'>
                    <Reportes title="Reglas" data={reglas}/>
                </Route>
                <Route path='/reportes/deducciones'>
                    <Reportes title="Deducciones" data={deducciones}/>
                </Route>
                <Route path='/reportes/'>
                    <br/><br/>
                    <h5>Bienvenido a la sección de reportes</h5>
                    <br/><br/>
                    <p>
                        En esta sección podrá visualizar los datos involucrados en los formatos, tales como:  control de servicios, bitácora de incorporaciones y desincorporaciones entre otros.
                        así como también descargar los formatos en PDF.
                        
                    </p>
                </Route>                 
            </Switch>        
       </Router>
        </Container>
    )
}

export default MainReportes;
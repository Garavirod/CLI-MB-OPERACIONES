import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Levantamiento from './componentesOperaciones/Levantamientos/Levantamiento';
import Control from './componentesOperaciones/Bitacoras/Control';
import MainReportes from './componentesOperaciones/JustSemana/MainReportes';
import Pruebas from './componentesOperaciones/Lesionados/Pruebas';
import { MenuAccidentesScreen } from './componentesOperaciones/Lesionados/MenuAccidentesScreen';
import ListaAfectados from './componentesOperaciones/Lesionados/ListaAfectados';
import ListaDatosSeguro from "./componentesOperaciones/Lesionados/ListaDatosSeguro";
import ListaAmbulancia from "./componentesOperaciones/Lesionados/ListaAmbulancia";
import ListaTraslado from "./componentesOperaciones/Lesionados/ListaTrasladoHospital";
import { FormTraslado } from './componentesOperaciones/Lesionados/Formtraslado';
import Bienvenida from './componentesOperaciones/Main/Principal';
import { EventosForm } from './componentesOperaciones/Lesionados/EventosForm';
import Login from './componentesOperaciones/Login/Login'
import Registro from './componentesOperaciones/Login/Registro'
import Signup from './componentesOperaciones/Login/Signup'
import RecuperarC from './componentesOperaciones/Login/RecuperarC'
import PrivateRoute from './PrivateRoute'
import RootRoute from './RootRoute'
import Denied from './componentesOperaciones/Login/Denied';
import ListaEventosColisiones from "./componentesOperaciones/Colisiones/ListaEventosColisiones";
import ListaAfectadosColisiones from './componentesOperaciones/Colisiones/ListaAfectadosColisiones';
import ListaAutomovilColisiones from "./componentesOperaciones/Colisiones/ListaAutomovilColisiones";
import ListaDatosSeguroColisiones from "./componentesOperaciones/Colisiones/ListaDatosSeguroColisiones";
import ListaEconomicoColisiones from "./componentesOperaciones/Colisiones/ListaEconomicoColisiones";
import {EventosFormColisiones} from "./componentesOperaciones/Colisiones/EventosFormColisiones";
import { FormDesincorporaciones } from './componentesOperaciones/Desincorporaciones/FormulariosDesinc';
import { CerrarFolioForm } from './componentesOperaciones/Desincorporaciones/CerrarFolioForm';
import { ReportJustSemana } from './componentesOperaciones/Reportes/ReportJustSemana';
import { EditarFolio } from './componentesOperaciones/Desincorporaciones/EditaFolio';
import ColisionEmpresa from './componentesOperaciones/Estadisticas/ColisionEmpresa';

import { AccordionComponent } from './componentesOperaciones/Lesionados/AccordionComponent';
import { EstadisticasPage } from './componentesOperaciones/Estadisticas/EstadisticasPage';
import { LesionAtropPieChart } from './componentesOperaciones/Estadisticas/LesionAtropelladoPieChart';
import { ColisionesByYearChart } from './componentesOperaciones/Estadisticas/ColisionesByYearBarChart';
import { Responsables } from './componentesOperaciones/Estadisticas/Responsables';

import TestMap from './componentesOperaciones/Colisiones/TestMap';

const Routes = () => {
    return ( 
        <Router>
            <div>
                <RootRoute path="/"  exact/>
                <PrivateRoute role="Operaciones" path="/Bienvenida" component={Bienvenida} exact/>
                <PrivateRoute role="Operaciones" path="/JustificacionSemana" component={Levantamiento} exact/>
                <PrivateRoute role="Operaciones" path="/BitacoraDR" component={FormDesincorporaciones} exact/>
                <PrivateRoute role="Operaciones" path="/ControlDeServicios" component={Control} exact/>
                <PrivateRoute role="Operaciones" path='/pruebas' component={Pruebas}exact/> 
                <PrivateRoute role="Operaciones" path='/eventos/' component={AccordionComponent}exact/>                              
                <PrivateRoute role="Operaciones" path='/MenuAccidentes/' component={MenuAccidentesScreen}exact/>                                              
                <PrivateRoute role="Operaciones" exact path="/afectados/:idEvento" component={ListaAfectados} />                                               
                <PrivateRoute role="Operaciones" exact path="/ambulancias/:idEvento" component={ListaAmbulancia} />                                               
                <PrivateRoute role="Operaciones" exact path="/traslados/:idEvento" component={ListaTraslado} />                                                                                                            
                <PrivateRoute role="Operaciones" exact path="/seguros/:idEvento" component={ListaDatosSeguro} />                                                                                                            
                <PrivateRoute role="Operaciones" exact path="/lesiones-form" component={EventosForm} />                                                                                                            
                <PrivateRoute role="Operaciones" exact path="/add-register-traslado/:idAfectado/:idEvento" component={FormTraslado} />
                {/* COLISIONES */}
                <PrivateRoute role="Operaciones" path='/eventosColisiones/' component={ListaEventosColisiones}exact />
                <PrivateRoute role="Operaciones" path='/map' component={TestMap}exact />

                {/*<PrivateRoute role="Operaciones" exact path="/add-registerColisiones/:idEvento" component={AddRegisterEventColisiones}/>*/}
                
                <PrivateRoute role="Operaciones" exact path="/afectadosColisiones/:idEvento" component={ListaAfectadosColisiones}/>
                <PrivateRoute role="Operaciones" exact path="/automovilColisiones/:idEvento" component={ListaAutomovilColisiones}/>
                <PrivateRoute role="Operaciones" exact path="/segurosColisiones/:idEvento" component={ListaDatosSeguroColisiones}/>
                <PrivateRoute role="Operaciones" exact path="/colisiones-form" component={EventosFormColisiones}/>
                <PrivateRoute role="Operaciones" exact path="/economicoColisiones/:idEvento" component={ListaEconomicoColisiones}/>
                
                {/*charts */}
                <PrivateRoute role="Operaciones" exact path="/colision-empresa-chart" component={ColisionEmpresa}/>
                <PrivateRoute role="Operaciones" exact path="/responsables-chart" component={Responsables}/>
                
                {/* DESINCORPORACIONES */}
                <PrivateRoute role="Operaciones" exact path="/cerrar-folio" component={CerrarFolioForm}/>
                {/* JUST SEMANA*/}
                <PrivateRoute role="Operaciones" path='/reportes' component={ReportJustSemana}/>
                <PrivateRoute role="Operaciones" path='/editar-folio' component={EditarFolio}/>
                {/* ESTADÍSTICAS */}
                <PrivateRoute role="Operaciones" path="/estadisticas" component={EstadisticasPage}/>
                <PrivateRoute role="Operaciones" path="/lesionados-atropellados-chart" component={LesionAtropPieChart}/>                
                <PrivateRoute role="Operaciones" path="/colisiones-by-year" component={ColisionesByYearChart}/>                                
                {/* LOGIN */}
                <Route path="/denied" component={Denied} exact/>
                <Route path="/RecuperarC" component={RecuperarC} exact/>
                <Route path="/SignUp" component={Signup} exact/>
                <Route path="/login" component={Login} exact/>
                <Route path="/registro" component={Registro} exact />                                                                                                            
            </div>
        </Router>
     );
}
 
export default Routes;
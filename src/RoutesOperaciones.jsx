import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Levantamiento from './componentesOperaciones/Levantamientos/Levantamiento';
import Control from './componentesOperaciones/Bitacoras/Control';
import MainReportes from './componentesOperaciones/JustSemana/MainReportes';
import Pruebas from './componentesOperaciones/Lesionados/Pruebas';
import { MenuAccidentesScreen } from './componentesOperaciones/Lesionados/MenuAccidentesScreen';
import { AddRegisterEvent } from './componentesOperaciones/Lesionados/AddRegisterEvent';
import ListaAfectados from './componentesOperaciones/Lesionados/ListaAfectados';
import ListaDatosSeguro from "./componentesOperaciones/Lesionados/ListaDatosSeguro";
import ListaAmbulancia from "./componentesOperaciones/Lesionados/ListaAmbulancia";
import ListaTraslado from "./componentesOperaciones/Lesionados/ListaTrasladoHospital";
import { FormTraslado } from './componentesOperaciones/Lesionados/Formtraslado';
import Bienvenida from './componentesOperaciones/Main/Principal';
import { EventosScreen } from './componentesOperaciones/Lesionados/EventosScreen';
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
import {EventosFormColisiones} from "./componentesOperaciones/Colisiones/EventosFormColisiones";
import { FormDesincorporaciones } from './componentesOperaciones/Desincorporaciones/FormulariosDesinc';
import { CerrarFolioForm } from './componentesOperaciones/Desincorporaciones/CerrarFolioForm';
import { ReportJustSemana } from './componentesOperaciones/Reportes/ReportJustSemana';
import { EditarFolio } from './componentesOperaciones/Desincorporaciones/EditaFolio';
const Routes = () => {
    return ( 
        <Router>
            <div>
                <RootRoute path="/"  exact/>
                <PrivateRoute role="Operaciones" path="/Bienvenida" component={Bienvenida} exact/>
                <PrivateRoute role="Operaciones" path="/JustificacionSemana" component={Levantamiento} exact/>
                <PrivateRoute role="Operaciones" path="/BitacordaDR" component={FormDesincorporaciones} exact/>
                <PrivateRoute role="Operaciones" path="/ControlDeServicios" component={Control} exact/>
                <PrivateRoute role="Operaciones" path='/pruebas' component={Pruebas}exact/> 
                <PrivateRoute role="Operaciones" path='/eventos/' component={EventosScreen}exact/>                              
                <PrivateRoute role="Operaciones" path='/MenuAccidentes/' component={MenuAccidentesScreen}exact/>
                <PrivateRoute role="Operaciones" exact path="/add-register/:idEvento" component={AddRegisterEvent} />                                               
                <PrivateRoute role="Operaciones" exact path="/afectados/:idEvento" component={ListaAfectados} />                                               
                <PrivateRoute role="Operaciones" exact path="/ambulancias/:idEvento" component={ListaAmbulancia} />                                               
                <PrivateRoute role="Operaciones" exact path="/traslados/:idEvento" component={ListaTraslado} />                                                                                                            
                <PrivateRoute role="Operaciones" exact path="/seguros/:idEvento" component={ListaDatosSeguro} />                                                                                                            
                <PrivateRoute role="Operaciones" exact path="/lesiones-form" component={EventosForm} />                                                                                                            
                <PrivateRoute role="Operaciones" exact path="/add-register-traslado/:idAfectado/:idEvento" component={FormTraslado} />
                {/* COLISIONES */}
                <PrivateRoute role="Operaciones" path='/eventosColisiones/' component={ListaEventosColisiones}exact />
                
                {/*<PrivateRoute role="Operaciones" exact path="/add-registerColisiones/:idEvento" component={AddRegisterEventColisiones}/>*/}
                
                <PrivateRoute role="Operaciones" exact path="/afectadosColisiones/:idEvento" component={ListaAfectadosColisiones}/>
                <PrivateRoute role="Operaciones" exact path="/automovilColisiones/:idEvento" component={ListaAutomovilColisiones}/>
                <PrivateRoute role="Operaciones" exact path="/segurosColisiones/:idEvento" component={ListaDatosSeguroColisiones}/>
                <PrivateRoute role="Operaciones" exact path="/colisiones-form" component={EventosFormColisiones}/>
                {/* DESINCORPORACIONES */}
                <PrivateRoute role="Operaciones" exact path="/cerrar-folio" component={CerrarFolioForm}/>
                {/* JUST SEMANA*/}
                <PrivateRoute role="Operaciones" path='/reportes' component={ReportJustSemana}/>
                <PrivateRoute role="Operaciones" path='/editar-folio' component={EditarFolio}/>
               

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
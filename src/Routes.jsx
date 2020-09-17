import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Levantamiento from './componentes/Levantamientos/Levantamiento';
import Control from './componentes/Bitacoras/Control';
import BitacoraDR from './componentes/Bitacoras/BitacoraDR';
import MainReportes from './componentes/JustSemana/MainReportes';
import Pruebas from './componentes/Lesionados/Pruebas';
import { MenuAccidentesScreen } from './componentes/Lesionados/MenuAccidentesScreen';
import { AddRegisterEvent } from './componentes/Lesionados/AddRegisterEvent';
import { AddRegisterEventColisiones } from './componentes/Colisiones/AddRegisterEventColisiones';
import ListaAfectados from './componentes/Lesionados/ListaAfectados';
import ListaAfectadosColisiones from './componentes/Colisiones/ListaAfectadosColisiones';
import ListaDatosSeguro from "./componentes/Lesionados/ListaDatosSeguro";
import ListaAmbulancia from "./componentes/Lesionados/ListaAmbulancia";
import ListaTraslado from "./componentes/Lesionados/ListaTrasladoHospital";
import { FormTraslado } from './componentes/Lesionados/Formtraslado';
import Bienvenida from './componentes/Main/Principal';
import { EventosScreen } from './componentes/Lesionados/EventosScreen';
import { EventosForm } from './componentes/Lesionados/EventosForm';
import { EventosScreenColisiones } from './componentes/Colisiones/EventosScreenColisiones';
import { EventosFormColisiones } from './componentes/Colisiones/EventosFormColisiones';
import Colisiones from './componentes/Colisiones/Colisiones';
import ListaDatosSeguroColisiones from './componentes/Colisiones/ListaDatosSeguroColisiones';
const Routes = () => {
    return ( 
        <Router>
            <div>
            <hr/>
                <Route path="/" component={Bienvenida} exact>
                </Route>
                <Route path="/JustificacionSemana" component={Levantamiento} exact>
                </Route>
                <Route path="/BitacordaDR" component={BitacoraDR} exact>
                </Route>
                <Route path="/ControlDeServicios" component={Control} exact>
                </Route>
                <Route path='/reportes/' component={MainReportes}/>
                <Route path='/pruebas' component={Pruebas}exact>
                </Route> 
                <Route path='/eventos/' component={EventosScreen}exact>
                </Route> 
                <Route path='/eventosColisiones/' component={EventosScreenColisiones}exact>
                </Route>                
                <Route path='/MenuAccidentes/' component={MenuAccidentesScreen}exact>
                </Route>
                <Route exact path="/add-register/:idEvento" component={AddRegisterEvent} />    
                <Route exact path="/add-registerColisiones/:idEvento" component={AddRegisterEventColisiones} />                                              
                <Route exact path="/afectados/:idEvento" component={ListaAfectados} />                                               
                <Route exact path="/ambulancias/:idEvento" component={ListaAmbulancia} />                                               
                <Route exact path="/traslados/:idEvento" component={ListaTraslado} />                                                                                                            
                <Route exact path="/seguros/:idEvento" component={ListaDatosSeguro} />                                                                                                            
                <Route exact path="/lesiones-form" component={EventosForm} />                                                                                                            
                <Route exact path="/add-register-traslado/:idAfectado/:idEvento" component={FormTraslado} />  

                <Route exact path="/colisiones-form" component={EventosFormColisiones} />         
                <Route exact path="/colisionesprueba" component={Colisiones} />  
                <Route exact path="/afectadosColisiones/:idEvento" component={ListaAfectadosColisiones} />   
                <Route exact path="/segurosColisiones/:idEvento" component={ListaDatosSeguroColisiones} />                                                                                                  
            </div>
        </Router>
     );
}
 
export default Routes;
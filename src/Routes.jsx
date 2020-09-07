import React from 'react'
import {BrowserRouter as Router,
Switch,
Route,
Link,
withRouter} from 'react-router-dom'
import Levantamiento from './componentes/paginas/Levantamiento';
import Control from './componentes/paginas/Control';
import BitacoraDR from './componentes/paginas/BitacoraDR';
import Principal from './componentes/paginas/Principal';
// import Reportes from './componentes/paginas/Reportes';
import MainReportes from './componentes/paginas/MainReportes';
import Pruebas from './componentes/paginas/Pruebas';
import MenuAccidentes from './componentes/paginas/MenuAccidentes';
import Lesionados from './componentes/paginas/Lesionados';
import Colisiones from './componentes/paginas/Colisiones';
import { AddRegisterEvent } from './componentes/paginas/AddRegisterEvent';
import ListaAfectados from './componentes/paginas/ListaAfectados';
import ListaDatosSeguro from "./componentes/paginas/ListaDatosSeguro";
import ListaAmbulancia from "./componentes/paginas/ListaAmbulancia";
import ListaTraslado from "./componentes/paginas/ListaTrasladoHospital";
import { FormTraslado } from './componentes/paginas/Formtraslado';

const Routes = () => {
    return ( 
        <Router>
            <div>
            <hr/>
                <Route path="/" component={Principal} exact>
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
                <Route path='/lesionados-form/' component={Lesionados}exact>
                </Route> 
                <Route path='/colisiones-form/' component={Colisiones}exactç>
                </Route>                
                <Route path='/MenuAccidentes/' component={MenuAccidentes}exact>
                </Route>
                <Route exact path="/add-register/:idEvento" component={AddRegisterEvent} />                                               
                <Route exact path="/afectados/:idEvento" component={ListaAfectados} />                                               
                <Route exact path="/ambulancias/:idEvento" component={ListaAmbulancia} />                                               
                <Route exact path="/traslados/:idEvento" component={ListaTraslado} />                                                                                                            
                <Route exact path="/seguros/:idEvento" component={ListaDatosSeguro} />                                                                                                            
                <Route exact path="/add-register-traslado/:idAfectado/:idEvento" component={FormTraslado} />                                                                                                            
            </div>
        </Router>
     );
}
 
export default Routes;
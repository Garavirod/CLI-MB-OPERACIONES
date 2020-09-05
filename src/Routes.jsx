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
import LyAv2 from './componentes/paginas/LyAv2';
import { AddRegisterEvent } from './componentes/paginas/AddRegisterEvent';

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
                <Route path='/lesionados/' component={Lesionados}exact>
                </Route> 
                <Route path='/colisiones/' component={Colisiones}exactç>
                </Route>
                <Route path='/lesionadosv2/' component={LyAv2}exactç>
                </Route>
                <Route path='/MenuAccidentes/' component={MenuAccidentes}exact>
                </Route>
                <Route exact path="/add-register/:idEvento" component={AddRegisterEvent} />                                               
            </div>
        </Router>
     );
}
 
export default Routes;
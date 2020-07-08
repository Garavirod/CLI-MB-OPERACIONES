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
import Atropellados from './componentes/paginas/Atropellados';
import MenuAccidentes from './componentes/paginas/MenuAccidentes';
import Lesionados from './componentes/paginas/Lesionados';
import Colisiones from './componentes/paginas/Colisiones';
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
                <Route path='/atropellados/' component={Atropellados}exact>
                </Route> 
                <Route path='/lesionados/' component={Lesionados}exact>
                </Route> 
                <Route path='/colisiones/' component={Colisiones}exactç>
                </Route>
                <Route path='/MenuAccidentes/' component={MenuAccidentes}exact>
                </Route>                                                 
            </div>
        </Router>
     );
}
 
export default Routes;
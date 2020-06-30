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
                
            </div>
        </Router>
     );
}
 
export default Routes;
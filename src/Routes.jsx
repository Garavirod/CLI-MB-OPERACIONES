import React from 'react'
import {BrowserRouter as Router,
Switch,
Route,
Link,
withRouter} from 'react-router-dom'
import Levantamiento from './componentes/paginas/Levantamiento';
import Control from './componentes/paginas/Control';
import BitacoraDR from './componentes/paginas/BitacoraDR';
const Routes = () => {
    return ( 
        <Router>
            <div>
            <hr/>
                <Route path="/" exact={true} />
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
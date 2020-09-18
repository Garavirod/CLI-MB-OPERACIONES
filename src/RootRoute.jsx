import React from 'react'
import {
Route,
Redirect} from 'react-router-dom'
import { isLogin, isRole, hasRole } from './functions';



const Routes = ({component: Component,...rest}) => {

    const path = () => {
        const role = hasRole(localStorage.getItem('usertoken'));
        if(role == "CampoE")
            return <Redirect to="/Campo/levantamientos"/>;
        if(role == "JUDE")
            return <Redirect to="/JUD/levantamientos"/>;
        if(role == "MantE")
            return <Redirect to="/Campo/levantamientos"/>;
    }
    
    return ( 
        
            <div>
                <Route {...rest} render={props => (
                    isLogin() ? path()
                    : <Redirect to="/login"/>
                )} />
                
            </div>
     );
}
 
export default Routes;

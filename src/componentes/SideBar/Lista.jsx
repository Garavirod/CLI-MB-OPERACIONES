import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';
const Lista = () => {
    return ( 
        <div>
            <Router>

            <List component="nav">
                <ListItem button>
                    <ListItemIcon>
                        <ListAltIcon/>
                        <a href="/JustificacionSemana">
                            <ListItemText primary="Justificación Semana"/>
                        </a>
                    </ListItemIcon>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <ListAltIcon/>
                        <a href="/ControlDeServicios">
                            <ListItemText primary="Control de Servicio"/>
                        </a>
                    </ListItemIcon>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <ListAltIcon/>
                        <a href="/BitacordaDR">
                            <ListItemText primary="BitacoraDR"/>
                        </a>
                    </ListItemIcon>
                </ListItem>

                
            </List>
            </Router>

            
        </div>
     );
}
 
export default Lista;
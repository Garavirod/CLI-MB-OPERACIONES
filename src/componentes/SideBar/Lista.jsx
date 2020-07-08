import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Typography, makeStyles } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch,
  } from 'react-router-dom';

  const useStyles = makeStyles((theme) => ({
    icon: {
    color: '#FFFFFF',
    marginRight: 5,
    }
    }));

const Lista = () => {
    const classes=useStyles();
    return ( 
        <div>
            <Router>

            <List component="nav">
                <ListItem button >
                    <ListItemIcon>
                        <ListAltIcon className={classes.icon}/>
                        <a href="/JustificacionSemana">
                        <ListItemText
                                    disableTypography
                                    primary={<Typography variant="h5" style={{ color: '#FFFFFF' }}>Justificación Semana</Typography>}
                                />
                        </a>
                    </ListItemIcon>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                    <ListAltIcon className={classes.icon}/>
                        <a href="/ControlDeServicios">
                        <ListItemText
                                    disableTypography
                                    primary={<Typography variant="h5" style={{ color: '#FFFFFF' }}>Control de Servicios</Typography>}
                                />
                        </a>
                    </ListItemIcon>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                    <ListAltIcon className={classes.icon}/>
                        <a href="/BitacordaDR">
                        <ListItemText
                                    disableTypography
                                    primary={<Typography variant="h5" style={{ color: '#FFFFFF' }}>Desincorporaciones</Typography>}
                                />
                        </a>
                    </ListItemIcon>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                    <ListAltIcon className={classes.icon}/>
                        <a href="/reportes">
                        <ListItemText
                                    disableTypography
                                    primary={<Typography variant="h5" style={{ color: '#FFFFFF' }}>Reportes</Typography>}
                                />
                        </a>
                    </ListItemIcon>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ListAltIcon className={classes.icon}/>
                        <a href="/MenuAccidentes">
                        <ListItemText
                                    disableTypography
                                    primary={<Typography variant="h5" style={{ color: '#FFFFFF' }}>Accidentes</Typography>}
                                    />
                        </a>
                    </ListItemIcon>
                </ListItem>
            </List>
            </Router>

            
        </div>
     );
}
 
export default Lista;
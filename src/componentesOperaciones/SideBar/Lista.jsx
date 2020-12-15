import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText,Typography, makeStyles } from '@material-ui/core';
import ListAltIcon from '@material-ui/icons/ListAlt';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {Logout} from "../../functions";
import {
    BrowserRouter as Router,
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
                {/* <ListItem button >
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
                </ListItem> */}

                <ListItem button>
                    <ListItemIcon>
                    <ListAltIcon className={classes.icon}/>
                        <a href="/BitacoraDR">
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
                                    primary={<Typography variant="h5" style={{ color: '#FFFFFF' }}>Km realizado</Typography>}
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

                <ListItem button>
                    <ListItemIcon onClick={()=>Logout()}>
                        <ExitToAppIcon className={classes.icon}/>
                            <ListItemText
                                    disableTypography
                                    primary={<Typography variant="h5" style={{ color: '#FFFFFF' }}>Cerrar Sesion</Typography>}
                                />
                    </ListItemIcon>
                </ListItem>

            </List>
            </Router>

            
        </div>
     );
}
 
export default Lista;
import React from 'react'
import { makeStyles, Hidden} from '@material-ui/core';
import SideBar from './SideBar';
import Cajon from './Cajon';
import Control from '../paginas/BitacoraDR';
import Routes from '../../Routes';

const estilo = makeStyles(theme =>({
    root: {
        display: 'flex',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: 'white',
        padding: theme.spacing(1),
    },
}));

const Container = () => {

    const [abrir, setAbrir] = React.useState(false);

    const handleDrawerToggle = () => {
        setAbrir(!abrir)
    }

    const classes = estilo();
    return (  
        <div className={classes.root}>
            <SideBar handleDrawerToggle={handleDrawerToggle}/>
            <Hidden xsDown>
                <Cajon
                    variant="permanent"
                    open={true}
                />
            </Hidden>
            <Hidden smUp>
                <Cajon
                    variant="temporary"
                    open={abrir}
                    onClose={handleDrawerToggle}
                />
            </Hidden>
            
            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                <Routes/>
            </div>
        </div>
    );
}
 
export default Container;
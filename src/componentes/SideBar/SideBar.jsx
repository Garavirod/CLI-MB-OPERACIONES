import React from 'react'
import { AppBar, Toolbar, IconButton, Badge } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Avatar, Typography, makeStyles } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';


const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    title: {
        flexGrow: 1
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${240}px)`,
            marginLeft: 240,
            background:'#4caf50'
        },
        backgroundColor: theme.palette.error.dark,
        
    },
    badge: {
        color: theme.palette.success.main,
    },

    backMB:{
        background:'#4caf50'
    }
}))

const SideBar = (props) => {
    const classes = useStyles();
    return (
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton color="inherit" aria-label="menu"
                        className={classes.menuButton}
                        onClick={() => props.handleDrawerToggle()}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4" color="inherit" className={classes.title}>
                    JUD Operación Técnica y Estadística
                </Typography>
                <img src="/images/avatars/imagen2.png" width="240" height="50" ></img>
                
         
                    <IconButton  color="inherit">
                        <Badge className={classes.backMB} variant="dot">
                            <SaveIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </div>
    )
}

export default SideBar
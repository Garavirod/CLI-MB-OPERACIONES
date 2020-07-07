import React from 'react'
import { Avatar, Typography, makeStyles } from '@material-ui/core';

const Perfil = () => {
    
    const estilos = makeStyles(theme => ({
        root: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minHeight: 'fit-content'
        },
        avatar: {
          width: 130,
          height: 130
        },
        name: {
          marginTop: theme.spacing(1)
        },
        offset: theme.mixins.toolbar
      }));
    const classes = estilos();

    return ( 
        <div className={classes.root}>
            <Avatar
        alt="Person"
        className={classes.avatar}
        src="/images/avatars/2.jpg"
      />
      <Typography
        className={classes.name}
        style={{ color: '#FFFFFF' }}
        variant="h4"
      >
        Gabriel Gaspar 
      </Typography>
      <Typography 
      style={{ color: '#FFFFFF' }}
      variant="body2">Titular</Typography>
        </div>
     );
}
 
export default Perfil;

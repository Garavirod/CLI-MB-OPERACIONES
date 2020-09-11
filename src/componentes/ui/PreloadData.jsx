import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const PreloadData = (props) =>{
const {isVisible} = props;
 const classes = useStyles();
  return (
    <div className={classes.root} style={{visibility:isVisible}}>  
      <h5>Cargando datos ...</h5>          
      <LinearProgress color="secondary" />
    </div>
  )
};
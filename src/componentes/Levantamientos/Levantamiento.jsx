import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
	  margin: theme.spacing(1),
	  
    },
  },
}));

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       
		<h5>JUSTIFICACIÓN SEMANA </h5>
		<h6>CORREDOR EJE 1 PTE "VALLEJO"</h6>
		<br/>

    </div>
  );
}
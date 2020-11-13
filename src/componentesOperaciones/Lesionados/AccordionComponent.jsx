import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { Grid } from '@material-ui/core';
import FormPropsTextFields from './Afectado';
import { FormDatosSeguro } from './DatosSeguro';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export const  AccordionComponent =() =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Id: 12</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Fecha: 12-12-2022</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Hora: 12:00</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Incidente : Contusión</Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails className={classes.details}>
          <Grid container spacing={3}>           
            {/* Formularios */}
            <Grid item lg={9}>
                <Grid container spacing={2}>                
                    <Grid item lg={12}>
                        <FormPropsTextFields/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>                
                    <Grid item lg={12}>
                        <FormDatosSeguro/>
                    </Grid>
                </Grid>
            </Grid>
            {/* Detalles del evento */}
            <Grid item lg={3}>
                <Typography>Tipo de Incidente: </Typography>
                <Typography>Tramo: </Typography>
                <Typography>Operador: </Typography>
                <Typography>Bitácora: </Typography>
                <Typography>Descripción: </Typography>
            </Grid>           
        </Grid>          
        </AccordionDetails>
        <Divider />
        <AccordionActions>          
          <Button size="small" color="primary">
            Eliminar
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}

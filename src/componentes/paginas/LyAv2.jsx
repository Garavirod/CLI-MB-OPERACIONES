import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Accordion } from '@material-ui/core';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

import Evento from "./Evento";
import Afectado from "./Afectado";
import DatosSeguro from "./DatosSeguro";
import Ambulancia from "./Ambulancia";
import Traslado from "./TrasladoHospital";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();


  return (
    <Container component="main">

    <Card className={classes.root}>
      <CardContent>
      <Evento/>
      <Afectado/>
      </CardContent>
    </Card> 
   
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            control={<Checkbox />}
            label="Datos Seguro"
            
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            <DatosSeguro/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            control={<Checkbox />}
            label="Registrar Ambulancia"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            <Ambulancia/>
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <FormControlLabel
            aria-label="Acknowledge"
            control={<Checkbox />}
            label="Registrar Traslado a Hospital"
          />
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="textSecondary">
            <Traslado/>
          </Typography>
        </AccordionDetails>
      </Accordion>

     
    </Container>
  );
}

import React from "react";
//import { useParams, Link } from "react-router-dom";
// Accordion
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// Components
import AfectadoColisiones from "./AfectadoColisiones";
import DatosSeguroColisiones from "./DatosSeguroColisiones";
import DatosAutomovilColisiones from "./DatosAutomovilColisiones";

// Styles

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export const AddRegisterEventColisiones = (props) => {

  const {idColision} = props;
  // Using styles
  const classes = useStyles();

  // URL Param
  //const { idEvento } = useParams();

  return (
    <div>
      {/*<h4>Agregar registros al evento colisiones {idEvento}</h4>
      <Link to={"/eventosColisiones"}>Lista de eventos colisiones</Link>
      <hr />*/}
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {/* AfFECTADOS */}
            <Typography className={classes.heading}>Afectado colisiones</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <AfectadoColisiones idEvento={idColision}/>
          </AccordionDetails>
        </Accordion>
      
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            {/* Automovil */}
            <Typography className={classes.heading}>Automovil colisiones</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DatosAutomovilColisiones idEvento={idColision}/>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
              {/* SEGURO */}
            <Typography className={classes.heading}>Datos de seguro colisiones</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <DatosSeguroColisiones idEvento={idColision}/>
          </AccordionDetails>
        </Accordion> 
        {/* DESABLE */}
        {/* <Accordion disabled>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>
              Disabled Accordion
            </Typography>
          </AccordionSummary>
        </Accordion> */}
      </div>
    </div>
  );
};

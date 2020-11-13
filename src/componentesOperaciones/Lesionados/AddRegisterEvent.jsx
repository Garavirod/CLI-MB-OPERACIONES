import React from "react";
// Accordion
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// Components
import Afectado from "./Afectado";
import { FormDatosSeguro } from "./DatosSeguro";
// import DatosSeguro from "./DatosSeguro";

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

export const AddRegisterEvent = () => {
  // Using styles
  const classes = useStyles();



  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {/* AfFECTADOS */}
          <Typography className={classes.heading}>Lista de afectados</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Afectado />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          {/* TRASLADOS */}
          <Typography className={classes.heading}>Lista de traslados</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormDatosSeguro />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

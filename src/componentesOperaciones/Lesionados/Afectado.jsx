import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import {
  CustomSwalSave,
  CustomSwalError,
  CustomSwalEmptyFrom,
} from "../../functions/customSweetAlert";
import { useHookForm } from "../../hooks/hookFrom";
import { validateForm } from "../../functions/validateFrom";
import { httpPostData } from "../../functions/httpRequest";
import { Card, CardContent, Typography } from "@material-ui/core";
// Accordion
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ListaAfectados from "./ListaAfectados";
import ListaTraslado from "./ListaTrasladoHospital";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "10ch",
    },
  },

  gridRoot: {
    flexGrow: 1,
  },

  rootAcc: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function FormPropsTextFields(props) {
  const {idEvento} = props;
  const [reloadAfectado, setReloadAfectado] = useState(false);
  const classes = useStyles();

  // Objeto a mapear
  const initial_afectado = {
    sexo: "",
    edad: "",
    nombre: "",
    status: "",
  };

  // Utilizando el hook personalizado
  const [values, handleInputChange] = useHookForm(initial_afectado);

  // Desestructurando el Hook response
  const { sexo, edad, nombre, status } = values;

  

  // Valida el fromulario y de no haber campos vacios manda la infromacion al servidor
  const sendData = (e) => {
    //Evita que la petición sea mandada por defecto en GET
    e.preventDefault();
    // Url de la API
    const url = `/lesionados/registro-afectado/${idEvento}`;
    if (validateForm(values)) {
      // Petición axios, manda la data ya vlidada al url definido
      httpPostData(url, values);
      setReloadAfectado(callback=>!callback);
    } else {
      CustomSwalEmptyFrom();
    }
  };

  return (
    <Container component="main">
      <Card>
        <CardContent>
          <Typography>Agregar afectados</Typography>
          <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={sendData}
          >
            <div className={classes.gridRoot}>
              <Grid container spacing={3}>
                <Grid item lg={3}>
                  <TextField
                    id="standard"
                    label="Nombre"
                    value={nombre}
                    name="nombre"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item lg={3}>
                  <TextField
                    id="standard"
                    label="Edad"
                    value={edad}
                    name="edad"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item lg={3}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-native-select">
                      Género
                    </InputLabel>
                    <Select
                      native
                      value={sexo}
                      id="grouped-native-select"
                      name="sexo"
                      onChange={handleInputChange}
                    >
                      <option defaultValue="" />
                      <option value={1}>Masculino</option>
                      <option value={0}>Femenino</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={3}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-native-select">
                      Estado
                    </InputLabel>
                    <Select
                      native
                      value={status}
                      id="grouped-native-select"
                      name="status"
                      onChange={handleInputChange}
                    >
                      <option defaultValue="" />
                      <option value={1}>Vivo</option>
                      <option value={0}>Muerto</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    className={classes.bgPDF}
                    startIcon={<AddIcon />}
                    size="small"
                  >
                    Agregar Afectado
                  </Button>
                </Grid>
              </Grid>
            </div>
          </form>
          {/* ACCORDION */}
          <Grid container spacing={2}>
            <Grid item lg={12}>
              <div className={classes.root}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    {/* AfFECTADOS */}
                    <Typography className={classes.heading}>
                      Lista de afectados
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ListaAfectados 
                      idEvento={idEvento} 
                      reloadAfectado={reloadAfectado}
                      setReloadAfectado={setReloadAfectado}
                    />
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    {/* TRASLADOS */}
                    <Typography className={classes.heading}>
                      Lista de traslados
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <ListaTraslado 
                      idEvento={idEvento} 
                      reloadAfectado={reloadAfectado}
                    />
                  </AccordionDetails>
                </Accordion>
              </div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useHookForm } from "../../hooksOperaciones/hookFrom";
import { validateForm } from "../../functionsOperaciones/validateFrom";
import { CustomSwalSave, CustomSwalError, CustomSwalEmptyFrom } from "../../functionsOperaciones/customSweetAlert";

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
  // Parámetros por url
  const { idEvento } = useParams();
  // Objeto a mapear
  const initial_datosSeguroData = {
    horaArribo: "12:00",
    tiempoRespuesta: "00:00:00",
    seguro: "",
    corresponde: "",
    nombreAjustador: "",
    unidadSeguro: "",
  };

  // Usando el hook personalizado
  const [values, handleInputChange] = useHookForm(initial_datosSeguroData);

  // Desestructurando el response del hook
  const {
    horaArribo,
    tiempoRespuesta,
    seguro,
    corresponde,
    nombreAjustador,
    unidadSeguro
  } = values;

  // Valida el fromulario y de no haber campos vacios manda la infromacion al servidor
  const sendData = (e) => {
    //Evita que la petición sea mandada por defecto en GET
    e.preventDefault();
    // Url de la API
    const url = `/lesionados/registro-datosSeguro/${idEvento}`;
    if (validateForm(values)) {
      // Petición axios, manda la data ya vlidada al url definido
      axios
        .post(url, values)
        .then((res) => {
          console.log("DatosSeguro mandados", res);
          CustomSwalSave();
        })
        .catch((err) => {
          CustomSwalError();
          console.log("Hubo un error al guardar el datosSeguro", err);
        });
    } else {
      CustomSwalEmptyFrom();
    }
  };

  return (
    <Container component="main">      
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={sendData}
      >
        <div>
          <Grid container spacing={3}>
            <Grid item lg={4}>
              <TextField
                id="time"
                label="Hora "
                type="time"
                name="horaArribo"
                onChange={handleInputChange}
                value={horaArribo}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                id="standard"
                label="Tiempo Respuesta"
                value={tiempoRespuesta}
                name="tiempoRespuesta"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                id="standard"
                label="Seguro"
                value={seguro}
                name="seguro"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                id="standard"
                label="Corresponde"
                value={corresponde}
                name="corresponde"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                id="standard"
                label="Nombre Ajustador"
                value={nombreAjustador}
                name="nombreAjustador"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item lg={4}>
              <TextField
                id="standard"
                label="Unidad Seguro"
                value={unidadSeguro}
                name="unidadSeguro"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="red"
                className={classes.bgPDF}
                startIcon={<AddIcon />}
              >
                Agregar Seguro
              </Button>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Link to={`/seguros/${idEvento}`}> ver registros</Link>
            </Grid>
          </Grid>
        </div>
      </form>
    </Container>
  );
}

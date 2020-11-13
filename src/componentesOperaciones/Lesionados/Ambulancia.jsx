import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useParams, Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useHookForm } from "../../hooks/hookFrom";
import { validateForm } from "../../functions/validateFrom";
import { httpPostData } from "../../functions/httpRequest";
import { CustomSwalSave, CustomSwalError, CustomSwalEmptyFrom } from "../../functions/customSweetAlert";
import { Card, CardContent, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  div: {
    margin: "auto",
    textAlign: "center",
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "15ch",
    },
  },
}));

export const FormDatosAmbulancia = () =>{
  const classes = useStyles();
  const { idAfectado, idEvento } = useParams();
  // Objeto a mapear
  const initial_ambulancia = {
    tiempoLLegada: "12:00", // hora
    tiempoRespuesta: "00:00:00",
    ambulancia: "",
    ecoPlaca: "",
    paramedico: "",
    diagnostico: "",
    idAfectado: idAfectado,
  };

  // Hook personalizado
  const [values,handleInputChange]=useHookForm(initial_ambulancia);

  // Desestructurando el hook
  const {
    tiempoLLegada,
    tiempoRespuesta,
    ambulancia,
    ecoPlaca,
    paramedico,
    diagnostico
  } = values;

  console.log(values);
  
  // Valida el fromulario y de no haber campos vacios manda la infromacion al servidor
  const sendData = (e) => {
    //Evita que la petición sea mandada por defecto en GET
    e.preventDefault();
    // Url de la API
    const url = `/lesionados/registro-datosAmbulancia/${idEvento}`;
    if (validateForm(values)) {
      // Petición axios genérica por url y data
      const success = httpPostData(url, values);
      if(success===true)
        CustomSwalSave(); 
      else
        CustomSwalError(); 
    } else {
      CustomSwalEmptyFrom();
    }
  };

  return (
    <div className={classes.root}>
        <Container component="main">
          <Card>
            <CardContent>
              <Typography>Agregar ambulancia</Typography>
            <form
            className={classes.form}
            noValidate
            autoComplete="off"
            onSubmit={sendData}
          >
            <Grid container spacing={3}>
            <Grid item xs={12} lg={4}>
            <TextField
                id="time"
                label="Hora Llegada"
                type="time"
                name="tiempoLLegada"
                onChange={handleInputChange}
                value={tiempoLLegada}
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  step: 300, // 5 min
                }}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
            <TextField
                id="standard"
                label="Tiempo Respuesta"
                value={tiempoRespuesta}
                name="tiempoRespuesta"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
            <TextField
                id="standard"
                label="Ambulancia"
                value={ambulancia}
                name="ambulancia"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
            <TextField
                id="standard"
                name="ecoPlaca"
                label="Economico/Placa Ambulancia"
                value={ecoPlaca}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} lg={4}>
            <TextField
                id="standard"
                name="paramedico"
                label="Paramedico"
                value={paramedico}
                onChange={handleInputChange}
              />            
            </Grid>
            <Grid item xs={12} lg={4}>
            <TextField
                id="standard"
                name="diagnostico"
                label="Diagnostico"
                value={diagnostico}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item lg={12}>
            <Button
                type="submit"
                variant="contained"                
                className={classes.bgPDF}
                startIcon={<AddIcon />}
                size="small"
              >
                Agregar Ambulancia
              </Button>
            </Grid>
            <Grid item lg={12}>
              <Link to={`/ambulancias/${idEvento}`}> ver registros</Link>
            </Grid>
            </Grid>
          </form>
            </CardContent>
          </Card>
        </Container>
        {/* <Paper className={classes.paper}>
          <h6>Registrar ambulancia</h6>
          
        </Paper> */}
      </div>

  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import { useHookForm } from "../../hooks/hookFrom";
import { CustomSwalSave, CustomSwalError, CustomSwalEmptyFrom } from "../../functions/customSweetAlert";
import { validateForm } from "../../functions/validateFrom";
import { httpPostData } from "../../functions/httpRequest";
import { Link } from "react-router-dom";


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
      width: "25ch",
    },
  },
}));

export const EventosForm = (props) => {
  const {setRealoadEventos} = props;
  const classes = useStyles();

  // Objeto a mapear
  const initial_evento = {
    linea: "",
    estacion: "",
    fecha: "2020-12-10",
    hora: "12:00",
    tipo_incidente: "",
    incidente: "",
    descripcion: "",
    tramo: "",
    operador: "",
    bitacora: "",
    economico: "",
  };

  // Hook personalizado con el evento inicial
  const [values, handleInputChange] = useHookForm(initial_evento);

  // desestructuando el values del hook
  const {
    linea,
    estacion,
    fecha,
    hora,
    tipo_incidente,
    incidente,
    descripcion,
    tramo,
    operador,
    bitacora,
    economico,
  } = values;

  // console.log(values);
  // Valida el fromulario y de no haber campos vacios manda la infromacion al servidor
  const sendData = (e) => {

   

    //Evita que la petición sea mandada por defecto en GET
    e.preventDefault();
    // Url de la API
    const url = "/lesionados/registro-evento";    
    if (validateForm(values)) {
      // Petición axios genérica por url y data
      httpPostData(url, values);
      setRealoadEventos(callback=>!callback);                
    } else {
      CustomSwalEmptyFrom();
    }
  };

  return (
    <div className={classes.root} className="animate__animated animate__fadeInRight">
      <Grid container spacing={2}>
        {/* header */}
        <Grid item lg={12}>
            <h5>Lesionados y atropellados</h5>
            <h6>Crear evento nuevo</h6>          
        </Grid>      
        <Grid item lg={12}>
          <Paper className={classes.paper}>
            <form
              className={classes.form}
              noValidate
              autoComplete="off"
              onSubmit={sendData}
            >
              <Grid container spacing={3}>
                <Grid item lg={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-native-select">
                      Linea
                    </InputLabel>
                    <Select
                      native
                      value={linea}
                      id="grouped-native-select"
                      name="linea"
                      onChange={handleInputChange}
                    >
                      <option defaultValue="" />
                      <option value={1}>Liena 1</option>
                      <option value={0}>Linea 2</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-native-select">
                      Estacion
                    </InputLabel>
                    <Select
                      native
                      value={estacion}
                      id="grouped-native-select"
                      name="estacion"
                      onChange={handleInputChange}
                    >
                      <option defaultValue="" />
                      <option value={1}>Estacion 1</option>
                      <option value={0}>Estacion 2</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-native-select">
                      Tipo incidente
                    </InputLabel>
                    <Select
                      native
                      value={tipo_incidente}
                      id="grouped-native-select"
                      name="tipo_incidente"
                      onChange={handleInputChange}
                    >
                      <option defaultValue="" />
                      <option value={0}>Atropellado</option>
                      <option value={1}>Lesionado</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={4}>
                  <TextField
                    required
                    id="standard"
                    label="Folio Bitácora Roja"
                    value={bitacora}
                    name="bitacora"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item lg={4}>
                  <TextField
                    id="date"
                    label="Fecha"
                    name="fecha"
                    type="date"
                    onChange={handleInputChange}
                    value={fecha}
                    className={classes.textField}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item lg={4}>
                  <TextField
                    id="time"
                    label="Hora "
                    type="time"
                    name="hora"
                    onChange={handleInputChange}
                    value={hora}
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
                    name="tramo"
                    label="Tramo"
                    value={tramo}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item lg={4}>
                  <TextField
                    id="standard"
                    name="economico"
                    label="Económico"
                    value={economico}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item lg={4}>
                  <TextField
                    id="standard"
                    name="operador"
                    label="Operador"
                    value={operador}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item lg={4}>
                  <TextField
                    id="standard"
                    name="incidente"
                    label="Incidente"
                    value={incidente}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item lg={4}>
                  <TextField
                    id="standard"
                    name="descripcion"
                    label="Descripción"
                    value={descripcion}
                    onChange={handleInputChange}
                  />
                </Grid>                
                <Grid item lg={12}>
                  <Button
                    type="submit"
                    variant="contained"                    
                    className={classes.bgPDF}
                    startIcon={<AddIcon />}
                  >
                    Agregar evento
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

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

export const EventosFormColisiones = () => {
  const classes = useStyles();

  // Objeto a mapear
  const initial_evento = {
    sentido: "",
    motivo: "",
    interseccion: "",
    colonia: "",
    fecha: "",
    hora: "",
    
  };

  // Hook personalizado con el evento inicial
  const [values, handleInputChange, reset] = useHookForm(initial_evento);

  // desestructuando el values del hook
  const {
    sentido,
    motivo,
    interseccion,
    colonia,
    fecha,
    hora,
  } = values;

  console.log(values);
  // Valida el fromulario y de no haber campos vacios manda la infromacion al servidor
  const sendData = (e) => {
    //Evita que la petición sea mandada por defecto en GET
    e.preventDefault();
    // Url de la API
    const url = "/colisiones/datos-colision";    
    if (validateForm(values)) {
      // Petición axios genérica por url y data
      httpPostData(url, values)
        .then(resp =>{
            if(resp && resp.success)
            {
              CustomSwalSave();
              reset();
            }
            else
              CustomSwalError();
        });//then
      /*const success = httpPostData(url, values);
      if(success===true)
        CustomSwalSave(); 
      else
        CustomSwalError();*/         
    } else {
      CustomSwalEmptyFrom();
    }
  };

  return (
    <div className={classes.root, "animate__animated animate__fadeInRight"}>
      <Grid container spacing={2}>
        {/* header */}
        <Grid item lg={12}>
            <h5>Colisiones</h5>
            <h6>Crear evento nuevo</h6>          
        </Grid>
        <Grid item lg={12}>
          <Link to={"/eventosColisiones"}>Lista de eventos Colisiones</Link>
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
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-native-select">
                      Sentido
                    </InputLabel>
                    <Select
                      native
                      value={sentido}
                      id="grouped-native-select"
                      name="sentido"
                      onChange={handleInputChange}
                    >
                      <option defaultValue="" />
                      <option value={'Norte-Poniente'}>Norte-Poniente</option>
                      <option value={'Norte-Sur'}>Norte-Sur</option>
                      <option value={'Oeste-Poniente'}>Oeste-Poniente</option>
                      <option value={'Poniente-Norte'}>Poniente-Norte</option>
                      <option value={'Poniente-Oeste'}>Poniente-Oeste</option>
                      <option value={'Sur-Norte'}>Sur-Norte</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-native-select">
                      Motivo
                    </InputLabel>
                    <Select
                      native
                      value={motivo}
                      id="grouped-native-select"
                      name="motivo"
                      onChange={handleInputChange}
                    >
                      <option defaultValue="" />
                      <option value={'Unidad de MB choca por hacer maniobras'}>Unidad de MB choca por hacer maniobras</option>
                      <option value={'Corte de circulación de parte del particular (cuando particular invade carril de MB)'}>Corte de circulación de parte del particular (cuando particular invade carril de MB)</option>
                      <option value={'Particular se pasa el semáforo'}>Particular se pasa el semáforo </option>
                      <option value={'Alcance del particular contra unidad de MB'}>Alcance del particular contra unidad de MB</option>
                      <option value={'MB se pasa el semáforo'}>MB se pasa el semáforo</option>
                      <option value={'Alcance de unidad de MB hacia el particular'}>Alcance de unidad de MB hacia el particular</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-native-select">
                      Intersección
                    </InputLabel>
                    <Select
                      native
                      value={interseccion}
                      id="grouped-native-select"
                      name="interseccion"
                      onChange={handleInputChange}
                    >
                      <option defaultValue="" />
                      <option value={'100 Metros y Vallejo'}>100 Metros y Vallejo</option>
                      <option value={'20 De Noviembre y El Salvador'}>20 De Noviembre y El Salvador</option>
                      <option value={'5 De Febrero y San Juan De Aragón'}>5 De Febrero y San Juan De Aragón</option>
                      <option value={'5 De Febrero y Zumarraga'}>5 De Febrero y Zumarraga</option>
                      <option value={'Antonio Caso y Av. Insurgentes'}>Antonio Caso y Av. Insurgentes</option>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item lg={4}>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="grouped-native-select">
                      Colonia
                    </InputLabel>
                    <Select
                      native
                      value={colonia}
                      id="grouped-native-select"
                      name="colonia"
                      onChange={handleInputChange}
                    >
                      <option defaultValue="" />
                      <option value={'San Rafael'}>San Rafael</option>
                      <option value={'Centro'}>Centro</option>
                      <option value={'Colonia Del Valle'}>Colonia Del Valle</option>
                    </Select>
                  </FormControl>
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

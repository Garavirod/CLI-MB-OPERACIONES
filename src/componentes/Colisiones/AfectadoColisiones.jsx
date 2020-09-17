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
import { Link, useParams } from "react-router-dom";
import { CustomSwalSave, CustomSwalError, CustomSwalEmptyFrom } from "../../functions/customSweetAlert";
import { useHookForm } from "../../hooks/hookFrom";
import { validateForm } from "../../functions/validateFrom";
import { httpPostData } from "../../functions/httpRequest";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "20ch",
    },
  },

  gridRoot:{
    flexGrow: 1,
  }
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  // Parámetros del url
  const { idEvento } = useParams();

  // Objeto a mapear
  const initial_afectado = {
    sexo: "",
    tipo_lesionado: ""
  };
  
  // Utilizando el hook personalizado
  const [values, handleInputChange] = useHookForm(initial_afectado);

  // Desestructurando el Hook response
  const {
    sexo,
    tipo_lesionado
  } = values;

  console.log(values);

  // Valida el fromulario y de no haber campos vacios manda la infromacion al servidor
  const sendData = (e) => {
    //Evita que la petición sea mandada por defecto en GET
    e.preventDefault();
    // Url de la API
    const url = `/colisiones/datos-lesionado/${idEvento}`;
    if (validateForm(values)) {
      // Petición axios, manda la data ya vlidada al url definido
      const success = httpPostData(url,values);
      if(success)
        CustomSwalSave();
      else
        CustomSwalError();
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
        <div className={classes.gridRoot}>
          <Grid container spacing={3}>
            <Grid item lg={3}>
              <TextField
                id="standard"
                label="tipo_lesionado"
                value={tipo_lesionado}
                name="tipo_lesionado"
                onChange={handleInputChange}
              />
            </Grid>
            
            <Grid item lg={3}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Género</InputLabel>
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
          
            <Grid item lg={12}>
              <Button
                type="submit"
                variant="contained"                
                className={classes.bgPDF}
                startIcon={<AddIcon />}
              >
                Agregar Afectado Colisiones
              </Button>
            </Grid>
            <Grid item lg={12}>
              <p>
                Para agregar..
                <i>'registro de afectados por colision'</i>
              </p>
              <Link to={`/afectadosColisiones/${idEvento}`}>registros de afectados Colisiones</Link>
            </Grid>
          </Grid>
        </div>
      </form>
    </Container>
  );
}

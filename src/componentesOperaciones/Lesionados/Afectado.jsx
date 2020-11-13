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
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "15ch",
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
    edad: "",
    nombre: "",
    status: ""
  };
  
  // Utilizando el hook personalizado
  const [values, handleInputChange] = useHookForm(initial_afectado);

  // Desestructurando el Hook response
  const {
    sexo,
    edad,
    nombre,
    status
  } = values;

  console.log(values);

  // Valida el fromulario y de no haber campos vacios manda la infromacion al servidor
  const sendData = (e) => {
    //Evita que la petición sea mandada por defecto en GET
    e.preventDefault();
    // Url de la API
    const url = `/lesionados/registro-afectado/${idEvento}`;
    if (validateForm(values)) {
      // Petición axios, manda la data ya vlidada al url definido
      const success = httpPostData(url,values);
      if(success===true)
        CustomSwalSave();
      else
        CustomSwalError();
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
            <Grid item lg={3}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Estado</InputLabel>
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
            <Grid item lg={12}>
              <p>
                Para agregar traslados y datos de ambulancia dar clck en
                <i>'registrso de afectados'</i>
              </p>
              <Link to={`/afectados/${idEvento}`}>registros de afectados</Link>
            </Grid>
          </Grid>
        </div>
      </form>
        </CardContent>
      </Card>      
    </Container>
  );
}

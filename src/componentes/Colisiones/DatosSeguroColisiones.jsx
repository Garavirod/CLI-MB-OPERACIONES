import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useHookForm } from "../../hooks/hookFrom";
import { validateForm } from "../../functions/validateFrom";
import { CustomSwalSave, CustomSwalError, CustomSwalEmptyFrom } from "../../functions/customSweetAlert";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

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
    nombre_seguro: "",
    tipo_seguro: "",
    paga: "",
    comentarios: "",
  };

  // Usando el hook personalizado
  const [values, handleInputChange] = useHookForm(initial_datosSeguroData);

  // Desestructurando el response del hook
  const {
    nombre_seguro,
    tipo_seguro,
    paga,
    comentarios,
  } = values;

  // Valida el fromulario y de no haber campos vacios manda la infromacion al servidor
  const sendData = (e) => {
    //Evita que la petición sea mandada por defecto en GET
    e.preventDefault();
    // Url de la API
    const url = `/colisiones/datos-seguro/${idEvento}`;
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
        
        <div className={classes.gridRoot}>
          <Grid container spacing={4}>
            <Grid item lg={4}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Aseguradora</InputLabel>
                <Select
                  native
                  value={nombre_seguro}
                  id="grouped-native-select"
                  name="nombre_seguro"
                  onChange={handleInputChange}
                >
                  <option defaultValue="" />
                  <option value={'Mapfre'}>Mapfre</option>
                  <option value={'Qualitas'}>Qualitas</option>
                  <option value={'General de Seguros'}>General de Seguros</option>
                  <option value={'No Arriba'}>No Arriba</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={4}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Tipo Seguro</InputLabel>
                <Select
                  native
                  value={tipo_seguro}
                  id="grouped-native-select"
                  name="tipo_seguro"
                  onChange={handleInputChange}
                >
                  <option defaultValue="" />
                  <option value={'Unidad MB'}>Unidad MB</option>
                  <option value={'Particular'}>Particular</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={4}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Quién paga</InputLabel>
                <Select
                  native
                  value={paga}
                  id="grouped-native-select"
                  name="paga"
                  onChange={handleInputChange}
                >
                  <option defaultValue="" />
                  <option value={'Empresa Operadora'}>Empresa Operadora</option>
                  <option value={'Cada quién con sus daños'}>Cada quién con sus daños</option>
                  <option value={'Se da a la fuga el particular'}>Se da a la fuga el particular</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={4}>
              <TextField
                id="standard"
                label="Comentarios"
                value={comentarios}
                name="comentarios"
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
              <Link to={`/segurosColisiones/${idEvento}`}> ver registros</Link>
            </Grid>
          </Grid>
        </div>
      </form>
    </Container>
  );
}

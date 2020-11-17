import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Link, useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { useHookForm } from "../../hooks/hookFrom";
import { validateForm } from "../../functions/validateFrom";
import { CustomSwalSave, CustomSwalError, CustomSwalEmptyFrom } from "../../functions/customSweetAlert";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import { httpPostData } from "../../functions/httpRequest";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function DatosAutomovilColisiones(props) {
  const classes = useStyles();
  // Parámetros por url
  //const { idEvento } = useParams();
  const {idEvento} = props;
  // Objeto a mapear
  const initial_datosAutomovilData= {
    sexo: "",
    marca: "",
    submarca: "",
    color: "",
    placa: "",
  };

  // Usando el hook personalizado
  const [values, handleInputChange] = useHookForm(initial_datosAutomovilData);

  // Desestructurando el response del hook
  const {
    sexo,
    marca,
    submarca,
    color,
    placa,
  } = values;

  // Valida el fromulario y de no haber campos vacios manda la infromacion al servidor
  const sendData = (e) => {
    //Evita que la petición sea mandada por defecto en GET
    e.preventDefault();
    // Url de la API
    const url = `/colisiones/datos-automovil/${idEvento}`;
    if (validateForm(values)) {
      // Petición axios, manda la data ya vlidada al url definido
      httpPostData(url, values)
        .then(resp =>{
            if(resp && resp.success)
              CustomSwalSave();
            else
              CustomSwalError();
        });//then
      /*
      axios
        .post(url, values)
        .then((res) => {
          console.log("Datos Automovil mandados", res);
          CustomSwalSave();
        })
        .catch((err) => {
          CustomSwalError();
          console.log("Hubo un error al guardar el datos Automovil", err);
        });
        */
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
                <InputLabel htmlFor="grouped-native-select">Género conductor</InputLabel>
                <Select
                  native
                  value={sexo}
                  id="grouped-native-select"
                  name="sexo"
                  onChange={handleInputChange}
                >
                  <option defaultValue="" />
                  <option value={'Masculino'}>Masculino</option>
                  <option value={'Femenino'}>Femenino</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={4}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Marca</InputLabel>
                <Select
                  native
                  value={marca}
                  id="grouped-native-select"
                  name="marca"
                  onChange={handleInputChange}
                >
                  <option defaultValue="" />
                  <option value={'Nissan'}>Nissan</option>
                  <option value={'Toyota'}>Toyota</option>
                  <option value={'VW'}>VW</option>
                  <option value={'BMW'}>BMW</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={4}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Submarca</InputLabel>
                <Select
                  native
                  value={submarca}
                  id="grouped-native-select"
                  name="submarca"
                  onChange={handleInputChange}
                >
                  <option defaultValue="" />
                  <option value={'Versa'}>Versa</option>
                  <option value={'Corolla'}>Corolla</option>
                  <option value={'Vento'}>Vento</option>
                  <option value={'X3'}>X3</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={4}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Color</InputLabel>
                <Select
                  native
                  value={color}
                  id="grouped-native-select"
                  name="color"
                  onChange={handleInputChange}
                >
                  <option defaultValue="" />
                  <option value={'Empresa Operadora'}>Negro</option>
                  <option value={'Azul'}>Azul</option>
                  <option value={'Blanco'}>Blanco</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={4}>
              <TextField
                id="standard"
                label="Placa"
                value={placa}
                name="placa"
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
                Agregar Automóvil
              </Button>
            </Grid>
            <Grid item lg={6} xs={12}>
              <Link to={`/automovilColisiones/${idEvento}`}> ver registros Automóvil</Link>
            </Grid>
          </Grid>
        </div>
      </form>
    </Container>
  );
}

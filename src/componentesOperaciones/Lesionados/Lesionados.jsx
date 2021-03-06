import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import axios from "axios";
import ListaEventos from "./ListaEventos";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

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

  // Objeto a mapear
  const [eventoData] = useState({
    fecha: "",
    hora: "",
    tipo_incidente: "",
    incidente: "",
    descripcion: "",
    tramo: "",
    operador: "",
    bitacora: "",
  });

  // Función que verifica si un campo cambia su estado
  const handleInputchange = (e) => {
    eventoData[e.target.name] = e.target.value;
    if (e.target.name === "hora") {
      eventoData[e.target.name] = e.target.value;
      eventoData[e.target.name] += ":00";
    } else {
      eventoData[e.target.name] = e.target.value;
    }

    console.log(eventoData);
  };

  // Valida el fromulario y de no haber campos vacios manda la infromacion al servidor
  const sendData = (e) => {
    //Evita que la petición sea mandada por defecto en GET
    e.preventDefault();
    // Url de la API
    const url = "/lesionados/registro-evento";
    if (
      eventoData.fecha !== "" &&
      eventoData.hora !== "" &&
      eventoData.tipo_incidente !== "" &&
      eventoData.incidente !== "" &&
      eventoData.descripcion !== "" &&
      eventoData.tramo !== "" &&
      eventoData.operador !== "" &&
      eventoData.bitacora !== ""
    ) {
      // Petición axios, manda la data ya vlidada al url definido
      axios
        .post(url, eventoData)
        .then((res) => {
          console.log("Datos mandados", res);
          alert("Datos mandados");
        })
        .catch((err) => {
          console.log("Hubo un error al guaradr el evento", err);
        });
    } else {
      alert("Aún qudan campo vacios");
    }
  };

  return (
    <Container component="main">
      <h5>LESIONADOS Y ATROPELLADOS</h5>
      <h6>CREAR EVENTO</h6>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={sendData}
      >
        <div>
          <TextField
            required
            id="standard"
            label="Folio Bitácora Roja"
            defaultValue=""
            name="bitacora"
            onChange={handleInputchange}
          />
          <TextField
            id="date"
            label="Fecha"
            name="fecha"
            type="date"
            onChange={handleInputchange}
            defaultValue="2020-05-24"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="time"
            label="Hora "
            type="time"
            name="hora"
            onChange={handleInputchange}
            defaultValue="07:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 300, // 5 min
            }}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Linea</InputLabel>
            <Select
              native
              defaultValue=""
              id="grouped-native-select"
              name="tipo_incidente"
              onChange={handleInputchange}
            >
              <option defaultValue="" />
              <option value={1}>Linea 1</option>
              <option value={0}>Linea 2</option>
              <option value={0}>Linea 2</option>
            </Select>
          </FormControl>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Estación</InputLabel>
            <Select
              native
              defaultValue=""
              id="grouped-native-select"
              name="tipo_incidente"
              onChange={handleInputchange}
            >
              <option defaultValue="" />
              <option value={1}>Estación 1</option>
              <option value={0}>Estación 2</option>
              <option value={0}>Estación 2</option>
            </Select>
          </FormControl>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TextField
            id="standard"
            name="tramo"
            label="Tramo"
            defaultValue=""
            onChange={handleInputchange}
          />
          <br />
          <TextField
            id="standard"
            name="economico"
            label="Económico"
            defaultValue=""
            onChange={handleInputchange}
          />
          <TextField
            id="standard"
            name="operador"
            label="Operador"
            defaultValue=""
            onChange={handleInputchange}
          />
          &nbsp;&nbsp;
          <FormControl component="fieldset" name="tipo_incidente">
            <FormLabel component="legend">Tipo incidente:</FormLabel>
            <RadioGroup row aria-label="position" defaultValue="top">
              <FormControlLabel
                value="TRUE"
                control={<Radio color="primary" />}
                label="Lesiónado"
                labelPlacement="tipo_incidente"
              />

              <FormControlLabel
                value="FALSE"
                control={<Radio color="primary" />}
                label="Atropellado"
                labelPlacement="tipo_incidente"
              />
            </RadioGroup>
          </FormControl>
          &nbsp;&nbsp;
          <TextField
            id="standard"
            name="incidente"
            label="Incidente"
            defaultValue=""
            onChange={handleInputchange}
          />
          &nbsp;
          <TextField
            id="standard"
            name="descripcion"
            label="Descripción"
            defaultValue=""
            onChange={handleInputchange}
          />
          <br />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="red"
            className={classes.bgPDF}
            startIcon={<AddIcon />}
          >
            Agregar evento
          </Button>
          <br />
          <br />
        </div>
      </form>
      <ListaEventos />
      <br />
      <br />
    </Container>
  );
}

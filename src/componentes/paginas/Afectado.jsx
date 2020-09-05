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
  const [afectadoData] = useState({
    sexo: "",
    edad: "",
    nombre: "",
    status: "",
    fk_Afectado: "",
  });

  // Función que verifica si un campo cambia su estado
  const handleInputchange = (e) => {
    afectadoData[e.target.name] = e.target.value;
    console.log(afectadoData);
    
  };

  // Valida el fromulario y de no haber campos vacios manda la infromacion al servidor
  const sendData = (e) => {
    //Evita que la petición sea mandada por defecto en GET
    e.preventDefault(); 
    // Url de la API
    const url = "http://localhost:5000/colisiones/registro-afectado/";
    if (
      afectadoData.sexo !== "" &&
      afectadoData.edad !== "" &&
      afectadoData.nombre !== "" &&
      afectadoData.status !== "" &&
      afectadoData.fk_evento !== ""
    ) {
      // Petición axios, manda la data ya vlidada al url definido
      axios
        .post(url.concat(afectadoData.fk_evento), afectadoData)
        .then((res) => {
          console.log("Datos mandados", res);
          alert("Datos mandados");
        })
        .catch((err) => {
          console.log("Hubo un error al guardar el Afectado", err);
        });
    } else {
      alert("Aún quedan campo vacios afectados");
    }
  };

  return (
    <Container component="main">
      <h6>CREAR AFECTADO</h6>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={sendData}>
        <div>
          <TextField
            id="standard"
            label="Nombre"
            defaultValue=""
            name="nombre"
            onChange={handleInputchange}
          />

          <TextField
            id="standard"
            label="Edad"
            defaultValue=""
            name="edad"
            onChange={handleInputchange}
          />
          
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">
             Género
            </InputLabel>
            <Select
              native
              defaultValue=""
              id="grouped-native-select"
              name="sexo"
              onChange={handleInputchange}
            >
              <option defaultValue="" />
              <option value={1}>Masculino</option>
              <option value={0}>Femenino</option>             
            </Select>
          </FormControl>
          &nbsp;&nbsp;
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">
             Estado
            </InputLabel>
            <Select
              native
              defaultValue=""
              id="grouped-native-select"
              name="status"
              onChange={handleInputchange}
            >
              <option defaultValue="" />
              <option value={1}>Vivo</option>
              <option value={0}>Muerto</option>             
            </Select>
          </FormControl>
          <br/><br/>                 
          <Button
            type="submit"
            variant="contained"
            color="red"
            className={classes.bgPDF}
            startIcon={<AddIcon />}
          >
            Agregar Afectado
          </Button>
          <br/><br/>
         
        </div>
      </form>   
     
    </Container>
  );
}

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
  const [datosSeguroData] = useState({
    horaArribo: "",
    tiempoRespuesta: "",
    seguro: "",
    corresponde: "",
    nombreAjustador: "",
    unidadSeguro: "",
  });

    // Función que verifica si un campo cambia su estado
    const handleInputchange = (e) => {
      datosSeguroData[e.target.name] = e.target.value;
      if(e.target.name === 'horaArribo'){
        datosSeguroData[e.target.name] = e.target.value;
        datosSeguroData[e.target.name] += ":00";
      }else{
        datosSeguroData[e.target.name] = e.target.value;
      }
  
      console.log(datosSeguroData);
      
    };

  // Valida el fromulario y de no haber campos vacios manda la infromacion al servidor
  const sendData = (e) => {
    //Evita que la petición sea mandada por defecto en GET
    e.preventDefault(); 
    // Url de la API
    const url = "http://localhost:5000/colisiones/registro-datosSeguro/1";
    if (
      datosSeguroData.horaArribo !== "" &&
      datosSeguroData.tiempoRespuesta !== "" &&
      datosSeguroData.seguro !== "" &&
      datosSeguroData.corresponde !== "" &&
      datosSeguroData.nombreAjustador !== "" &&
      datosSeguroData.unidadSeguro !== ""
    ) {
      // Petición axios, manda la data ya vlidada al url definido
      axios
        .post(url.concat(datosSeguroData.fk_evento), datosSeguroData)
        .then((res) => {
          console.log("DatosSeguro mandados", res);
          alert("DatosSeguro mandados");
        })
        .catch((err) => {
          console.log("Hubo un error al guardar el datosSeguro", err);
        });
    } else {
      alert("Aún quedan campo vacios datosSeguros");
    }
  };

  return (
    <Container component="main">
      <h6>CREAR Datos Seguro</h6>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={sendData}>
        <div>

        <TextField
            id="time"
            label="Hora "
            type="time"
            name="horaArribo"
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

          <TextField
            id="standard"
            label="Tiempo Respuesta"
            defaultValue="00:00:00"
            name="tiempoRespuesta"
            onChange={handleInputchange}
          />

          <TextField
            id="standard"
            label="Seguro"
            defaultValue=""
            name="seguro"
            onChange={handleInputchange}
          />
          &nbsp;&nbsp;

          <TextField
            id="standard"
            label="Corresponde"
            defaultValue=""
            name="corresponde"
            onChange={handleInputchange}
          />
          &nbsp;&nbsp;

          <TextField
            id="standard"
            label="Nombre Ajustador"
            defaultValue=""
            name="nombreAjustador"
            onChange={handleInputchange}
          />
          &nbsp;&nbsp;

          <TextField
            id="standard"
            label="Unidad Seguro"
            defaultValue=""
            name="unidadSeguro"
            onChange={handleInputchange}
          />
          &nbsp;&nbsp;
                
          <br/><br/>
          <Button
            type="submit"
            variant="contained"
            color="red"
            className={classes.bgPDF}
            startIcon={<AddIcon />}
          >
            Agregar Seguro
          </Button>
          <br/><br/>
         
        </div>
      </form>   
     
    </Container>
  );
}

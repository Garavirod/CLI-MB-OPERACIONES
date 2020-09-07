import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

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
  const {idAfectado,idEvento} = useParams();
  // Objeto a mapear
  const [ambulanciaData] = useState({
    tiempoLLegada: "",
    tiempoRespuesta: "",
    ambulancia: "",
    ecoPlaca: "",
    paramedico: "",
    diagnostico: "",
    idAfectado:idAfectado
  });

  // Función que verifica si un campo cambia su estado
  const handleInputchange = (e) => {
    ambulanciaData[e.target.name] = e.target.value;
    console.log(ambulanciaData);
    
  };

  // Valida el fromulario y de no haber campos vacios manda la infromacion al servidor
  const sendData = (e) => {
    //Evita que la petición sea mandada por defecto en GET
    e.preventDefault(); 
    // Url de la API
    const url = `http://localhost:5000/lesionados/registro-datosAmbulancia/${idEvento}`;
    if (
      ambulanciaData.tiempoLLegada !== "" &&
      ambulanciaData.tiempoRespuesta !== "" &&
      ambulanciaData.ambulancia !== "" &&
      ambulanciaData.ecoPlaca !== "" &&
      ambulanciaData.paramedico !== "" &&
      ambulanciaData.diagnostico !== ""
    ) {
      // Petición axios, manda la data ya vlidada al url definido
      axios
        .post(url, ambulanciaData)
        .then((res) => {
          console.log("Datos mandados", res);
          alert("Datos mandados");
        })
        .catch((err) => {
          console.log("Hubo un error al guardar la ambulancia", err);
        });
    } else {
      alert("Aún quedan campo vacios afectados");
    }
  };

  return (
    <Container component="main">
      <h6>Registrar ambulancia</h6>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={sendData}>
        <div>
        <TextField
            id="time"
            label="Tiempo Llegada"
            type="time"
            name="tiempoLLegada"
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
            label="Ambulancia"
            defaultValue=""
            name="ambulancia"
            onChange={handleInputchange}
          />  
          <TextField 
            id="standard"
            name="ecoPlaca" 
            label="Economico/Placa Ambulancia" 
            defaultValue="" 
            onChange={handleInputchange}
            />

          <TextField 
            id="standard"
            name="paramedico" 
            label="Paramedico" 
            defaultValue="" 
            onChange={handleInputchange}
            />  
            
          <TextField 
            id="standard"
            name="diagnostico" 
            label="Diagnostico" 
            defaultValue="" 
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
            Agregar Ambulancia
          </Button>
          <br/><br/>
          <Link to={`/ambulancias/${idEvento}`}> ver registros</Link>
        </div>
      </form>   
     
    </Container>
  );
}

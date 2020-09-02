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
  const [ambulanciaData] = useState({
    tiempoLLegada: "",
    tiempoRespuesta: "",
    ambulancia: "",
    ecoPlaca: "",
    paramedico: "",
    diagnostico: "",
    fk_evento: "",
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
    const url = "http://localhost:5000/colisiones/registro-datosAmbulancia/";
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
        .post(url.concat(ambulanciaData.fk_evento), ambulanciaData)
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
          
         {/* <FormControl className={classes.formControl}>
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
          </FormControl>*/}

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
          <TextField 
            id="standard"
            name="fk_evento" 
            label="IdEvento" 
            defaultValue="" 
            onChange={handleInputchange}
            />         
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
         
        </div>
      </form>   
     
    </Container>
  );
}

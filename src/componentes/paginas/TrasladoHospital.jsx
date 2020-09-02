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
  const [TrasladoHospitalData] = useState({
    nombreHospital: "",
    paseMedico: "",
    fk_evento: "",
  });

  // Función que verifica si un campo cambia su estado
  const handleInputchange = (e) => {
    TrasladoHospitalData[e.target.name] = e.target.value;
    console.log(TrasladoHospitalData);
    
  };

  // Valida el fromulario y de no haber campos vacios manda la infromacion al servidor
  const sendData = (e) => {
    //Evita que la petición sea mandada por defecto en GET
    e.preventDefault(); 
    // Url de la API
    const url = "http://localhost:5000/colisiones/registro-trasladoHospital/";
    if (
      TrasladoHospitalData.nombreHospital !== "" &&
      TrasladoHospitalData.paseMedico !== "" &&
      TrasladoHospitalData.fk_evento !== ""
    ) {
      // Petición axios, manda la data ya vlidada al url definido
      axios
        .post(url.concat(TrasladoHospitalData.fk_evento), TrasladoHospitalData)
        .then((res) => {
          console.log("Datos mandados", res);
          alert("Datos mandados");
        })
        .catch((err) => {
          console.log("Hubo un error al guardar TrasladoHospital", err);
        });
    } else {
      alert("Aún quedan campo vacios afectados");
    }
  };

  return (
    <Container component="main">
      <h6>Registrar Traslado a Hospital</h6>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={sendData}>
        <div>
          <TextField
            id="standard"
            label="Nombre Hospital"
            defaultValue=""
            name="nombreHospital"
            onChange={handleInputchange}
          />

          <TextField
            id="standard"
            label="Pase Medico"
            defaultValue=""
            name="paseMedico"
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
            Agregar Traslado 
          </Button>
          <br/><br/>
         
        </div>
      </form>   
     
    </Container>
  );
}

import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";

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

  const {idAfectado} = useParams();
  const {idEvento} = useParams();

  // Objeto a mapear
  const [TrasladoHospitalData] = useState({
    nombreHospital: "",
    paseMedico: "",    
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
    const url = `http://localhost:5000/colisiones/registro-trasladoHospital/${idAfectado}`;
    if (
      TrasladoHospitalData.nombreHospital !== "" &&
      TrasladoHospitalData.paseMedico !== ""    
    ) {
      // Petición axios, manda la data ya vlidada al url definido
      axios
        .post(url, TrasladoHospitalData)
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
          <Link to={`/traslados/${idEvento}`}> ver registros</Link>         
        </div>
      </form>   
     
    </Container>
  );
}

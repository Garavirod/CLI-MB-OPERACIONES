import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import TextField from "@material-ui/core/TextField";
import { useHookForm } from "../../hooks/hookFrom";
import { CustomSwalSave, CustomSwalError, CustomSwalEmptyFrom } from "../../functions/customSweetAlert";
import { validateForm } from "../../functions/validateFrom";
import { httpPostData } from "../../functions/httpRequest";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  div: {
    margin: "auto",
    textAlign: "center",
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export const EventosFormColisiones = () => {
  const classes = useStyles();

  // Objeto a mapear
  const initial_evento = {
    motivo: "",   
  };

  // Hook personalizado con el evento inicial
  const [values, handleInputChange] = useHookForm(initial_evento);

  // desestructuando el values del hook
  const {
    motivo,
  } = values;

  console.log(values);
  // Valida el fromulario y de no haber campos vacios manda la infromacion al servidor
  const sendData = (e) => {
    //Evita que la petición sea mandada por defecto en GET
    e.preventDefault();
    // Url de la API
    const url = "/desincorporaciones/datos-motivo";    
    if (validateForm(values)) {
      // Petición axios genérica por url y data
      const success = httpPostData(url, values);
      if(success===true)
        CustomSwalSave(); 
      else
        CustomSwalError();          
    } else {
      CustomSwalEmptyFrom();
    }
  };

  return (
    <div className={classes.root} className="animate__animated animate__fadeInRight">
      <Grid container spacing={2}>
        {/* header */}
        <Grid item lg={12}>
            <h5>ColisioneXFSVUYDs</h5>
            <h6>Crear evento nuevo</h6>          
        </Grid>
        <Grid item lg={12}>
          <Link to={"/eventosColisiones"}>Lista de eventos Colisiones</Link>
        </Grid>

        <Grid item lg={12}>
          <Paper className={classes.paper}>
            <form
              className={classes.form}
              noValidate
              autoComplete="off"
              onSubmit={sendData}
            >
              <Grid container spacing={3}>
              
               
                
             
               
              <Grid item lg={4}>
              <TextField
                id="standard"
                label="Motivo"
                value={motivo}
                name="motivo"
                onChange={handleInputChange}
              />
            </Grid>
                
                
                <Grid item lg={12}>
                  <Button
                    type="submit"
                    variant="contained"                    
                    className={classes.bgPDF}
                    startIcon={<AddIcon />}
                  >
                    Agregar evento
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { useParams, Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { useHookForm } from "../../hooks/hookFrom";
import { validateForm } from "../../functions/validateFrom";
import { httpPostData } from "../../functions/httpRequest";
import { CustomSwalSave, CustomSwalError, CustomSwalEmptyFrom } from "../../functions/customSweetAlert";

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

export default function FormPropsTextFields() {
  const classes = useStyles();

  const { idAfectado, idEvento } = useParams();

  // Objeto a mapear
  const initial_TrasladoHospital = {
    nombreHospital: "",
    paseMedico: "",
  };

  // Usando el hook personalizado
  const [values, handleInputChange] = useHookForm(initial_TrasladoHospital);

  // Desestructurando el hook
  const {
    nombreHospital,
    paseMedico
  }=values;

  // Valida el fromulario y de no haber campos vacios manda la infromacion al servidor
  const sendData = (e) => {
    //Evita que la petición sea mandada por defecto en GET
    e.preventDefault();
    // Url de la API
    const url = `/lesionados/registro-trasladoHospital/${idAfectado}`;
    if (validateForm(values)) {
      // Petición axios genérica por url
      const success = httpPostData(url, values);
      if(success)
        CustomSwalSave();
      else
        CustomSwalError();     
    } else {
      CustomSwalEmptyFrom();
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <h6>Registrar Traslado a Hospital</h6>
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={sendData}
        >
          <Grid container spacing={3}>
            <Grid item lg={6} xs={12}>
              <TextField
                id="standard"
                label="Nombre Hospital"
                value={nombreHospital}
                name="nombreHospital"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <TextField
                id="standard"
                label="Pase médico"
                value={paseMedico}
                name="paseMedico"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item lg={12} xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="red"
                className={classes.bgPDF}
                startIcon={<AddIcon />}
              >
                Agregar Traslado
              </Button>
            </Grid>
            <Grid item lg={12} xs={12}>
              <Link to={`/traslados/${idEvento}`}> ver registros</Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
}

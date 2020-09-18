import React from "react";
import { useParams, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
// Components
import Ambulancia from "./Ambulancia";
import Traslado from "./TrasladoHospital";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const FormTraslado = () => {
  const classes = useStyles();
  const { idAfectado, idEvento } = useParams();
  return (
    <div className={classes.root} className="animate__animated animate__fadeInRight">
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <h4>
            Afectado: {idAfectado} del evento: {idEvento}
          </h4>
        </Grid>
        <Grid item lg={6}>
          <Link to={`/add-register/${idEvento}`}>Agregar nuevo afectado</Link>
        </Grid>
        <Grid item lg={6}>
          <Link to={`/afectados/${idEvento}`}>Lista de afectados</Link>
        </Grid>
        <Grid item lg={12}>
          <Ambulancia />
        </Grid>
        <Grid item lg={12}>
          <Traslado />
        </Grid>
      </Grid>
    </div>
  );
};

import React from "react";
import ListaEventos from "./ListaEventos";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import CreateIcon from '@material-ui/icons/Create';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  icon:{
      margin:2
  }

}));

export const LeasionadosScreen = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Paper className={classes.paper}>
            <Typography component="div" variant="h4">
              <Box textAlign="center" m={1}>
                Lista de eventos
              </Box>
            </Typography>
            <Typography component="div">

              <Box textAlign="left" m={1}>
                <Link to="/lesiones-form">
                  <span className={classes.icon}>
                      <CreateIcon/>
                  </span>
                    Agregar evento nuevo
                </Link>
              </Box>
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={12}>
          <Paper className={classes.paper}>
            <ListaEventos />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

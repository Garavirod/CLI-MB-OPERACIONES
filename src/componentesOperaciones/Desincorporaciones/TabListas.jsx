import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Grid, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },

  formControl: {
    margin: theme.spacing(3),
    minWidth: 220,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const TabListasComponent = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Paper className={classes.paper} variant="outlined">
            <Typography variant="h6" component="h6">
              Listado de folios abiertos / incumplimientos / cumplimeintos
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

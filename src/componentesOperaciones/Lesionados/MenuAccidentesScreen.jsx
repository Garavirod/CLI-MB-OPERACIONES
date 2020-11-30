import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardSection } from "../ui/CardSection";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

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

const Menu = [
  {
    id:1,
    tagname: "Acidentes y colisiones",
    descripcion:
      "En esta sección se pueden llevar a cabo los registros de los eventos que abarcan colisiones o accidentes",
    imgName: "crash",
    src:'/eventosColisiones'
  },
  {
    id:2,
    tagname: "Lesionados y atropellados",
    descripcion:
      "En esta sección se pueden llevar a cabo los registros de los eventos que abarcan atropellamientos o lesiones",
    imgName: "accident",
    src:'/eventos'
  },
  {
    id:3,
    tagname: "Reportes y estadísticas",
    descripcion:
      "En esta sección se pueden visualizar los históricos de accdentes y lesionados",
    imgName: "report",
    src:'/estadisticas'
  },
];

export const MenuAccidentesScreen = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <div className={classes.root}>
        <Grid container spacing={3}>
          {Menu.map((sec) => (
            <Grid key={sec.id} item lg={4} xs={12} md={12} className="animate__animated animate__fadeInDown">
              <Paper className={classes.paper}>
                <div>
                  <CardSection
                    tagName={sec.tagname}
                    description={sec.descripcion}
                    imageName={sec.imgName}
                    path={sec.src}
                  />
                </div>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container> 
  );
};

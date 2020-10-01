import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Container,
  Typography,
} from "@material-ui/core";

import { useForm } from "../../hooks/useForm";
import { DesincorporacionComp } from "./DesincorporacionComp";
import { IncorporacionComp } from "./IncorporacionComp";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  ModelDesincorporacion,
  ModelIncorporacion,
  ModelReferencias,
} from "../../models/ModelsIncorporacion";
import Referencia from "./Referencia";
import { useParams, Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles((theme) => ({
  conatiner: {
    flexGrow: 1,
    height: "100vh",
  },
  headerText: {
    textAlign: "center",
  },
}));

export const CerrarFolioForm = () => {
  const { idFolio } = useParams();

  const classes = useStyles();

  // Modelo y estructura de una Desincorporación
  const [valuesDes, handleInputChangeDes, resetDes] = useForm(
    ModelDesincorporacion
  );

  // Modelo y estructura de una Incorporación
  const [valuesInco, handleInputChangeInc, resetInc] = useForm(
    ModelIncorporacion
  );

  // Modelo y estructura de una Referencia para un cumplimiento
  const [valuesRef1, handleInputChangeRef1, resetRef1] = useForm(
    ModelReferencias
  );

  // Modelo y estructura de una Referencia para un Incumplimiento
  const [valuesRef2, handleInputChangeRef2, resetRef2] = useForm(
    ModelReferencias
  );

  const registraIncorporacion = (e) => {
    e.preventDefault();
    console.log(valuesDes);
    console.log(valuesRef1);
    console.log(valuesRef2);
  };

  const { tipo } = valuesDes;

  return (
    <Container maxWidth="lg" className={classes.conatiner}>
      <Card>
        <Grid container spacing={3}>
          <Grid item lg={12}>
            <Alert severity="warning">
              <Grid container spacing={2}>
                <Grid item lg={6}>
                  Usted está visualizando la infrormación del folio: {idFolio}
                </Grid>
                <Grid item lg={6}>
                  <Typography
                    variant="h6"
                    component="h4"
                    className={classes.headerText}
                  >
                    <Link className="" to={"/BitacordaDR"}>
                      <ArrowBackIcon />
                      cerrar folio sin guaradar
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Alert>
          </Grid>
          <Grid item lg={12}>
            <form onSubmit={registraIncorporacion}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item lg={6}>
                    {/* FORMULARIO DE DESINCORPORACIONES */}
                    <Grid container spacing={2}>
                      <Grid item lg={12}>
                        <DesincorporacionComp
                          valuesDes={valuesDes}
                          handleInputChangeDes={handleInputChangeDes}
                          resetDes={resetDes}
                        />
                      </Grid>
                      <Grid item lg={12}>
                        {/* FROMULARIO DE REFERENCIAS */}
                        {tipo === "Afectación" ? (
                          <div>
                            <Referencia
                              titulo={"Incumplimientos"}
                              color={"#ef5350"}
                              valuesRef={valuesRef1}
                              handleInputChangeRef={handleInputChangeRef1}
                              resetRef={resetRef1}
                            />

                            <Referencia
                              titulo={"Cumplimientos"}
                              color={"#4caf50"}
                              valuesRef={valuesRef2}
                              handleInputChangeRef={handleInputChangeRef2}
                              resetRef={resetRef2}
                            />
                          </div>
                        ) : tipo === "Incumplido" ? (
                          <Referencia
                            titulo={"Incumplimientos"}
                            color={"#ef5350"}
                            valuesRef={valuesRef1}
                            handleInputChangeRef={handleInputChangeRef1}
                            resetRef={resetRef1}
                          />
                        ) : tipo === "Apoyo" ? (
                          <Referencia
                            titulo={"Cumplimientos"}
                            color={"#4caf50"}
                            valuesRef={valuesRef2}
                            handleInputChangeRef={handleInputChangeRef2}
                            resetRef={resetRef2}
                          />
                        ) : (
                          <></>
                        )}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item lg={6}>
                    <Grid container spacing={2}>
                      {/* FORMULARIO DE INCORPORACIONES */}
                      <Grid item lg={12}>
                        <IncorporacionComp
                          valuesInco={valuesInco}
                          valuesDes={valuesDes}
                          handleInputChangeInc={handleInputChangeInc}
                          resetInc={resetInc}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button
                  type="submit"
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  Guardar folio
                </Button>
                <Button size="small" variant="contained" color="primary">
                  Nuevo folio
                </Button>
              </CardActions>
            </form>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

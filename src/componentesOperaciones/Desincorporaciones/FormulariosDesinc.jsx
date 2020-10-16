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
import {
  ModelDesincorporacion,
  ModelIncorporacion,
  ModelReferencias,
} from "../../models/ModelsIncorporacion";
import Referencia from "./Referencia";
import { TabListasComponent } from "./TabListas";
import { validateFormExcept, validateForm } from "../../functions/validateFrom";
import { setKilometrajeCalculado } from "../../helpers/utils";

const useStyles = makeStyles((theme) => ({
  conatiner: {
    flexGrow: 1,
    height: "100vh",
  },
  headerText: {
    textAlign: "center",
  },
}));

export const FormDesincorporaciones = () => {
  const classes = useStyles();

  // Modelo y estructura de una Desincorporación
  const [valuesDes, handleInputChangeDes, resetDes] = useForm(
    ModelDesincorporacion
  );

  // Modelo y estructura de una Incorporación
  // const [valuesInco, handleInputChangeInc, resetInc] = useForm(
  //   ModelIncorporacion
  // );

  // Modelo y estructura de una Referencia para un Incumplimietno
  const [valuesRef1, handleInputChangeRef1, resetRef1] = useForm(
    ModelReferencias
  );

  // Modelo y estructura de una Referencia para un Cumplimiento
  const [valuesRef2, handleInputChangeRef2, resetRef2] = useForm(
    ModelReferencias
  );

  const { tipo } = valuesDes;

  const registraFolio = (e) => {
    e.preventDefault();
    // Validamos el folio de la desincorporación
    const isValidFolio = validateFormExcept(valuesDes, ["observaciones"]);
    let isValidIncum,
      isValidApo = false;

    // Realizamos el POST segun la peticion
    switch (tipo) {
      case "Incumplido":
        isValidIncum = validateForm(valuesRef1);
        if (isValidFolio && isValidIncum) {
          const km = setKilometrajeCalculado(valuesRef1);
          valuesRef1["kilometraje"] = km;
          valuesRef1["tipo"] = "Incumplido";
          console.log(valuesDes);
          console.log(valuesRef1);
          alert(`Kilometraje incumplido >: ${km}`);
          //Realizar el POST
        } else {
          alert("Campos vacios");
        }
        break;
      case "Apoyo":
        isValidApo = validateForm(valuesRef2);
        if (isValidFolio && isValidApo) {
          const km = setKilometrajeCalculado(valuesRef2);
          valuesRef2["kilometraje"] = km;
          valuesRef2["tipo"] = "cumplido";
          console.log(valuesDes);
          console.log(valuesRef2);
          alert(`Kilometraje cumplido >: ${km}`);
          //Realizar el POST
        } else {
          alert("Campos vacios");
        }
        break;
      case "Afectación":
        isValidIncum = validateForm(valuesRef1);
        isValidApo = validateForm(valuesRef2);
        if (isValidFolio && !isValidApo && isValidIncum) {
          const km = setKilometrajeCalculado(valuesRef1);
          valuesRef1["kilometraje"] = km;
          valuesRef1["tipo"] = "Incumplido";
          console.log(valuesDes);
          console.log(valuesRef1);
          alert(`Kilometraje incumplido >: ${km}`);
        } else if (isValidFolio && isValidApo && isValidIncum) {
          const km1 = setKilometrajeCalculado(valuesRef1);
          const km2 = setKilometrajeCalculado(valuesRef2);
          valuesRef1["kilometraje"] = km1;
          valuesRef2["kilometraje"] = km2;
          valuesRef1["tipo"] = "Incumplido";
          valuesRef2["tipo"] = "cumplido";
          console.log(valuesDes);
          console.log(valuesRef1);
          console.log(valuesRef2);
          alert(`Kilometraje calculado >: Inc ${km1} cump ${km2}`);
        } else {
          alert("Campos vacios");
        }
        //Realizar el POST
        break;
      default:
        break;
    }
  };

  return (
    <Container maxWidth="lg" className={classes.conatiner}>
      <Card className="animate__animated animate__fadeIn">
        <Grid container spacing={3}>
          <Grid item lg={12}>
            <Typography
              variant="h6"
              component="h4"
              className={classes.headerText}
            >
              Incorporaciones y Desincorporaciones
            </Typography>
          </Grid>
          <Grid item lg={12}>
            <form onSubmit={registraFolio}>
              <CardContent>
                <Grid container spacing={2}>
                  {/* FORMULARIO DE DESINCORPORACIONES */}
                  <Grid item lg={6}>
                    <DesincorporacionComp
                      valuesDes={valuesDes}
                      handleInputChangeDes={handleInputChangeDes}
                      resetDes={resetDes}
                    />
                  </Grid>
                  {/* LISTA DE FOLIOS ABIERTOS/ INCUM / CUMP */}
                  <Grid item lg={6}>
                    <TabListasComponent />
                  </Grid>
                  {/* FROMULARIO DE REFERENCIAS (CUMPLIMIENTOS E INCUMPLIMIENTOS) */}
                  <Grid item lg={12}>
                    {tipo === "Afectación" ? (
                      <Grid container spacing={3}>
                        <Grid item lg={6}>
                          <Referencia
                            titulo={"Incumplimientos"}
                            color={"#ef5350"}
                            valuesRef={valuesRef1}
                            handleInputChangeRef={handleInputChangeRef1}
                            resetRef={resetRef1}
                          />
                        </Grid>
                        <Grid item lg={6}>
                          <Referencia
                            titulo={"Cumplimientos"}
                            color={"#4caf50"}
                            valuesRef={valuesRef2}
                            handleInputChangeRef={handleInputChangeRef2}
                            resetRef={resetRef2}
                            flag={true}
                          />
                        </Grid>
                      </Grid>
                    ) : tipo === "Incumplido" ? (
                      <Grid item lg={6}>
                        <Referencia
                          titulo={"Incumplimientos"}
                          color={"#ef5350"}
                          valuesRef={valuesRef1}
                          handleInputChangeRef={handleInputChangeRef1}
                          resetRef={resetRef1}
                        />
                      </Grid>
                    ) : tipo === "Apoyo" ? (
                      <Grid item lg={6}>
                        <Referencia
                          titulo={"Cumplimientos"}
                          color={"#4caf50"}
                          valuesRef={valuesRef2}
                          handleInputChangeRef={handleInputChangeRef2}
                          resetRef={resetRef2}
                        />
                      </Grid>
                    ) : (
                      <></>
                    )}
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
                  Guardar
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

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

const useStyles = makeStyles((theme) => ({
  conatiner: {
    flexGrow: 1,
    height: "100vh",
  },
  headerText: {
    textAlign: "center",
  },
}));

export const FormDesincorporaciones = () =>{
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
  const [valuesRef, handleInputChangeRef, resetRef] = useForm(
    ModelReferencias
  );


  // Modelo y estructura de una Referencia para un Incumplimiento
  // const [valuesRefInc, handleInputChangeRefInc, resetRefInc] = useForm(
  //   ModelReferencias
  // );
  

  const registraIncorporacion = (e) =>{
    e.preventDefault();
    console.log(valuesDes);
    console.log(valuesRef);
  }


  return (
    <Container maxWidth="lg" className={classes.conatiner}>
      <Card className="animate__animated animate__fadeInRight">
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
            <form onSubmit={registraIncorporacion}>
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
                  <Grid item lg={6}>
                    {/* FORMULARIO DE INCORPORACIONES */}
                    <IncorporacionComp
                      valuesInco={valuesInco}
                      handleInputChangeInc={handleInputChangeInc}
                      resetInc={resetInc}
                    />
                  </Grid>
                  <Grid item lg={6}>
                    {/* REFERENCIAS */}
                    <Referencia
                       valuesRef={valuesRef}
                       handleInputChangeRef={handleInputChangeRef}
                       resetRef={resetRef}
                    />
                  </Grid>
                  {/* LISTA DE REGISTROS */}
                  <Grid item lg={6}>
                    <TabListasComponent/>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button type="submit" size="small" variant="contained" color="primary">
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
}

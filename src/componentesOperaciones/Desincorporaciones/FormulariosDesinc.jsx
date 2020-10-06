import React, { useState } from "react";
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


import { httpPostData } from "../../functions/httpRequest";
import { CustomSwalSave, CustomSwalError} from "../../functions/customSweetAlert";

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


  // Modelo y estructura de una Referencia
  const [valuesRef, handleInputChangeRef, resetRef] = useForm(
    ModelReferencias
  );

  
  //----------cumplimientos_incumplimientos----------

  const [cumIncum, setCumIncumValues] = useState({
    referencia: 'referenciaPrueba', //how?
    ida: '',
    vuelta: '',
    numVueltas: 0,
    numIdas: 0,
    numRegresos: 0,
    tramoDesde: '',
    tramoHasta: '',
    kilometraje: 1.1, //how?
    tipo: 'cumplimiento' //how?
  });

  function handleCumIncumChange(event){
    const compName = event.target.name;
    const compValue = event.target.value;

    setCumIncumValues(prevValues => {
      return ({
        ...prevValues,
        [compName]:compValue
      });
    });//setCumIncumValues
    
    console.log(cumIncum);

  }//handleCumIncumChange


  //Save Cumplimiento
  function saveCumIncum(){
    //where from??
    const url = "/desincorporaciones/datos-cumplimiento/${idDesincorporacion:1}";    
    const success = httpPostData(url, cumIncum);

    if(success)
      CustomSwalSave(); 
    else
      CustomSwalError();
  }//saveCumIncum
  //----------cumplimientos_incumplimientos----------


  //console.log(valuesRef);

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
            <form>
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
                      //valuesRef={valuesRef}
                      //handleInputChangeRef={handleInputChangeRef}
                      //resetRef={resetRef}
                      refValues={cumIncum}
                      handleRefValues={handleCumIncumChange}
                    />
                  </Grid>
                  {/* LISTA DE REGISTROS */}
                  <Grid item lg={6}>
                    <TabListasComponent/>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button 
                  size="small"
                  variant="contained"
                  color="primary"
                  onClick={saveCumIncum}
                >
                  Guardar
                </Button>
                <Button size="small" variant="contained" color="primary">
                  Cancelar
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

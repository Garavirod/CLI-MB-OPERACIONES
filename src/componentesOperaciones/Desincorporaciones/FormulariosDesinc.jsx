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
import { validateFormExcept, validateForm } from "../../functions/validateFrom";
import { setKilometrajeCalculado } from "../../helpers/utils";


import { httpPostData } from "../../functions/httpRequest";
import { CustomSwalSave, CustomSwalError} from "../../functions/customSweetAlert";
import { useParams } from "react-router-dom";

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
  const [valuesInco, handleInputChangeInc, resetInc] = useForm(
    ModelIncorporacion
  );

  //----------cumplimientos_incumplimientos----------
  // Modelo y estructura de una Referencia para un Incumplimietno
  const [valuesRef1, handleInputChangeRef1, resetRef1] = useForm(
    ModelReferencias
  );
  //get the idDesincorporacion for the Cumplimiento_Incumplimiento
  //const { idFolio } = useParams();
  const idFolio = 2;
  const urlCum = "/desincorporaciones/datos-cumplimiento/${idDesincorporacion:"+idFolio+"}";
  console.log("el folio "+idFolio);
  //----------cumplimientos_incumplimientos----------


  // Modelo y estructura de una Referencia para un Cumplimiento
  const [valuesRef2, handleInputChangeRef2, resetRef2] = useForm(
    ModelReferencias
  );

  const { tipo } = valuesDes;

  const registraFolio = (e) => {
    
    e.preventDefault();
    // Validamos el folio de la desincorporación
    const isValidFolio = validateFormExcept(valuesDes, ["observaciones"]);
    let isValidIncum,isValidApo = false;    
    
    // Realizamos el POST segun la peticion
    switch (tipo) {
      case "Incumplido":
        isValidIncum = validateForm(valuesRef1);
        if (isValidFolio && isValidIncum) {
          const km = setKilometrajeCalculado(valuesRef1);
          valuesRef1['kilometraje']=km;
          valuesRef1['tipo'] = "Incumplido";                 
          console.log(valuesDes);
          console.log(valuesRef1);
          alert(`Kilometraje incumplido >: ${km}`);
          //Realizar el POST
          //cumplimientos_incumplimientos-----------
          const success = httpPostData(urlCum, valuesRef1);
          if(success)
            CustomSwalSave(); 
          else
            CustomSwalError();
        } else {
          alert("Campos vacios");
        }
        break;
      case "Apoyo":
        isValidApo = validateForm(valuesRef2);
        if (isValidFolio && isValidApo) {
          const km = setKilometrajeCalculado(valuesRef2);
          valuesRef2['kilometraje']=km;
          valuesRef2['tipo'] = "cumplido";                                          
          console.log(valuesDes);
          console.log(valuesRef2);
          alert(`Kilometraje cumplido >: ${km}`);
          //Realizar el POST
          const success = httpPostData(urlCum, valuesRef2);
          if(success)
            CustomSwalSave(); 
          else
            CustomSwalError();
        } else {
          alert("Campos vacios");
        }
        break;
      case "Afectación":
        isValidIncum = validateForm(valuesRef1);
        isValidApo = validateForm(valuesRef2);        
          if((isValidFolio) && (!isValidApo && isValidIncum)){
            const km = setKilometrajeCalculado(valuesRef1);
            valuesRef1['kilometraje']=km;
            valuesRef1['tipo'] = "Incumplido";                          
            console.log(valuesDes);
            console.log(valuesRef1);
            alert(`Kilometraje incumplido >: ${km}`);

          }else if ((isValidFolio) && (isValidApo && isValidIncum)){
            const km1 = setKilometrajeCalculado(valuesRef1);
            const km2 = setKilometrajeCalculado(valuesRef2); 
            valuesRef1['kilometraje']=km1                           
            valuesRef2['kilometraje']=km2
            valuesRef1['tipo'] = "Incumplido"; 
            valuesRef2['tipo'] = "cumplido";                 
            console.log(valuesDes);
            console.log(valuesRef1);
            console.log(valuesRef2);            
            alert(`Kilometraje calculado >: Inc ${km1} cump ${km2}`);

          }else{
            alert("Campos vacios");
          }
          //Realizar el POST
          /* BOTH???????? */
          const success1 = httpPostData(urlCum, valuesRef1);
          const success2 = httpPostData(urlCum, valuesRef2);
          if(success1 && success2)
            CustomSwalSave(); 
          else
            CustomSwalError();
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
                      {/* LISTA DE REGISTROS */}
                      <Grid item lg={12}>
                        <TabListasComponent />
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

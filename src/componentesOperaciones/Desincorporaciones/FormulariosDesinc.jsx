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
import {
  ModelDesincorporacion,
  ModelReferencias,
} from "../../models/ModelsIncorporacion";
import Referencia from "./Referencia";
import { TabListasComponent } from "./TabListas";
import { validateFormExcept, validateForm, validateIncumByTramos, validateRefApoInc } from "../../functions/validateFrom";
import { setKilometrajeCalculado } from "../../helpers/utils";


import { httpPostData } from "../../functions/httpRequest";
import { CustomSwalEmptyFrom } from "../../functions/customSweetAlert";
import swal from "sweetalert";

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

  //----------cumplimientos_incumplimientos----------
  // Modelo y estructura de una Referencia para un Incumplimietno
  const [valuesRef1, handleInputChangeRef1, resetRef1] = useForm(
    ModelReferencias
  );
  //get the idDesincorporacion for the Cumplimiento_Incumplimiento
  const urlCum = "/desincorporaciones/datos-desincorporacion";
  //----------cumplimientos_incumplimientos----------


  // Modelo y estructura de una Referencia para un Cumplimiento
  const [valuesRef2, handleInputChangeRef2, resetRef2] = useForm(
    ModelReferencias
  );

  //refresh getting folios abiertos
  const [valRefrFolios, setRefresh] = useState(0);

  const { tipo } = valuesDes;

  const registraFolio = (e) => {
    
    e.preventDefault();
    // Validamos el folio de la desincorporación
    const isValidFolio = validateFormExcept(valuesDes, ["observaciones"]);
    let isValidIncum,isValidApo = false;
    // validamos la referencia
    switch (tipo) {
      case "Incumplido":        
        isValidIncum = validateRefApoInc(valuesRef1);
        /*
          Validamos si se ha lledo todo el formulario 
        */                
        if (isValidFolio && isValidIncum) {
          const bothFilled = validateIncumByTramos(valuesRef1);
          /* 
            Validamos que el usuario solo haya llenado los tramos
            o las vueltas, pero no ambas.
          */
          if(bothFilled){
            swal("¿Tramos o vueltas?", "Los incumplimientos sólo pueden ser por tramos o por número de vueltas a la ruta, pero no ambas");
          }else{
            // Si los tramos estan llenos entonces las vueltas van en ceros
            if(valuesRef1['tramo_desde']!=="-" && valuesRef1['tramo_hasta']!=="-"){
              valuesRef1['num_vuelta'] = '0';
              valuesRef1['num_ida'] = '0';
              valuesRef1['num_regreso'] = '0';
            }
            const km = setKilometrajeCalculado(valuesRef1);
            valuesRef1["kilometraje"] = km;
            valuesRef1["tipo"] = "Incumplido";  
            // Combinamos el folio con la referencia asociada
            const folio_with_ref = {...valuesDes, ...valuesRef1};          
            alert(`KILOMETRAJE INCUMPLIDO >: ${km}`);
            console.log(folio_with_ref);
            //Realizar el POST de Folio completo
            httpPostData("/desincorporaciones/datos-desincorporacion", folio_with_ref)
            .then(() =>{
              setRefresh(prevValRefr => {
                return prevValRefr + 1;
              });
              // Reseteamos modelos
              resetDes(ModelDesincorporacion);
              resetRef1(ModelReferencias);
              resetRef2(ModelReferencias);
            });
          }

        } else {
          CustomSwalEmptyFrom();        
        }              
        break;
      case "Apoyo":
        isValidApo = validateRefApoInc(valuesRef2);
        if (isValidFolio && isValidApo) {
          const bothFilled = validateIncumByTramos(valuesRef2);
          /* 
            Validamos que el usuario solo haya llenado los tramos
            o las vueltas, pero no ambas.
          */
          if(bothFilled){
            swal("¿Tramos o vueltas?", "Los incumplimientos sólo pueden ser por tramos o por número de vueltas a la ruta, pero no ambas");
          }else{
            // Si los tramos estan llenos entonces las vueltas van en ceros
            if(valuesRef2['tramo_desde']!=="-" && valuesRef2['tramo_hasta']!=="-"){
              valuesRef2['num_vuelta'] = '0';
              valuesRef2['num_ida'] = '0';
              valuesRef2['num_regreso'] = '0';
            }
            const km = setKilometrajeCalculado(valuesRef2);
            valuesRef2["kilometraje"] = km;
            valuesRef2["tipo"] = "Apoyo";
            alert(`KILOMETRAJE CUMPLIDO >: ${km}`);
            // combinamos el folio con la referencia asocaida
            const folio_with_ref = {...valuesDes, ...valuesRef2};  
            console.log(folio_with_ref);
            //Realizar el POST de Folio completo
            httpPostData("/desincorporaciones/datos-desincorporacion", folio_with_ref)
            .then(() =>{
              setRefresh(prevValRefr => {
                return prevValRefr + 1;
              });
              // Reseteamos modelos
              resetDes(ModelDesincorporacion);
              resetRef1(ModelReferencias);
              resetRef2(ModelReferencias);              
            });
          }         
        } else {
          CustomSwalEmptyFrom();
          // alert("Campos vacios");
        }
        break;
      case "Afectación":        
        isValidIncum = validateRefApoInc(valuesRef1);
        isValidApo = validateForm(valuesRef2);
        if (isValidFolio && !isValidApo && isValidIncum) {
          const bothFilled = validateIncumByTramos(valuesRef1);
          /* 
            Validamos que el usuario solo haya llenado los tramos
            o las vueltas, pero no ambas.
          */
          if(bothFilled){
            swal("¿Tramos o vueltas?", "Los incumplimientos sólo pueden ser por tramos o por número de vueltas a la ruta, pero no ambas");
            console.log(valuesRef1);
          }else{
            // Si los tramos estan llenos entonces las vueltas van en ceros
            if(valuesRef1['tramo_desde']!=="-" && valuesRef1['tramo_hasta']!=="-"){
              valuesRef1['num_vuelta'] = '0';
              valuesRef1['num_ida'] = '0';
              valuesRef1['num_regreso'] = '0';
            }
            // cuando en una afectación sólo hay incumplimiento
            const km = setKilometrajeCalculado(valuesRef1);
            valuesRef1["kilometraje"] = km;
            valuesRef1["tipo"] = "Incumplido";
            // Combinamos el folio con la referencia asociada
            const folio_with_ref = {...valuesDes, ...valuesRef1};          
            //Realizar el POST de Folio completo
            httpPostData("/desincorporaciones/datos-afectacion", folio_with_ref)
            .then(() =>{
              setRefresh(prevValRefr => {
                return prevValRefr + 1;
              });
              // Reseteamos modelos
              valuesDes = ModelDesincorporacion;
              valuesRef1 = ModelReferencias;   
              valuesRef2 = ModelReferencias;   
            });
            alert(`KILOMETRAJE INCUMPLIDO >: ${km}`);
            console.log(folio_with_ref);
          }          

        } else if (isValidFolio && isValidApo && isValidIncum) {
          // cuando en una afectación hay incumplimiento y cumplimiento
          const bothFilled = validateIncumByTramos(valuesRef1);
          /* 
            Validamos que el usuario solo haya llenado los tramos
            o las vueltas, pero no ambas.
          */
          if(bothFilled){
            swal("¿Tramos o vueltas?", "Los incumplimientos sólo pueden ser por tramos o por número de vueltas a la ruta, pero no ambas");
            console.log(valuesRef1);
          }else{
            // Si los tramos estan llenos entonces las vueltas van en ceros
             if(valuesRef1['tramo_desde']!=="-" && valuesRef1['tramo_hasta']!=="-"){
              valuesRef1['num_vuelta'] = '0';
              valuesRef1['num_ida'] = '0';
              valuesRef1['num_regreso'] = '0';
            }            
            // Se calccula el KM
            const km1 = setKilometrajeCalculado(valuesRef1);
            const km2 = setKilometrajeCalculado(valuesRef2);
            // Asignación de kilometraje
            valuesRef1["kilometraje"] = km1;
            valuesRef2["kilometraje"] = km2;
            // Tipo de folio
            valuesRef1["tipo"] = "Incumplido";
            valuesRef2["tipo"] = "Apoyo";
            // Combinamos los folio con sus referencias asociadas
            const folio_with_refs = [valuesDes,valuesRef1,valuesRef2];                   
            // Realizar POST de folio
            httpPostData("/desincorporaciones/datos-afectacion2", folio_with_refs)
            .then(() =>{
              setRefresh(prevValRefr => {
                return prevValRefr + 1;
              });
              // Reseteamos modelos
              resetDes(ModelDesincorporacion);
              resetRef1(ModelReferencias);
              resetRef2(ModelReferencias);   
            });               
            alert(`KILOMETRAJE INCUMPLIDO >: ${km1} \n KILOMETRAJE CUMPLIDO >: ${km2}`);
            console.log(folio_with_refs);                    
          }
        } else {
          CustomSwalEmptyFrom();
          // alert("Campos vacios");
        }        
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
                    <TabListasComponent 
                      refreshFolios={valRefrFolios}
                    />
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
                            flag={true}
                          />
                        </Grid>
                        <Grid item lg={6}>
                          <Referencia
                            titulo={"Cumplimientos"}
                            color={"#4caf50"}
                            valuesRef={valuesRef2}
                            handleInputChangeRef={handleInputChangeRef2}
                            resetRef={resetRef2}
                            flag={false}
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
                          flag={true}
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
                          flag={true}
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
              </CardActions>
            </form>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

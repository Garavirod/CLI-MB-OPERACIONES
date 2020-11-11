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
import { ModelIncorporacion } from "../../models/ModelsIncorporacion";
import Referencia from "./Referencia";
import { Link } from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import { useState } from "react";
import { validateForm } from "../../functions/validateFrom";
import { httpPostData } from "../../functions/httpRequest";
import swal from "sweetalert";
import {
  CustomSwalEmptyFrom,
  CustomSwalError,
} from "../../functions/customSweetAlert";
import { Ref } from "yup";
import { validateFormExcept } from "../../functions/validateFrom";
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

export const EditarFolio = () => {
  const classes = useStyles();
  const folioDesinc = JSON.parse(localStorage.getItem("folioDesincData"));
  let Ref1 = {};
  let Ref2 = {};
  // localStorage.removeItem("folioDesinc");
  console.log(folioDesinc);
  const {
    id: idFoliotoUpdate,
    credencial,
    economico,
    edoFolio,
    empresa,
    estacion,
    fecha,
    hora,
    informa,
    jornada,
    linea,
    motivo,
    nombre,
    observaciones,
    odometro,
    solicita,
    tipo,
    Cumplimiento_Incumplimientos,
  } = folioDesinc;

  //
  const DesIncData = {
    linea: linea,
    solicita: solicita,
    informa: informa,
    estacion: estacion,
    economico: economico,
    empresa: empresa,
    motivo: motivo,
    odometro: odometro,
    credencial: credencial,
    nombre: nombre,
    fecha: fecha,
    hora: hora,
    jornada: jornada,
    observaciones: observaciones,
    tipo: tipo,
    edoFolio: edoFolio,
  };

  const getReferecncias = (idx) => {
    const {
      kilometraje,
      num_ida,
      num_regreso,
      num_vuelta,
      ref_ida,
      ruta_referencia,
      tramo_desde,
      tramo_hasta,
      tipo,
    } = Cumplimiento_Incumplimientos[idx];

    const Ref = {
      ruta_referencia: ruta_referencia,
      ref_ida: ref_ida,
      num_ida: num_ida,
      num_vuelta: num_vuelta,
      num_regreso: num_regreso,
      tramo_desde: tramo_desde,
      tramo_hasta: tramo_hasta,
      tipo: tipo,
      kilometraje: kilometraje,
    };
    return Ref;
  };

  switch (tipo) {
    case "Incumplido":
      Ref1 = getReferecncias(0);
      break;
    case "Apoyo":
      Ref2 = getReferecncias(0);
    default:
      if (Cumplimiento_Incumplimientos.length > 1) {
        Ref1 = getReferecncias(0);
        Ref2 = getReferecncias(1);
      } else {
        Ref1 = getReferecncias(0);
      }
      break;
  }

  //   Modelo y estructura de una Desincorporación
  const [valuesDes, handleInputChangeDes, resetDes] = useForm(DesIncData);

  // // Modelo y estructura de una Referencia para un cumplimiento
  const [valuesRef1, handleInputChangeRef1, resetRef1] = useForm(Ref1);

  // // Modelo y estructura de una Referencia para un Incumplimiento
  let [valuesRef2, handleInputChangeRef2, resetRef2] = useForm(Ref2);

  const SendDataEdited = async (e) => {
    e.preventDefault();
    console.log(valuesDes);
    console.log(valuesRef1);
    console.log(valuesRef2);
    // Validamos el folio de la desincorporación
    const isValidFolio = validateFormExcept(valuesDes, ["observaciones"]);
    let isValidIncum,
      isValidApo = false;
    // validamos la referencia
    switch (tipo) {
      case "Incumplido":
        isValidIncum = validateForm(valuesRef1);
        if (isValidFolio && isValidIncum) {
          const km = setKilometrajeCalculado(valuesRef1);
          valuesRef1["kilometraje"] = km;
          valuesRef1["tipo"] = "Incumplido";
          // Combinamos el folio con la referencia asociada
          const folio_with_ref = { ...valuesDes, ...valuesRef1 };
          alert(`Kilometraje incumplido >: ${km}`);
          console.log(folio_with_ref);
          //Realizar el POST de Folio completo
          await httpPostData(
            `/desincorporaciones/update-folio-cumpinc/${idFoliotoUpdate}`,
            folio_with_ref
          ).then((resp) => {
            if (resp.success) {
              swal(
                "Información grabada",
                "Los cambios han sido actaulizados exitosamente",
                "success"
              ).then(() => {
                localStorage.removeItem("folioDesincData");
                window.location.assign("/reportes");
              });
            }
          })
          .catch(()=>{
            CustomSwalError();
          });
          
        } else {
          CustomSwalEmptyFrom();
        }
        break;
      case "Apoyo":
        isValidApo = validateForm(valuesRef2);
        if (isValidFolio && isValidApo) {
          const km = setKilometrajeCalculado(valuesRef2);
          valuesRef2["kilometraje"] = km;
          valuesRef2["tipo"] = "Apoyo";
          alert(`Kilometraje cumplido >: ${km}`);
          // combinamos el folio con la referencia asocaida
          const folio_with_ref = { ...valuesDes, ...valuesRef2 };
          console.log(folio_with_ref);
          //Realizar el POST de Folio completo
          await httpPostData(
            `/desincorporaciones/update-folio-cumpinc/${idFoliotoUpdate}`,
            folio_with_ref
          ).then((resp) => {
            if (resp.success) {
              swal(
                "Información grabada",
                "Los cambios han sido actaulizados exitosamente",
                "success"
              ).then(() => {
                localStorage.removeItem("folioDesincData");
                window.location.assign("/reportes");
              });
            }
          })
          .catch(()=>{
            CustomSwalError();
          });
        } else {
          CustomSwalEmptyFrom();
        }
        break;
      case "Afectación":
        isValidIncum = validateForm(valuesRef1);
        isValidApo = validateForm(valuesRef2);
        if (isValidFolio && !isValidApo && isValidIncum) {
          // cuando en una afectación sólo hay incumplimiento
          const km = setKilometrajeCalculado(valuesRef1);
          valuesRef1["kilometraje"] = km;
          valuesRef1["tipo"] = "Incumplido";
          // Combinamos el folio con la referencia asociada
          const folio_with_ref = { ...valuesDes, ...valuesRef1 };
          //Realizar el POST de Folio completo
          httpPostData("/desincorporaciones/datos-afectacion", folio_with_ref);
          alert(`Kilometraje incumplido >: ${km}`);
          console.log(folio_with_ref);
          localStorage.removeItem("folioDesincData");
        } else if (isValidFolio && isValidApo && isValidIncum) {
          // cuando en una afectación hay incumplimiento y cumplimiento
          const km1 = setKilometrajeCalculado(valuesRef1);
          const km2 = setKilometrajeCalculado(valuesRef2);
          // Asignación de kilometraje
          valuesRef1["kilometraje"] = km1;
          valuesRef2["kilometraje"] = km2;
          // Tipo de folio
          valuesRef1["tipo"] = "Incumplido";
          valuesRef2["tipo"] = "Apoyo";
          // Combinamos los folio con sus referencias asociadas
          const folio_with_refs = [valuesDes, valuesRef1, valuesRef2];
          // Realizar POST de folio
          httpPostData(
            "/desincorporaciones/datos-afectacion2",
            folio_with_refs
          );
          alert(`Kilometraje calculado >: Incum ${km1} Cump ${km2}`);
          console.log(folio_with_refs);
          localStorage.removeItem("folioDesincData");
        } else {
          CustomSwalEmptyFrom();
        }
        break;
      default:
        break;
    }
  };

  return (
    <Container maxWidth="lg" className={classes.conatiner}>
      <Card>
        <Grid container spacing={3}>
          <Grid item lg={12}>
            <Alert severity="warning">
              <Grid container spacing={2}>
                <Grid item lg={6}>
                  Usted está visualizando la infrormación del folio:{" "}
                  {idFoliotoUpdate}
                </Grid>
                <Grid item lg={6}>
                  <Typography
                    variant="h6"
                    component="h4"
                    className={classes.headerText}
                  >
                    <Link className="" to={"/reportes"}>
                      <ArrowBackIcon />
                      cerrar folio sin guardar
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Alert>
          </Grid>
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
              <form onSubmit={SendDataEdited}>
                <CardContent>
                  <Grid container spacing={2}>
                    {/* FORMULARIO DE DESINCORPORACIONES */}
                    <Grid item lg={6}>
                      <DesincorporacionComp
                        valuesDes={valuesDes}
                        handleInputChangeDes={handleInputChangeDes}
                        resetDes={resetDes}
                        active2={true}
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
                </CardActions>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

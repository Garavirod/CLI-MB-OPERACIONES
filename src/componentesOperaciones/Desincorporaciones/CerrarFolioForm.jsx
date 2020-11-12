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
import {httpPostData} from "../../functions/httpRequest";
import swal from 'sweetalert';
import { CustomSwalEmptyFrom } from "../../functions/customSweetAlert";


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
  
  const folioSt = JSON.parse(localStorage.getItem("folio"));
  const apoyo = JSON.parse(localStorage.getItem("apoyo"));
  const incumplimiento = JSON.parse(localStorage.getItem("incumplido"));


  const {id:idFolio}  = folioSt;
  const classes = useStyles();
  const [cumplimientos] = useState(apoyo);
  const [incumplimientos] = useState(incumplimiento);
  const [folio] = useState(folioSt);
  const { tipo } = folio;


  //Modelo y estructura de una Desincorporación
  const [valuesDes, handleInputChangeDes, resetDes] = useForm(folio);

  // Modelo y estructura de una Incorporación
  const [valuesInco, handleInputChangeInc, resetInc] = useForm(
    ModelIncorporacion
  );

  // Modelo y estructura de una Referencia para un cumplimiento
  const [valuesRef1, handleInputChangeRef1, resetRef1] = useForm(incumplimientos);

  // Modelo y estructura de una Referencia para un Incumplimiento
  const [valuesRef2, handleInputChangeRef2, resetRef2] = useForm(
    cumplimientos
  );

  const registraIncorporacion = async (e) => {
    const urlUpdate = "/desincorporaciones/update-desincorporacion";
    const urlIncorpora = `/desincorporaciones/datos-incorporacion/${idFolio}`;
    const urlDesinc = "/BitacordaDR";

    e.preventDefault();
    //console.log("values desinc");
    //console.log(valuesDes);
    console.log(valuesInco);
    const {edoFolio} = valuesDes;
    if(edoFolio === "Cerrado sin incorporar"){
      await httpPostData(urlUpdate, valuesDes)
        .then(resp =>{
            if(resp.success){
              swal("Información grabada", "Los cambios han sido grabados exitosamente", "success")
              .then(()=>{
                localStorage.removeItem("apoyo");
                localStorage.removeItem("incumplido");
                window.location.replace(urlDesinc);
              });
            }
        });//then
    }
    
    else if (edoFolio === "Cerrado" && validateForm(valuesInco)){
      console.log(valuesDes);
      console.log(valuesRef1);
      console.log(valuesRef2);
      console.log(valuesInco);
      await httpPostData(urlIncorpora, valuesInco)
      .then(resp =>{
        if(resp.success){
          swal("Información grabada", "Los cambios han sido grabados exitosamente", "success")
          .then(()=>{
            localStorage.removeItem("apoyo");
            localStorage.removeItem("incumplido");
            window.location.replace(urlDesinc);
          });
        }        
    });//then
      
    }else{
      CustomSwalEmptyFrom();
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
                      cerrar folio sin guardar
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
                          active1={true} //Deshabilitamos todos los campos 'Desincoporacion'
                          active2={true} //Deshabilita el campo 'Tipo'
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
                              active={true}
                            />

                            <Referencia
                              titulo={"Cumplimientos"}
                              color={"#4caf50"}
                              valuesRef={valuesRef2}
                              handleInputChangeRef={handleInputChangeRef2}
                              resetRef={resetRef2}
                              active={true}

                            />
                          </div>
                        ) : tipo === "Incumplido" ? (
                          <Referencia
                            titulo={"Incumplimientos"}
                            color={"#ef5350"}
                            valuesRef={valuesRef1}
                            handleInputChangeRef={handleInputChangeRef1}
                            resetRef={resetRef1}
                            active={true}

                          />
                        ) : tipo === "Apoyo" ? (
                          <Referencia
                            titulo={"Cumplimientos"}
                            color={"#4caf50"}
                            valuesRef={valuesRef2}
                            handleInputChangeRef={handleInputChangeRef2}
                            resetRef={resetRef2}
                            active={true}

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

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { CustomSwalErrorOnLoad } from "../../functions/customSweetAlert";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { ButtonGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { httpGetData } from "../../functions/httpRequest";


const useStyles = makeStyles((theme) => ({
  pagination: {
    margin: "auto",
    textAlign: "center",
  },
}));

export const Paginaton = (props) => {
  /* 
        Properties 
        
    */
  const { setData, setPreload, endpoint, refreshOnChange } = props;
  const [limit] = useState(15); //mínima catidad de registros a pedir
  const [skip, setSkip] = useState(0); //cantidad de saltos a pedir
  /* Botones de paginación */
  const [disabledNext, setDisabledNext] = useState(false);
  const [disabledPrev, setDisabledPrev] = useState(true);

  useEffect(() => {
    console.log("SKIPS >: ", skip);
    if (skip === 0) setDisabledPrev(true);
    else setDisabledPrev(false);
    getData();
  }, [skip, refreshOnChange]);

  // SKIPERS
  const Skip = (skp) => {
    switch (skp) {
      case "next":
        setSkip(skip + limit); //agrega al skip los siguientes elementos de la pagina
        break;
      case "prev":
        //si esta desbilitado el botón "Siguiente"
        if (disabledNext) {
          setSkip(skip - limit * 2); //Restamos 2 veces 'limit' por el último agregado
          setDisabledNext(false);
        } else {
          setSkip(skip - limit);
        }
        break;
      default:
        break;
    }
  };

  /* Función que se encarga de hacer la peticoón y asignar la data */
  const getData = async () => {
    /* Habilitamos preload si lo hay */    
    setPreload(true);
    //peticion de axios genérica por url
    const _data = await httpGetData(`${endpoint}?limit=${limit}&skip=${skip}`);
    if (_data.success) {
      if (_data.data.length !== 0) {
        //si hay datos
        setData(_data.data);
      } else {
        //si ya no hay más datos
        setDisabledNext(true); //Desabilitamos el botón de "siguiente"
      }
      setPreload(false);
    } else {
      CustomSwalErrorOnLoad();
    }
  };

  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item lg={12} className={classes.pagination}>
        <ButtonGroup disableElevation variant="contained" color="primary">
          <Button
            disabled={disabledPrev}
            onClick={() => Skip("prev")}
            startIcon={<ArrowBackIosIcon />}
          >
            Previo
          </Button>
          <Button
            disabled={disabledNext}
            onClick={() => Skip("next")}
            endIcon={<ArrowForwardIosIcon />}
          >
            Siguiente
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

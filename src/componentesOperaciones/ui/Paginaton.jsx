import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState, useEffect } from "react";
import { CustomSwalErrorOnLoad } from "../../functions/customSweetAlert";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { ButtonGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { httpGetData } from "../../functions/httpRequest";

const maxElements = 15;

const useStyles = makeStyles((theme) => ({
  pagination: {
    margin: "auto",
    textAlign: "center",
  },
}));

export const Paginaton = (props) => {
  /* 
        Properties 
        setData: asigandor de datos al state del compoennete padre

        setPreload: habilita el preload del componente padre al hacer consulta

        endpoit: url raíz de la peitción GET

        refreshOnChange: Variable del state que indiqua si hubo elimancion o nuevo registro
        de haber cambio se vuele a realizar la petición GET

        
    */
  const { setData, setPreload, endpoint, refreshOnChange } = props;
  const [page, setPage] = useState(1); //página a pedir

  /* Botones de paginación */
  const [disabledNext, setDisabledNext] = useState(false);
  const [disabledPrev, setDisabledPrev] = useState(true);

  useEffect(() => {
    getData();
  }, [page, refreshOnChange]);

  // SKIPERS
  const handlePages = (skp) => {
    switch (skp) {
      case "next":
        setPage(lastPage => lastPage += 1);
        break;
      case "prev":
          setPage(lastPage => lastPage -= 1);
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
    const _data = await httpGetData(`${endpoint}?page=${page}&&max=${maxElements}`);
    if (_data.success) {
      const numItemsInQuery = _data.data.length;
      const totalCount = _data.count;
      if ( numItemsInQuery !== 0)
      {
        // Si ya es lo último
        if( (page * maxElements) >= totalCount)
        {
          setDisabledNext(true); //No permitir que incrementen los saltos
        }
        //está esta validación para que no tnga que re-render si ya está en false
        else if(disabledNext)
        {
          setDisabledNext(false);
        }
        if(page == 1)
        {
          setDisabledPrev(true);
        }
        if(page > 1 && disabledPrev)
        {
          setDisabledPrev(false);
        }
        //si hay datos
        setData(_data.data);
      }
      else
      {
        console.log("entra a ya no hay más datos");
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
            onClick={() => handlePages("prev")}
            startIcon={<ArrowBackIosIcon />}
          >
            Previo
          </Button>
          <Button
            disabled={disabledNext}
            onClick={() => handlePages("next")}
            endIcon={<ArrowForwardIosIcon />}
          >
            Siguiente
          </Button>
        </ButtonGroup>
      </Grid>
    </Grid>
  );
};

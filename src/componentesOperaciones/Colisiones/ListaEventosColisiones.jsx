import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { CustomSwalDelete } from "../../functions/customSweetAlert";
import { httpGetData } from "../../functions/httpRequest";
import { PreloadData } from "../ui/PreloadData";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import RowColision from "./RowColision";
import { CustomSwalErrorOnLoad } from "../../functions/customSweetAlert";
import { ButtonGroup } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  pagination: {
    margin: "auto",
    textAlign: "center",
  },
  table: {
    minWidth: 650,
  },
}));

export default function ListaEventos() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [preload, setPreload] = useState(true);
  //state para que useEffect se lance cada que haya un delete
  const [valueToRefresh, setValToRef] = useState(true);
  //
  const [limit] = useState(15); //mínima catidad de registros a pedir
  const [skip, setSkip] = useState(0); //cantidad de saltos a pedir
  /* Botones de paginación */
  const [disabledNext, setDisabledNext] = useState(false);
  const [disabledPrev, setDisabledPrev] = useState(true);


  // nextSkip
  const Skip = (skp) =>{
    switch (skp) {
      case 'next':
        setSkip(skip + limit);             
        break;
      case 'prev':
        if(disabledNext){ //si esta desbilitado el botón "Siguiiente"
          setSkip(skip - (limit*2)); //Restamos 2 veces 'limit' por el último agregado   
          setDisabledNext(false);
        }else{
          setSkip(skip - limit);                        
        }
        break;
      default:
        break;
    }
  }

  useEffect(() => {
    getEventos();
  }, [valueToRefresh]);
  
  useEffect(() => {    
    console.log("SKIPS >: ",skip);
    if(skip===0)
      setDisabledPrev(true);
    else
      setDisabledPrev(false);
    getEventos();
  }, [skip]);

  const getEventos = async () => {
    setPreload(true);
    const url = `/colisiones/colisiones-list?limit=${limit}&skip=${skip}`;
    //peticion de axios genérica por url
    const _data = await httpGetData(url);    
    if (_data.success) {      
      if(_data.data.length !== 0){ //si hay datos
        setData(_data.data);
      }else{ //si ya no hay más datos       
        setDisabledNext(true); //Desabilitamos el botón de "siguiente"
      }
      setPreload(false);
    } else {
      CustomSwalErrorOnLoad();
    }
  };

  const deleteEvento = async (idevento) => {
    const url = `/colisiones/delete-colision/${idevento}`;
    CustomSwalDelete(url).then(() => {
      setValToRef((prevVal) => !prevVal);
    });
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={6}>
          <Link to={`/colisiones-form`}>Nuevo evento de colisión</Link>
        </Grid>
        <Grid item lg={12}>
          <Typography component="div" variant="h4">
            <Box textAlign="center" m={1}>
              <PreloadData isVisible={preload} />
            </Box>
          </Typography>
        </Grid>
        <Grid item lg={12}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Agregar Registro</TableCell>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">Fecha</TableCell>
                  <TableCell align="center">Hora</TableCell>
                  <TableCell align="center">Sentido</TableCell>
                  <TableCell align="center">Motivo</TableCell>
                  <TableCell align="center">Intersección</TableCell>
                  <TableCell align="center">Colonia</TableCell>
                  <TableCell align="center">Borrar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <RowColision
                    key={row.id}
                    row={row}
                    deleteEvento={deleteEvento}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Grid item lg={12} className={classes.pagination}>
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button disabled={disabledPrev} onClick={()=>Skip("prev")} startIcon={<ArrowBackIosIcon />}>Previo</Button>
            <Button disabled={disabledNext} onClick={()=>Skip("next")} endIcon={<ArrowForwardIosIcon />}>Siguiente</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </div>
  );
}

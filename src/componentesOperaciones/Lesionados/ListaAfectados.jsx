import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import { useParams, Link } from "react-router-dom";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import { CustomSwalDelete } from "../../functionsOperaciones/customSweetAlert";
import { httpGetData } from "../../functionsOperaciones/httpRequest";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { PreloadData } from "../ui/PreloadData";
const useStyles = makeStyles({
  gridRoot: {
    flexGrow: 1,
  },
  table: {
    minWidth: 650,
  },
});

export default function ListaAfectados() {
  const classes = useStyles();
  // Parametros por url
  const { idEvento } = useParams();

  // Preload
  const [preload, setPreload] = useState(true);
  
  const [data, setData] = useState([]);
  useEffect(() => {
    getAfectados();
  }, []);

  const getAfectados = async () => {
    const url = `/lesionados/afectados/${idEvento}`;
    //peticion de axios genérica por url
    const _data = await httpGetData(url);
    if (_data.success){
      setData(_data.data);
      setPreload(false);
    } 
  };

  const deleteEvento = async (afectado) => {
    const url = `/lesionados/borra-afectado/${afectado}`;
    CustomSwalDelete(url).then(() => {
      getAfectados();
    });
  };

  const validaSexo = (sex) => {
    if (sex === true) return "Masculino";
    else return "Femenino";
  };
  const validaEstado = (stat) => {
    if (stat === true) return "Vivo";
    else return "Muerto";
  };

  return (
    <div className={classes.gridRoot}>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <h4>Lista de afectados registrados en el evento {idEvento}</h4>
        </Grid>
        <Grid item lg={6}>
          <Link to={`/add-register/${idEvento}`}>Registrar afectado o seguro</Link>
        </Grid>
        <Grid item lg={6}>
          <Link to={"/eventos"}>Lista de eventos</Link>
        </Grid>
        <Grid item lg={12}>
        <Typography component="div" variant="h4">
          <Box textAlign="center" m={1}>
            <PreloadData isVisible={preload} />
          </Box>
        </Typography>
        </Grid>
        <Grid item lg={12}>
          <TableContainer
            component={Paper}
            className="animate__animated animate__fadeIn"
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">Nombre</TableCell>
                  <TableCell align="center">Edad</TableCell>
                  <TableCell align="center">Género</TableCell>
                  <TableCell align="center">Estado</TableCell>
                  <TableCell align="center">Evento</TableCell>
                  <TableCell align="center">Agregar traslado</TableCell>
                  <TableCell align="center">Borrar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.nombre}</TableCell>
                    <TableCell align="center">{row.edad}</TableCell>
                    <TableCell align="center">{validaSexo(row.sexo)}</TableCell>
                    <TableCell align="center">
                      {validaEstado(row.status)}
                    </TableCell>
                    <TableCell align="center">{row.fk_evento}</TableCell>
                    <TableCell align="center">
                      <Link
                        className=""
                        to={`/add-register-traslado/${row.id}/${idEvento}`}
                      >
                        <IconButton aria-label="add">
                          <AirportShuttleIcon />
                        </IconButton>
                      </Link>
                    </TableCell>
                    <TableCell align="center">
                      {
                        <IconButton
                          aria-label="delete"
                          onClick={() => deleteEvento(row.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
}

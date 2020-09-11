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
import CreateIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";
import { Link } from "react-router-dom";
import { CustomSwalDelete } from "../../functions/customSweetAlert";
import { httpGetData } from "../../functions/httpRequest";
import { PreloadData } from "../ui/PreloadData";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ListaEventos() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [preload, setPreload] = useState("visible");
  useEffect(() => {
    getEventos();
  }, []);

  const getEventos = async () => {
    const url = "/lesionados/eventos";
    //peticion de axios genérica por url
    const _data = await httpGetData(url);
    if (_data.success) {
      setData(_data.data);
      setPreload("hidden");
    }
  };

  const deleteEvento = async (idevento) => {
    const url = `/lesionados/borra-evento/${idevento}`;
    CustomSwalDelete(url).then(() => {
      getEventos();
    });
  };

  const tipoIncident = (incident) => {
    return incident === true ? "Autobús" : "Estación";
  };

  return (
    <div>
      <Grid container spacing={3}>
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
                  <TableCell>ID</TableCell>
                  <TableCell align="center">Fecha</TableCell>
                  <TableCell align="center">Hora</TableCell>
                  <TableCell align="center">Tipo incidente</TableCell>
                  <TableCell align="center">Incidente</TableCell>
                  <TableCell align="center">Tramo</TableCell>
                  <TableCell align="center">Operador</TableCell>
                  <TableCell align="center">Bitacora</TableCell>
                  <TableCell align="center">Descripcion</TableCell>
                  <TableCell align="center">Borrar</TableCell>
                  <TableCell align="center">Agregar registro</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">
                      {row.fecha.substr(8, 2) +
                        "-" +
                        row.fecha.substr(5, 2) +
                        "-" +
                        row.fecha.substr(0, 4)}
                    </TableCell>
                    <TableCell align="center">
                      {row.hora.substr(0, 5)}
                    </TableCell>
                    <TableCell align="center">
                      {tipoIncident(row.tipo_incidente)}
                    </TableCell>
                    <TableCell align="center">{row.incidente}</TableCell>
                    <TableCell align="center">{row.tramo}</TableCell>
                    <TableCell align="center">{row.operador}</TableCell>
                    <TableCell align="center">{row.bitacora}</TableCell>
                    <TableCell align="center">{row.descripcion}</TableCell>
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
                    <TableCell align="center">
                      <Link className="" to={`/add-register/${row.id}`}>
                        <IconButton aria-label="add">
                          <CreateIcon />
                        </IconButton>
                      </Link>
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

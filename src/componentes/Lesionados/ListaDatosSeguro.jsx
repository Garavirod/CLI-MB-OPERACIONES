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
import { useParams, Link } from "react-router-dom";
import { CustomSwalDelete } from "../../functions/customSweetAlert";
import { httpGetData } from "../../functions/httpRequest";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ListadatosSeguros() {
  const classes = useStyles();
  const { idEvento } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    getdatosSeguros();
  }, []);

  const getdatosSeguros = async () => {
    const url = `/lesionados/datoseguros/${idEvento}`;
    //peticion de axios genérica por url
    const _data = await httpGetData(url);
    if (_data.success) {
      setData(_data.data);
    }
  };

  const deleteEvento = async (datosSeguro) => {
    const url = `/lesionados/borra-datos-seguro/${datosSeguro}`;
    CustomSwalDelete(url).then(() => {
      getdatosSeguros();
    });
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <h4>Lista de seguros registardos en el evento {idEvento}</h4>
        </Grid>
        <Grid item lg={6}>
          <Link to={`/add-register/${idEvento}`}>Registar seguro u afectado</Link>
        </Grid>
        <Grid item lg={6}>
          <Link to={"/eventos"}>Lista de eventos</Link>
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
                  <TableCell align="center">Hora</TableCell>
                  <TableCell align="center">Tiempo Respuesta</TableCell>
                  <TableCell align="center">Seguro</TableCell>
                  <TableCell align="center">Corresponde</TableCell>
                  <TableCell align="center">Nombre Ajustador</TableCell>
                  <TableCell align="center">Unidad Seguro</TableCell>
                  <TableCell align="center">Borrar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.horaArribo}</TableCell>
                    <TableCell align="center">{row.tiempoRespuesta}</TableCell>
                    <TableCell align="center">{row.seguro}</TableCell>
                    <TableCell align="center">{row.corresponde}</TableCell>
                    <TableCell align="center">{row.nombreAjustador}</TableCell>
                    <TableCell align="center">{row.unidadSeguro}</TableCell>
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

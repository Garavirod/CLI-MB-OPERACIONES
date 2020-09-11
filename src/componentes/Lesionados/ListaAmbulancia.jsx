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
import { useParams } from "react-router-dom";
import { httpGetData } from "../../functions/httpRequest";
import { CustomSwalDelete } from "../../functions/customSweetAlert";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ListaAmbulancia() {
  const classes = useStyles();

  const { idEvento } = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    getAmbulancias();
  }, []);

  const getAmbulancias = async () => {
    const url = `/lesionados/datosambulancias/${idEvento}`;
    //peticion de axios genérica por url
    const _data = await httpGetData(url);
    if (_data.success) setData(_data.data);
  };

  const deleteAmbulanica = async (evento) => {
    const url = `/lesionados/borra-datos-ambulancia/${evento}`;
    CustomSwalDelete(url).then(()=>getAmbulancias());        
  };

  return (
    <TableContainer component={Paper} className="animate__animated animate__fadeIn">
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Tiempo Llegada</TableCell>
            <TableCell align="center">Tiempo Respuesta</TableCell>
            <TableCell align="center">Ambulancia</TableCell>
            <TableCell align="center">Economico Ambulancia</TableCell>
            <TableCell align="center">Paramedico</TableCell>
            <TableCell align="center">Diagnóstico</TableCell>
            <TableCell align="center">Borrar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">
                {row.tiempoLLegada.substr(0, 5)}
              </TableCell>
              <TableCell align="center">
                {row.tiempoRespuesta.substr(0, 5)}
              </TableCell>
              <TableCell align="center">{row.ambulancia}</TableCell>
              <TableCell align="center">{row.ecoPlaca}</TableCell>
              <TableCell align="center">{row.paramedico}</TableCell>
              <TableCell align="center">{row.diagnostico}</TableCell>
              <TableCell align="center">
                {
                  <IconButton
                    aria-label="delete"
                    onClick={() => deleteAmbulanica(row.id)}
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
  );
}

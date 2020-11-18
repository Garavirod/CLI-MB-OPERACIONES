import React, { useState, useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { httpGetData } from "../../functions/httpRequest";
import { CustomSwalDelete } from "../../functions/customSweetAlert";
import Grid from "@material-ui/core/Grid";
import { PreloadData } from "../ui/PreloadData";

export default function ListaTraslado(props) {
  const { idEvento, reloadAfectado } = props;
  const [data, setData] = useState([]);

  // Preload
  const [preload, setPreload] = useState(true);

  useEffect(() => {
    getTraslados();
  }, [reloadAfectado]);

  const getTraslados = async () => {
    const url = `/lesionados/traslados/${idEvento}`;
    //peticion de axios genérica por url
    const _data = await httpGetData(url);
    if (_data.success){
      setData(_data.data);
      setPreload(false);
    } 
  };

  const deleteTraslado = async (traslado) => {
    const url = `/lesionados/borra-traslado-hospital/${traslado}`;
    CustomSwalDelete(url).then(() => getTraslados());
  };

  return (
    <div>
      <Grid container spacing={3}>        
        <PreloadData isVisible={preload} />
        <Grid item lg={12}>
          <TableContainer
            component={Paper}
            className="animate__animated animate__fadeIn"
          >
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center">Nombre hospital</TableCell>
                  <TableCell align="center">Pase medico</TableCell>
                  <TableCell align="center">Eliminar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.nombreHospital}</TableCell>
                    <TableCell align="center">{row.paseMedico}</TableCell>
                    <TableCell align="center">
                      {
                        <IconButton
                          aria-label="delete"
                          onClick={() => deleteTraslado(row.id)}
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

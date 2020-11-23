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

export default function ListaAmbulancia(props) {
  const { idEvento,reloadAmbulancia, setReloadAmbulancia } = props;

  // Preload
  const [preload, setPreload] = useState(true);

  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("Cambio ambulacia en la lista", reloadAmbulancia);
    getAmbulancias();
  }, [reloadAmbulancia]);

  const getAmbulancias = async () => {
    const url = `/lesionados/datosambulancias/${idEvento}`;
    //peticion de axios genérica por url
    setPreload(true);
    const _data = await httpGetData(url);
    if (_data.success) {
      setData(_data.data);
      setPreload(false);
    }
  };

  const deleteAmbulanica = async (idAmbulancia) => {
    const url = `/lesionados/borra-datos-ambulancia/${idAmbulancia}`;    
    CustomSwalDelete(url).then(
      () => {setReloadAmbulancia(callback=>!callback)}
    );
  };

  return (
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
                <TableRow key={row.id}>
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
      </Grid>
    </Grid>
  );
}

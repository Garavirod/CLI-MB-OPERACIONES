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
import { CustomSwalDelete, CustomSwalErrorOnLoad } from "../../functions/customSweetAlert";
import Grid from "@material-ui/core/Grid";
import { PreloadData } from "../ui/PreloadData";

export default function ListaTraslado(props) {
  const { idEvento, reloadAfectado, reloadTraslado, setReloadTraslado } = props;
  const [data, setData] = useState([]);

  // Preload
  const [preload, setPreload] = useState(true);

  useEffect(() => {
    console.log("Cambio el traslado en la lista", reloadAfectado);
    getTraslados();
  }, [reloadAfectado,reloadTraslado]);

  const getTraslados = async () => {
    const url = `/lesionados/traslados/${idEvento}`;
    //peticion de axios genérica por url
    setPreload(true);
    const _data = await httpGetData(url);
    if (_data && _data.success){
      setData(_data.data);
      setPreload(false);
    }
    else
      CustomSwalErrorOnLoad("Error al cargar traslados");
  };

  const deleteTraslado = async (traslado) => {
    const url = `/lesionados/borra-traslado-hospital/${traslado}`;      
    CustomSwalDelete(url).then(() => 
      setReloadTraslado(callback=>!callback)
    );
    
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

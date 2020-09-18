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
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { PreloadData } from "../ui/PreloadData";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ListaDatosAutomovil() {
  const classes = useStyles();
  const { idEvento } = useParams();

    // Preload
    const [preload, setPreload] = useState(true);

  const [data, setData] = useState([]);
  useEffect(() => {
    getdatosAutomovil();
  }, []);

  const getdatosAutomovil = async () => {
    const url = `/colisiones/automovil-list/${idEvento}`;
    //peticion de axios genérica por url
    const _data = await httpGetData(url);
    if (_data.success){
      setData(_data.data);
      setPreload(false);
    }
  };

  const deleteAutomovil = async (idAutomovil) => {
    const url = `/colisiones/delete-automovil/${idAutomovil}`;
    CustomSwalDelete(url).then(() => {
      getdatosAutomovil();
    });
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <h4>Lista de seguros registrados en el evento de colisión No. {idEvento}</h4>
        </Grid>
        <Grid item lg={6}>
          <Link to={`/add-registerColisiones/${idEvento}`}>Registar seguro o afectado de colisiones</Link>
        </Grid>
        <Grid item lg={6}>
          <Link to={"/eventosColisiones"}>Lista de eventos colisiones</Link>
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
                  <TableCell align="center">Género</TableCell>
                  <TableCell align="center">Marca</TableCell>
                  <TableCell align="center">Submarca</TableCell>
                  <TableCell align="center">Color</TableCell>
                  <TableCell align="center">Placa</TableCell>
                  <TableCell align="center">Borrar</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell align="center">{row.sexo_contuctor}</TableCell>
                    <TableCell align="center">{row.marca}</TableCell>
                    <TableCell align="center">{row.submarca}</TableCell>
                    <TableCell align="center">{row.color}</TableCell>
                    <TableCell align="center">{row.placa}</TableCell>
                    <TableCell align="center">
                      {
                        <IconButton
                          aria-label="delete"
                          onClick={() => deleteAutomovil(row.id)}
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

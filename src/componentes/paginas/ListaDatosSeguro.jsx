import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];




export default function ListadatosSeguros() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  useEffect(() => {
    getdatosSeguros();
  }, []);


  const getdatosSeguros = async ()=>{
    const url ="http://localhost:5000/colisiones/datoseguros";
    axios.get(url)
    .then(res=>{
        setData(res.data.data);
        console.log("ESTA EL DATA RECUPERADA",res.data);
    })
    .catch(err=>{
        console.log("Error en en la petición >:", err);
    });
}

  const deleteEvento = async (datosSeguro)=>{
    const url = `http://localhost:5000/colisiones/borra-datos-seguro/${datosSeguro}`;
    axios.delete(url)
    .then(res =>{
      console.log("delete: " + res);
      getdatosSeguros();
    })
  }


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="center">Hora</TableCell>
            <TableCell align="center">Tiempo Respuesta</TableCell>
            <TableCell align="center">Seguro</TableCell>
            <TableCell align="center">Corresponde</TableCell>
            <TableCell align="center">Nombre Ajustador</TableCell>
            <TableCell align="center">Unidad Seguro</TableCell>
            

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.horaArribo}</TableCell>
              <TableCell align="center">{row.tiempoRespuesta}</TableCell>
              <TableCell align="center">{row.seguro}</TableCell>
              <TableCell align="center">{row.corresponde}</TableCell>
              <TableCell align="center">{row.nombreAjustador}</TableCell>
              <TableCell align="center">{row.unidadSeguro}</TableCell>
              <TableCell align="center">{<IconButton aria-label="delete" onClick={() =>deleteEvento(row.id)} ><DeleteIcon /></IconButton>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
  );
}

import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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




export default function ListaEventos() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  useEffect(() => {
    getEventos();
  }, []);


  const getEventos = async ()=>{
    const url ="http://localhost:5000/colisiones/eventos";
    axios.get(url)
    .then(res=>{
        setData(res.data.data);
        console.log("ESTA EL DATA RECUPERADA",res.data);
    })
    .catch(err=>{
        console.log("Error en en la petición >:", err);
    });
}


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Hora</TableCell>
            <TableCell align="right">Tipo incidente</TableCell>
            <TableCell align="right">Incidente</TableCell>
            <TableCell align="right">Tramo</TableCell>
            <TableCell align="right">Operador</TableCell>
            <TableCell align="right">Bitacora</TableCell>
            <TableCell align="right">Descripcion</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{row.fecha}</TableCell>
              <TableCell align="right">{row.hora}</TableCell>
              <TableCell align="right">{row.tipo_incidente}</TableCell>
              <TableCell align="right">{row.incidente}</TableCell>
              <TableCell align="right">{row.tramo}</TableCell>
              <TableCell align="right">{row.operador}</TableCell>
              <TableCell align="right">{row.bitacora}</TableCell>
              <TableCell align="right">{row.descripcion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

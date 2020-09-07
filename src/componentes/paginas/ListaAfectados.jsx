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
import { useParams, Link } from "react-router-dom";
import AirportShuttleIcon from '@material-ui/icons/AirportShuttle';
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




export default function ListaAfectados() {
  const classes = useStyles();

  const {idEvento} = useParams();

  const [data, setData] = useState([]);
  useEffect(() => {
    getAfectados();
  }, []);


  const getAfectados = async ()=>{
    const url =`http://localhost:5000/lesionados/afectados/${idEvento}`;
    axios.get(url)
    .then(res=>{
        setData(res.data.data);
        console.log("ESTA EL DATA RECUPERADA",res.data);
    })
    .catch(err=>{
        console.log("Error en en la petición >:", err);
    });
}

  const deleteEvento = async (afectado)=>{
    const url = `http://localhost:5000/lesionados/borra-afectado/${afectado}`;
    axios.delete(url)
    .then(res =>{
      console.log("delete: " + res);
      getAfectados();
    })
  }

  const validaSexo = (sex)=>{
    if (sex==true)
   return "Masculino"
    else
    return "Femenino" 
  }
  const validaEstado = (stat)=>{
    if (stat==true)
   return "Vivo"
    else
    return "Muerto" 
  }


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
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
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.nombre}</TableCell>
              <TableCell align="center">{row.edad}</TableCell>
              <TableCell align="center">{ validaSexo(row.sexo)}</TableCell>
              <TableCell align="center">{ validaEstado(row.status)}</TableCell>
              <TableCell align="center">{row.fk_evento}</TableCell>
              <TableCell align="center">
              <Link className="" to={`/add-register-traslado/${row.id}/${idEvento}`}> 
                  <IconButton aria-label="add"><AirportShuttleIcon /></IconButton>
                </Link>
              </TableCell>
              <TableCell align="center">{<IconButton aria-label="delete" onClick={() =>deleteEvento(row.id)} ><DeleteIcon /></IconButton>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
  );
}

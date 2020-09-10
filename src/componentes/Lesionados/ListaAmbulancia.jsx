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
import { useParams } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function ListaAmbulancia() {
  const classes = useStyles();

  const {idEvento} = useParams();
  
  const [data, setData] = useState([]);
  useEffect(() => {
    getAmbulancias();
  }, []);


  const getAmbulancias = async ()=>{
    const url =`/lesionados/datosambulancias/${idEvento}`;
    axios.get(url)
    .then(res=>{
        setData(res.data.data);
        console.log("ESTA EL DATA RECUPERADA",res.data);
    })
    .catch(err=>{
        console.log("Error en en la petición >:", err);
    });
}

  const deleteAmbulanica = async (evento)=>{
    const url = `/lesionados/borra-datos-ambulancia/${evento}`;
    axios.delete(url)
    .then(res =>{
      console.log("delete: " + res);
      getAmbulancias();
    })
  }


  return (
    <TableContainer component={Paper}>
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
              <TableCell align="center">{row.tiempoLLegada.substr(0,5)}</TableCell>
              <TableCell align="center">{row.tiempoRespuesta.substr(0,5)}</TableCell>
              <TableCell align="center">{row.ambulancia}</TableCell>
              <TableCell align="center">{row.ecoPlaca}</TableCell>
              <TableCell align="center">{row.paramedico}</TableCell>
              <TableCell align="center">{row.diagnostico}</TableCell>
              <TableCell align="center">{<IconButton aria-label="delete" onClick={() =>deleteAmbulanica(row.id)} ><DeleteIcon /></IconButton>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
  );
}

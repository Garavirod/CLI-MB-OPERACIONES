import React, { useEffect, useState } from 'react';
import Table from "@material-ui/core/Table";
import { useParams, Link } from 'react-router-dom';
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { httpGetData } from "../../functions/httpRequest";
import { CustomSwalError, CustomSwalDelete } from "../../functions/customSweetAlert";
import { PreloadData } from '../ui/PreloadData';

function ListaEconomicoColisiones(){
    const { idEvento } = useParams();
    
    // Preload
    const [preload, setPreload] = useState(true);
    //state para que useEffect se lance cada que haya un delete
    const [valueToRefresh, setValToRef] = useState(true);
    
    const [data, setData] = useState([]);

    const getEconomicosColisionados = async () => {
        const url = `/colisiones/economico-list/${idEvento}`;

        //peticion de axios genérica por url
        const _data = await httpGetData(url);
        if (_data && _data.success){
          setData(_data.data);
          setPreload(false);
        }
        else{
            CustomSwalError();
        }
    }//getEconomicosColisionados

    const deleteEconomico = async (idEconomico) => {
        const url = `/colisiones/delete-economico/${idEconomico}`;
        CustomSwalDelete(url).then(() => {
            setValToRef(prevVal => !prevVal);
        });
      };

    useEffect(() => {
        getEconomicosColisionados();
    }, [valueToRefresh]);


    return (
        <div>
            <Grid container spacing={2}>
                <Grid item lg={12}>
                <h4>Lista de económicos colisionados reigstrados en el evento de colisión No. {idEvento}</h4>
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
                                    <TableCell align="center">Empresa</TableCell>
                                    <TableCell align="center">Económico</TableCell>
                                    <TableCell align="center">Borrar</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {data.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell component="th" scope="row">
                                        {row.id}
                                    </TableCell>
                                    <TableCell align="center">{row.empresa}</TableCell>
                                    <TableCell align="center">{row.economico}</TableCell>
                                    <TableCell align="center">
                                    {
                                        <IconButton
                                            aria-label="delete"
                                            onClick={() => deleteEconomico(row.id)}
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
}//ListaEconomicoColisiones

export default ListaEconomicoColisiones;
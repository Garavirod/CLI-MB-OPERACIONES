import React, { useState } from 'react';
import { Link } from "react-router-dom";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Collapse from '@material-ui/core/Collapse';

import { Box } from '@material-ui/core';
import { AddRegisterEventColisiones } from './AddRegisterEventColisiones';

function RowColision(props){
    
    const {row} = props;
    const [open, setOpen] = useState(false);

    return(
        <React.Fragment>
            <TableRow key={row.id}>
                <TableCell align="center">
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                    {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.id}
                </TableCell>
                <TableCell align="center">
                    {row.fecha.substr(8, 2) +
                    "-" +
                    row.fecha.substr(5, 2) +
                    "-" +
                    row.fecha.substr(0, 4)}
                </TableCell>
                <TableCell align="center">
                    {row.hora.substr(0, 5)}
                </TableCell>
                <TableCell align="center">{row.sentido}</TableCell>
                <TableCell align="center">{row.motivo}</TableCell>
                <TableCell align="center">{row.interseccion}</TableCell>
                <TableCell align="center">{row.colonia}</TableCell>
                <TableCell align="center">
                    {
                    <IconButton
                        aria-label="delete"
                        onClick={() => props.deleteEvento(row.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                    }
                </TableCell>
                {/*<TableCell align="center">
                    <Link className="" to={`/add-registerColisiones/${row.id}`}>
                    <IconButton aria-label="add">
                        <CreateIcon />
                    </IconButton>
                    </Link>
                </TableCell>*/}
            </TableRow>
            
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={9}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box>
                            <AddRegisterEventColisiones idColision={row.id}/>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
        
    );
}//RowColision

export default RowColision;
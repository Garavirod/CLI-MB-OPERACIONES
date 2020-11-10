import React from "react";
import { makeStyles, hslToRgb } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useState, useEffect } from "react";
import EditIcon from '@material-ui/icons/Edit';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(data) {
  const {
    id,
    empresa,
    hora,
    jornada,
    estacion,
    linea,
    motivo,
    observaciones,
  } = data;
  const { Cumplimiento_Incumplimientos } = data;
  return {
    id,
    empresa,
    hora,
    jornada,
    estacion,
    linea,
    motivo,
    observaciones,
    history: [Cumplimiento_Incumplimientos],
  };
}

function Row(props) {
  const { row, tipoRegistro } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.id}
        </TableCell>
        <TableCell>{row.empresa}</TableCell>
        <TableCell>{row.hora}</TableCell>
        <TableCell>{row.jornada}</TableCell>
        <TableCell>{row.motivo}</TableCell>
        <TableCell>{row.linea}</TableCell>
        <TableCell>{row.estacion}</TableCell>
        <TableCell>{row.observaciones}</TableCell>
        <TableCell align="center">
          <Link className="" to={`/add-registerColisiones/${row.id}`}>
            <IconButton aria-label="add">
              <EditIcon />
            </IconButton>
          </Link>

          <Link className="" to={`/add-registerColisiones/${row.id}`}>
            <IconButton aria-label="add">
              <DeleteIcon />
            </IconButton>
          </Link>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                {tipoRegistro}
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Ruta referencia</TableCell>
                    <TableCell>Tipo</TableCell>
                    <TableCell>Tramo desde</TableCell>
                    <TableCell>Tramo hasta</TableCell>
                    <TableCell>Dirección</TableCell>
                    <TableCell>Número de vuletas</TableCell>
                    <TableCell>Número de idas</TableCell>
                    <TableCell>Número de regresos</TableCell>
                    <TableCell>Kilometraje (Km)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyDate) => (
                    <React.Fragment key={row.history.indexOf(historyDate)}>
                      {historyDate.map((hs) => (
                        <TableRow key={hs.id}>
                          <TableCell component="th" scope="row">
                            {hs.ruta_referencia}
                          </TableCell>
                          <TableCell>{hs.tipo}</TableCell>
                          <TableCell>{hs.tramo_desde}</TableCell>
                          <TableCell>{hs.tramo_hasta}</TableCell>
                          <TableCell>{hs.ref_ida}</TableCell>
                          <TableCell>{hs.num_vuelta}</TableCell>
                          <TableCell>{hs.num_ida}</TableCell>
                          <TableCell>{hs.num_regreso}</TableCell>
                          <TableCell>{hs.kilometraje}</TableCell>
                        </TableRow>
                      ))}
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function TableDataRegistros(props) {
  const { dataRegistros, tipoRegistro = "registro" } = props;
  const [rows, setRows] = useState([]);
  useEffect(() => {
    FillRows();
  }, [dataRegistros]);

  const FillRows = () => {
    let r = [];
    dataRegistros.forEach((element) => {
      r.push(createData(element));
    });
    setRows(r);
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Folio</TableCell>
            <TableCell>Empresa</TableCell>
            <TableCell>Hora</TableCell>
            <TableCell>Jornada</TableCell>
            <TableCell>Motivo</TableCell>
            <TableCell>Linea</TableCell>
            <TableCell>Estación</TableCell>
            <TableCell>Observación</TableCell>
            <TableCell>Controles</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} tipoRegistro={tipoRegistro} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

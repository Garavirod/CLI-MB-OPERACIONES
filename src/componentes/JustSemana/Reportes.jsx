import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Button from '@material-ui/core/Button';
import ModalList from './ModalList';

const incum = [
  {datos:'INCUMPLE PARQUE HUNDIDO A INDIOS VERDES', costo:4.18},
  {datos:'INCUMPLE PARQUE HUNDIDO A INDIOS VERDES', costo:4.18},
  {datos:'INCUMPLE PARQUE HUNDIDO A INDIOS VERDES', costo:4.18},
  {datos:'INCUMPLE PARQUE HUNDIDO A INDIOS VERDES', costo:4.18},
  {datos:'INCUMPLE PARQUE HUNDIDO A INDIOS VERDES', costo:4.18},
  {datos:'INCUMPLE PARQUE HUNDIDO A INDIOS VERDES', costo:4.18},
  {datos:'INCUMPLE PARQUE HUNDIDO A INDIOS VERDES', costo:4.18},
  {datos:'INCUMPLE PARQUE HUNDIDO A INDIOS VERDES', costo:4.18},
  {datos:'INCUMPLE PARQUE HUNDIDO A INDIOS VERDES', costo:4.18},
]


const cump = [
  {datos:'CUMPLE COLONIA DEL VALLE A EL CAMINERO', costo:13.28},
  {datos:'CUMPLE COLONIA DEL VALLE A EL CAMINERO', costo:13.28},
  {datos:'CUMPLE COLONIA DEL VALLE A EL CAMINERO', costo:13.28},
  {datos:'CUMPLE COLONIA DEL VALLE A EL CAMINERO', costo:13.28},
  {datos:'CUMPLE COLONIA DEL VALLE A EL CAMINERO', costo:13.28},
  {datos:'CUMPLE COLONIA DEL VALLE A EL CAMINERO', costo:13.28},
  {datos:'CUMPLE COLONIA DEL VALLE A EL CAMINERO', costo:13.28},
  {datos:'CUMPLE COLONIA DEL VALLE A EL CAMINERO', costo:13.28},
  {datos:'CUMPLE COLONIA DEL VALLE A EL CAMINERO', costo:13.28},
]


// function createData(fecha, corrida, economico, hora,lugar, descripcion,) {
//     // const density = population / size;
//     // const num = population / size;
//   return { fecha, corrida, economico, hora, lugar, descripcion};
// }


const columns1 = [
  // El id tiene que llamrse igul que la variable que rcive el createData
  { id: 'fecha', label: 'Fecha', minWidth: 170 },
  { id: 'corrida', label: 'Corrida', minWidth: 100 },
  {
    id: 'economico',
    label: 'Económico',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'hora',
    label: 'Hora',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'lugar',
    label: 'Lugar',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
      id: 'descripcion',
      label: 'Descripción',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(3),
  },
  {
      id: 'infrome',
      label: 'Informe',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(3),
  },
  {
      id: 'total',
      label: 'Total KM',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(3),
  },
  {
      id: 'validar',
      label: 'Validar',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(3),
  },
  {
      id: 'obs',
      label: 'Observación',
      minWidth: 170,
      align: 'right',
      format: (value) => value.toFixed(3),
  },
];

// COLUMNOS 2
const columns2 = [
  // El id tiene que llamrse igul que la variable que rcive el createData
  { id: 'numRegla', label: 'Nombre reglA', minWidth: 170 },
  { id: 'regla', label: 'Regla', minWidth: 100 },
  {
    id: 'deduc',
    label: 'Deducciones',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'referencia',
    label: 'Referencia',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'rubro',
    label: 'Rubro',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];



const useStyles = makeStyles({
  root: {
    width: '130%',
  },
  container: {
    maxHeight: 440,
  },

  bgPDF :{
      background:'#4caf50',
      color:'#fff',
      margin:'0px 0px 10px 2px'
  }
});

export default function Reportes(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const { data, title } = props;
  var columns;  
  if(title == 'Reglas'){
    columns = columns2;
  }else{
    columns = columns1;
  }

  var informes = (title == 'Afectaciones' || title == 'Incumplimientos') ? incum : cump;


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
      <Container  fixed>
        <Typography component="div">
        <Box textAlign="center" m={1} fontSize="h3.fontSize">
        {title}
      </Box>
      <Button
        variant="contained"
        color="green"
        className={classes.bgPDF}
        startIcon={ <PictureAsPdfIcon />}        
      >
        Descargar
      </Button>
        </Typography>
        <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {
                            column.label === 'Informe' ? 
                            <ModalList data={informes}/>
                            : (column.format && typeof value === 'number' ? column.format(value) : value)
                        }                                                                                           
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
    </Container>
  );
}


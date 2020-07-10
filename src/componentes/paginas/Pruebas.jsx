import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <Container component="main">
    <Divider></Divider>
    <h6>REPORTES DE ACCIDENTES</h6>
    <br/>
    <form className={classes.root} noValidate autoComplete="off">
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Incidente:</FormLabel>
          <RadioGroup row aria-label="position" name="position" defaultValue="top">
            <FormControlLabel
              value="Atropellado"
              control={<Radio color="primary" />}
              label="Atropellado"
              labelPlacement="Atropellado"
            />

            <FormControlLabel
              value="Lesionado"
              control={<Radio color="primary" />}
              label="Lesionado"
              labelPlacement="Lesionado"
            />
            <FormControlLabel
              value="Colisión"
              control={<Radio color="primary" />}
              label="Colisión"
              labelPlacement="Lesionado"
            />
          </RadioGroup>
        </FormControl>
        </div>
        </form>
        <br/>
        <Divider></Divider>
    <h6>CRITERIOS DE BÚSQUEDA</h6>
    <br/>
    <form className={classes.root} noValidate autoComplete="on">
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Seleccione los criterios de búsqueda:</FormLabel>
          <RadioGroup row aria-label="position" name="position" defaultValue="top">
            <FormControlLabel
              value="Fecha"
              control={<Radio color="primary" />}
              label="Fecha"
              labelPlacement="Fecha"
            />

            <FormControlLabel
              value="Estación"
              control={<Radio color="primary" />}
              label="Estación"
              labelPlacement="Estación"
            />
            <FormControlLabel
              value="Sexo"
              control={<Radio color="primary" />}
              label="Sexo"
              labelPlacement="Sexo"
            />
            <FormControlLabel
              value="Operador"
              control={<Radio color="primary" />}
              label="Operador"
              labelPlacement="Operador"
            />
            <FormControlLabel
              value="Hora"
              control={<Radio color="primary" />}
              label="Hora"
              labelPlacement="Hora"
            />
            <FormControlLabel
              value="Empresa Operadora"
              control={<Radio color="primary" />}
              label="Empresa Operadora"
              labelPlacement="Empresa Operadora"
            />
          </RadioGroup>
        </FormControl>
        </div>
        </form>
        <br/>
    
        <Button
        variant="contained"
        
        className={classes.bgPDF}
        startIcon={ <PictureAsPdfIcon />}        
      >
        Descargar
      </Button>
    </Container>	


  );
}

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
import { useState } from 'react';
import axios from 'axios';

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

  const [eventoData] = useState({
    fecha: '',
    hora: '',
    tipo_incidente: '',
    incidente: '',
    descripcion : '',
    tramo : '',
    operador: '',
    bitacora: ''
  });

  const handleInputchange = (e) =>{
    this.eventoData[e.target.name] = e.target.value;
    console.log(this.eventoData);
  }

  const sendData = (event) =>{
    const url = "http://localhost:5000/colisionados/registro-evento";        
    event.preventDefault();
    if(
      this.fecha !== '' &&
      this.hora !== '' &&
      this.tipo_incidente !== '' &&
      this.incidente !== '' &&
      this.descripcion !== '' &&
      this.tramo !== '' &&
      this.operador !== '' &&
      this.bitacora !== '' 
      ){
        axios.post(url, dataEvento)
        .then(res=>{
          console.log("Datos mandados", res);
        })
        .catch(err=>{
          console.log("Datos no mandados", err);
        });
    }else{
        alert("Campos vacios");
    }
  }


  const sendData  = (event) =>{
    event.preventDefault();

  }

  return (

    <Container component="main">
		<h5>EVENTO</h5>
		<br/>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField disabled id="standard-disabled" label="Folio Evento " defaultValue="0001" />
        <TextField disabled id="standard-disabled" label="Folio Registro " defaultValue="0001" />
        <br/>
        <TextField required id="standard" label="Folio Bitácora Roja" defaultValue="" />
        <TextField
        id="date"
        label="Fecha"
        type="date"
        defaultValue="2020-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="time"
        label="Hora "
        type="time"
        defaultValue="07:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
      
      </div>
      </form>
<br/>
    <div> 
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">Tipo Incidente</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="      " />
            <option value={1}>Incidente 1</option>
            <option value={2}>Incidente 2</option>
            <option value={3}>Otro</option>
        </Select>
    </FormControl >
    &nbsp;&nbsp;
    <TextField  id="standard" label="Descripción" defaultValue="" />&nbsp;&nbsp;
    <TextField  id="standard" label="Tramo" defaultValue="" />&nbsp;&nbsp;
    <TextField  id="standard" label="Operador" defaultValue="" />&nbsp;&nbsp;
    </div>
    <br/>
    <Divider></Divider>
    
    <div>
    <Button
        type="submit"
        variant="contained"
        color="red"
        className={classes.bgPDF}
        startIcon={ < AddIcon />}
        >
        Agregar evento
      </Button>
      &nbsp;&nbsp;
      &nbsp;&nbsp;
     
    </div>
    
    </Container>	


  );
}

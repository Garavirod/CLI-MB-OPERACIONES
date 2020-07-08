import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Container from '@material-ui/core/Container';
import { Divider } from '@material-ui/core';

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
		<h5>LESIONADOS</h5>
		<br/>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField required id="standard-required" label="Requerido" defaultValue="Folio Bitacora" />
        <TextField disabled id="standard-disabled" label="Folio asignado por el sistema " defaultValue="0001" />
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
<br/>
    <Divider></Divider>
    <h6>DATOS DEL AFECTADO</h6>
    <div>
    </div>

      <TextField
          id="filled-helperText"
          label="Nombre          "
          defaultValue=""
          helperText="Comenzando por Apellidos"
          
        />   
      <TextField
          id="standard-number"
          label="Edad"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    </form>
    <br/>
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">Genero</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="      " />
            <option value={1}>Maculino</option>
            <option value={2}>Femenino</option>
            <option value={3}>Otro</option>
        </Select>
    </FormControl >
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">Estado</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="      " />
            <option value={1}>Vivo</option>
            <option value={2}>Muerto</option>
        </Select>
    </FormControl >
   
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">Estado</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="      " />
            <option value={1}>Vivo</option>
            <option value={2}>Muerto</option>
        </Select>
    </FormControl >
    <br/><br/>
    <Divider></Divider>
    <h6>UBICACION </h6>
    <div>
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">Ubicación</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
            <option value={1}>Calle </option>
            <option value={2}>Interseccion</option>
            <option value={3}>Estacion</option>
            <option value={3}>Otro</option>
        </Select>
      </FormControl>
    </div>
    <div>
    <TextField  id="standard" label="Direccion" defaultValue="" />
    <TextField  id="standard" label="Colonia" defaultValue="" />
    <br/>
    <TextField  id="standard" label="Coordenadas X" defaultValue="" />
    <TextField  id="standard" label="Coordenadas Y" defaultValue="" />
    </div>
    <br/>


    <Divider></Divider>
    <h6>DESCRIPCION DE LOS HECHOS </h6>
    <div>
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">Quien Paga</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
            <option value={1}>Metrobus </option>
            <option value={2}>Empresa Operadora</option>
            <option value={3}>Cada quien con sus daños</option>
            <option value={3}>Se trasladan al MP</option>
            <option value={3}>Se da a la fuga particular</option>
        </Select>
      </FormControl>
      &nbsp;&nbsp;
      <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">Intervino Seguro</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="       " />
            <option value={1}>Si </option>
            <option value={2}>No</option>
        </Select>
      </FormControl>
    </div>
    <div>
    <TextField  id="standard" label="Direccion" defaultValue="" />
    <TextField  id="standard" label="Colonia" defaultValue="" />
    <br/>
    <TextField  id="standard" label="Coordenadas X" defaultValue="" />
    <TextField  id="standard" label="Coordenadas Y" defaultValue="" />
    <br/><br/>
    <TextField
          id="outlined-multiline-static"
          label="Observaciones"
          multiline
          rows={5}
          defaultValue="..."
          variant="outlined"
        />
    </div>




    
    </Container>	


  );
}

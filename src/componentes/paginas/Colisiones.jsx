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
		<h5>COLISIONES</h5>
		<br/>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField disabled id="standard-disabled" label="Folio Evento " defaultValue="0001" />
        <TextField disabled id="standard-disabled" label="Folio Registro " defaultValue="0001" />
        <TextField required id="standard" label="Folio Bitácora Roja" defaultValue="" />
        <br/>
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
    <Divider></Divider>
    <h6>DATOS DEL AFECTADO</h6>
    <br/>
    <div>
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">Sexo</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="      " />
            <option value={1}>Maculino</option>
            <option value={2}>Femenino</option>
            <option value={3}>Otro</option>
        </Select>
    </FormControl >
    &nbsp;&nbsp;&nbsp;&nbsp;
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">Estado</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="      " />
            <option value={1}>Vivo</option>
            <option value={2}>Muerto</option>
        </Select>
    </FormControl >
    </div>
    
    <br/><br/>
    <Divider></Divider>
    <h6>DATOS DEL VEHÍCULO PARTICULAR</h6>
    <div>
    <TextField  id="standard" label="Marca" defaultValue="" />&nbsp;&nbsp;
    <TextField  id="standard" label="Submarca" defaultValue="" />&nbsp;&nbsp;
    <TextField  id="standard" label="Año" defaultValue="" />&nbsp;&nbsp;
    <TextField  id="standard" label="Color" defaultValue="" />&nbsp;&nbsp;
    <TextField  id="standard" label="Placa" defaultValue="" />&nbsp;&nbsp;
    <TextField  id="standard" label="Seguro" defaultValue="" />
    </div>
    <br/>
    <Divider></Divider>
    <h6>DATOS DE LA UNIDAD </h6>
    <br/>
    <div>
    <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">No. Económico</InputLabel>
        <Select native defaultValue="            " id="grouped-native-select">
          <option aria-label="None" value="         " />
            <option value={1}>1041</option>
            <option value={2}>1042</option>
			<option value={3}>1043</option>
            <option value={4}>1044</option>
        </Select>
      </FormControl>
  
      &nbsp;&nbsp;
	  <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Bloque</InputLabel>
        <Select native defaultValue="            " id="grouped-native-select">
          <option aria-label="None" value="          " />
            <option value={1}>7</option>
            <option value={2}>26</option>
			<option value={3}>57</option>
            <option value={4}>71</option>
        </Select>
      </FormControl>
      &nbsp;&nbsp;
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Empresa</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="  " />
            <option value={1}>CCA</option>
            <option value={2}>MIVSA</option>
			<option value={3}>CISA</option>
            <option value={4}>CITEMSA</option>
        </Select>
      </FormControl>
      <br/>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Lìnea</InputLabel>
        <Select native defaultValue="            " id="grouped-native-select">
          <option aria-label="None" value="            " />
            <option value={1}>1</option>
            <option value={2}>2</option>
			<option value={3}>3</option>
            <option value={4}>4</option>
        </Select>
      </FormControl>
      &nbsp;&nbsp;
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Operador</InputLabel>
        <Select native defaultValue="            " id="grouped-native-select">
          <option aria-label="None" value="            " />
            <option value={1}>Juan Perez</option>
            <option value={2}>1028</option>
			<option value={3}>Roberto Hernandez</option>
            <option value={4}>1098</option>
        </Select>
      </FormControl>
      &nbsp;&nbsp;
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Sentido</InputLabel>
        <Select native defaultValue="            " id="grouped-native-select">
          <option aria-label="None" value="            " />
            <option value={1}>P-O</option>
            <option value={2}>N-S</option>
			<option value={3}>O-P</option>
            <option value={4}>S-N</option>
        </Select>
      </FormControl>
      &nbsp;&nbsp;
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Seguro Unidad</InputLabel>
        <Select native defaultValue="            " id="grouped-native-select">
          <option aria-label="None" value="            " />
            <option value={1}>Qualitas</option>
            <option value={2}>Afirme</option>
			<option value={3}>ANA</option>
            <option value={4}>No arriba</option>
        </Select>
      </FormControl>
    </div>
    <br/>
    <Divider></Divider>
    <h6>UBICACIÓN </h6>
    <div>
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">Ubicación</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
            <option value={1}>Calle </option>
            <option value={2}>Intersección</option>
            <option value={3}>Estacion</option>
            <option value={3}>Otro</option>
        </Select>
      </FormControl>
    </div>
    <div>
    <TextField  id="standard" label="Dirección" defaultValue="" />
    <TextField  id="standard" label="Colonia" defaultValue="" />
    <br/>
    <TextField  id="standard" label="Coordenadas X" defaultValue="" />
    <TextField  id="standard" label="Coordenadas Y" defaultValue="" />
    </div>
    <br/>


    <Divider></Divider>
    <h6>DESCRIPCIÓN DE LOS HECHOS </h6>
    <div>
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">Quién Paga</InputLabel>
        <Select native defaultValue=" " id="grouped-native-select">
          <option aria-label="None" value=" " />
            <option value={1}>Metrobus </option>
            <option value={2}>Empresa Operadora</option>
            <option value={3}>Cada quién con sus daños</option>
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
      &nbsp;&nbsp;
    &nbsp;&nbsp;
    
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">Grado daños</InputLabel>
        <Select native defaultValue="    " id="grouped-native-select">
          <option aria-label="None" value="                      " />
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={2}>3</option>
        </Select>
    </FormControl >
    <br/>
    <FormControl className={classes.formControl}>
      <InputLabel htmlFor="grouped-native-select">Motivo</InputLabel>
        <Select native defaultValue="    " id="grouped-native-select">
          <option aria-label="None" value="                      " />
            <option value={1}>Alcance de unidad MB hacia el particular</option>
            <option value={2}>Particular se pasa el semaforo</option>
            <option value={3}>Corte de circulacion por parte del particular</option>
            <option value={4}>Otro</option>
        </Select>
    </FormControl >
    </div>
    <div>
    <TextField  id="standard" label="Dirección" defaultValue="" />
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
    <br/><br/>
    <div>
    <Button
        variant="contained"
        color="red"
        className={classes.bgPDF}
        startIcon={ < AddIcon />}
        >
        Agregar registro al evento
      </Button>
      &nbsp;&nbsp;
      &nbsp;&nbsp;
      <Button
        variant="contained"
        color="red"
        className={classes.bgPDF}
        startIcon={ <SendIcon />}>
        Enviar
      </Button>
     
    </div>
    
    </Container>	


  );
}

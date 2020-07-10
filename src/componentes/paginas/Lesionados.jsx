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
		<h5>LESIONADOS Y ATROPELLADOS</h5>
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

      <TextField
              id="time"
              label="Hora de Informe al Centro de Control "
              type="time"
              defaultValue="00:20"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />

      <TextField
              id="time"
              label="Tiempo de Respuesta del Centro de Control "
              type="time"
              defaultValue="00:20"
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
    <form className={classes.root} noValidate autoComplete="off">
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Estatus:</FormLabel>
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
          </RadioGroup>
        </FormControl>
        </div>
        </form>
        <br/>
        <form className={classes.root} noValidate autoComplete="off">
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
        <br/>
        <TextField standard id="standard" label="Apellido Paterno" defaultValue="" />
        <TextField standard id="standard" label="Apellido Materno" defaultValue="" />
        <TextField standard id="standard" label="Nombre(s)" defaultValue="" />
        <TextField standard id="standard" label="Edad" defaultValue="" />
        
    </form>
    
    <br/><br/>
    <Divider></Divider>
    <h6>GENERALES DEL INCIDENTE </h6>
    <br/>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Tipo de Incidente</InputLabel>
            <Select native defaultValue="            " id="16">
              <option aria-label="None" value="            " />
              <option value={1}>ATROPELLADO CICLISTA</option>
              <option value={2}>ATROPELLADO PEATÓN</option>
              <option value={3}>LESIÓN AUTOBUS</option>
              <option value={4}>LESIÓN ESTACIÓN</option>
            </Select>
          </FormControl>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Incidente</InputLabel>
            <Select native defaultValue="            " id="17">
              <option aria-label="None" value="            " />
              <option value={1}>CAÍDA ENTRE PLATAFORMA Y UNIDAD</option>
              <option value={2}>CAÍDA AL INTERIOR</option>
              <option value={3}>ESTACIÓN</option>
              <option value={4}>FRENADO DE EMERGENCIA</option>
              <option value={4}>SIN DATOS</option>
            </Select>
          </FormControl>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <br/>
          <br/>
          <TextField
          id="outlined-multiline-static"
          label="Descripción del incidente"
          multiline
          rows={5}
          defaultValue="..."
          variant="outlined"
        />
          <br/>
          <br/>
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Linea</InputLabel>
            <Select native defaultValue=" " id="12">
              <option aria-label="None" value=" " />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
            </Select>
          </FormControl>
          &nbsp;&nbsp;&nbsp;&nbsp;
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Corredor</InputLabel>
            <Select native defaultValue="            " id="13">
              <option aria-label="None" value="          " />
              <option value={1}>EJE 3 OTE</option>
              <option value={2}>INSURGENTES</option>
              <option value={3}>EJE 4 SUR</option>
              <option value={4}>REFORMA</option>
            </Select>
          </FormControl>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Estación</InputLabel>
            <Select native defaultValue="" id="14">
              <option aria-label="None" value="  " />
              <option value={1}>INSTITUTO POLITÉCNICO NACIONAL</option>
              <option value={2}>AMORES</option>
              <option value={3}>HOSPITAL INFANTIL LA VILLA</option>
              <option value={4}>LA VIGA</option>
            </Select>
          </FormControl>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Tramo</InputLabel>
            <Select native defaultValue="            " id="15">
              <option aria-label="None" value="            " />
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </Select>
          </FormControl>
      </div>
    </form>
    <br/>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">No. Económico</InputLabel>
            <Select native defaultValue="            " id="12">
              <option aria-label="None" value="         " />
              <option value={1}>1041</option>
              <option value={2}>1042</option>
              <option value={3}>1043</option>
              <option value={4}>1044</option>
            </Select>
          </FormControl>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Corrida</InputLabel>
            <Select native defaultValue="            " id="13">
              <option aria-label="None" value="          " />
              <option value={1}>7</option>
              <option value={2}>26</option>
              <option value={3}>57</option>
              <option value={4}>71</option>
            </Select>
          </FormControl>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Empresa</InputLabel>
            <Select native defaultValue="" id="14">
              <option aria-label="None" value="  " />
              <option value={1}>CCA</option>
              <option value={2}>MIVSA</option>
              <option value={3}>CISA</option>
              <option value={4}>CITEMSA</option>
            </Select>
          </FormControl>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Operador</InputLabel>
            <Select native defaultValue="" id="14">
              <option aria-label="None" value="  " />
              <option value={1}>JUAN MANUEL MARQUEZ LEZAMA</option>
              <option value={2}>OSCAR MIGUEL RAMIREZ</option>
              <option value={3}>ALEJANDRO SANTÉS CRUZ</option>
              <option value={4}>MIGUEL ANGEL GONZÁLEZ RIVERA</option>
            </Select>
          </FormControl>
          &nbsp;&nbsp;&nbsp;&nbsp; 
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Seguro Unidad</InputLabel>
            <Select native defaultValue="            " id="18">
              <option aria-label="None" value="            " />
              <option value={1}>Qualitas</option>
              <option value={2}>Afirme</option>
              <option value={3}>ANA</option>
              <option value={4}>No arriba</option>
            </Select>
          </FormControl>
      </div>
    </form>
    <br/>
    <Divider></Divider>
    <h6>AMBULANCIA </h6>
    <br/>
    <form className={classes.root} noValidate autoComplete="off">
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Se requirió ambulancia:</FormLabel>
          <RadioGroup row aria-label="position" name="position" defaultValue="top">
            <FormControlLabel
              value="Si"
              control={<Radio color="primary" />}
              label="Si"
              labelPlacement="Si"
            />

            <FormControlLabel
              value="No"
              control={<Radio color="primary" />}
              label="No"
              labelPlacement="No"
            />
          </RadioGroup>
        </FormControl>
        </div>
      </form>
      <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField
              id="time"
              label="Hora en que se solicita ambulancia "
              type="time"
              defaultValue="00:20"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />

      <TextField
              id="time"
              label="Tiempo de respuesta ambulancia "
              type="time"
              defaultValue="00:20"
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
      <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField  id="standard" label="Empresa Operadora de Ambulancia" defaultValue="" />
        <TextField  id="standard" label="Num. Eco. o Placa Ambulancia" defaultValue="" />
        <TextField  id="standard" label="Paramédico" defaultValue="" />
        <TextField  id="standard" label="Diagnóstico" defaultValue="" />
        <TextField  id="standard" label="Pase Médico" defaultValue="" />
        <TextField  id="standard" label="Traslado a hospital (Cuál en su caso)" defaultValue="" />
      </div>
    </form>
    <br/>
    <Divider></Divider>
    <h6>SEGUROS </h6>
    <form className={classes.root} noValidate autoComplete="off">
      <div>
      <TextField
              id="time"
              label="Hora de arribo seguro "
              type="time"
              defaultValue="00:20"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />

      <TextField
              id="time"
              label="Tiempo de respuesta seguro "
              type="time"
              defaultValue="00:20"
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
    &nbsp;&nbsp;&nbsp;&nbsp;
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">Seguro </InputLabel>
              <Select native defaultValue="" id="grouped-native-select">
                <option aria-label="None" value="      " />
                  <option value={1}>No Aplica </option>
                  <option value={2}>No Arribo </option>
                  <option value={3}>No Solicitado </option>
                  <option value={4}>No Se Harán Responsables</option>
                  <option value={5}>ANA</option>
                  <option value={6}>AXXA</option>
                  <option value={7}>Otro</option>
              </Select>
          </FormControl >
          &nbsp;&nbsp;&nbsp;&nbsp;
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="grouped-native-select">A quién corresponde el seguro</InputLabel>
              <Select native defaultValue="" id="grouped-native-select">
                <option aria-label="None" value="      " />
                  <option value={1}>Particular</option>
                  <option value={2}>MB</option>
                  <option value={7}>Otro</option>
              </Select>
          </FormControl >
          <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField  id="standard" label="Ajustador" defaultValue="" />
        <TextField  id="standard" label="Num. Eco. o Placa Seguro" defaultValue="" />
      </div>
    </form>

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

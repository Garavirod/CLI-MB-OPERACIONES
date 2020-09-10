import React from 'react';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TableCell from '@material-ui/core/TableCell';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import AddIcon from '@material-ui/icons/Add';




const useStyles = makeStyles((theme) => ({
	formControl: {
	  margin: theme.spacing(1),
	  minWidth: 120,
	},
  }));
  
  export default function GroupedSelect() {
	const classes = useStyles();

  return (
    <Container component="main">
		<h5>BITACORA DE DESINCORPORACIONES Y REEMPLAZOS </h5>
		<h6>CORREDOR INSURGENTES</h6>
		<br/>

		<FormControl component="fieldset">
      <FormLabel component="legend">Reportó:</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="metrobus"
          control={<Radio color="primary" />}
          label="Metrobús"
          labelPlacement="metrobus"
        />

		<FormControlLabel
          value="empresa"
          control={<Radio color="primary" />}
          label="Empresa Operadora"
          labelPlacement="empresa"
        />
      </RadioGroup>
    </FormControl>
	<br/>

	<FormControl component="fieldset">
      <FormLabel component="legend">Situación:</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="reincorporacion"
          control={<Radio color="primary" />}
          label="Reincorporación"
          labelPlacement="reincorporacion"
        />

		<FormControlLabel
          value="desincorporación"
          control={<Radio color="primary" />}
          label="Desincorporación"
          labelPlacement="desincorporación"
        />

	<FormControlLabel
          value="reemplazo"
          control={<Radio color="primary" />}
          label="Reemplazo"
          labelPlacement="reemplazo"
        />
      </RadioGroup>
    </FormControl>
	<br/>

  <FormControl component="fieldset">
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="c19"
          control={<Radio color="primary" />}
          label="C19"
          labelPlacement="c19"
        />

		<FormControlLabel
          value="c20"
          control={<Radio color="primary" />}
          label="C20"
          labelPlacement="c20"
        />
      </RadioGroup>
    </FormControl>
	<br/>

	  <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Informa</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
            <option value={1}>E01</option>
            <option value={2}>E02</option>
			<option value={3}>E03</option>
            <option value={4}>E04</option>
        </Select>
      </FormControl>

	  <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Ubicación</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
            <option value={1}>Indios Verdes</option>
            <option value={2}>Insurgentes</option>
			<option value={3}>La Joya</option>

        </Select>
      </FormControl>
	  <br/>
	  <br/>

	  <FormControl component="fieldset">
      <FormLabel component="legend">Sentido:</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top">

		<FormControlLabel
          value="i17"
          control={<Radio color="primary" />}
          label="i17"
          labelPlacement="i17"
        />

	<FormControlLabel
          value="i18"
          control={<Radio color="primary" />}
          label="i18"
          labelPlacement="i18"
        />
      </RadioGroup>
    </FormControl>
	<br/>

	  <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">No. Económico</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
            <option value={1}>1041</option>
            <option value={2}>1042</option>
			<option value={3}>1043</option>
            <option value={4}>1044</option>
        </Select>
      </FormControl>

	  <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">No. Corrida</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
            <option value={1}>1</option>
            <option value={2}>2</option>
			<option value={3}>3</option>
            <option value={4}>4</option>
        </Select>
      </FormControl>
	  <br/><br/>

	  <form className={classes.container} noValidate>
	  <TextField
        id="time"
        label="Hora"
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
    </form>
	<br/>

	  <form className={classes.root} noValidate autoComplete="off">
      <TextField id="Kilometraje-basic" label="Kilometraje" />
    </form>

	<br/>	
	<FormControl component="fieldset">
      <FormLabel component="legend">Motivo:</FormLabel>
      <RadioGroup row aria-label="position" name="position" defaultValue="top">

		<FormControlLabel
          value="falla"
          control={<Radio color="primary" />}
          label="Falla Mécanica"
          labelPlacement="falla"
        />

	<FormControlLabel
          value="acc"
          control={<Radio color="primary" />}
          label="Acciedente o Colisión"
          labelPlacement="acc"
        />	

		<FormControlLabel
          value="otros"
          control={<Radio color="primary" />}
          label="Otros"
          labelPlacement="otros"
        />	
      </RadioGroup>
    </FormControl>
	<br/>
        
	<FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Detalle 1</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
            <option value={1}>C4</option>
            <option value={2}>M16</option>
			<option value={3}>M19</option>
            <option value={4}>c12</option>
        </Select>
      </FormControl>
    
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Detalle 2</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
            <option value={1}>M24</option>
            <option value={2}>M16</option>
			<option value={3}>M19</option>
            <option value={4}>c12</option>
        </Select>
      </FormControl>
      <br/><br/>
      <TextField
          id="outlined-multiline-static"
          label="Observaciones"
          multiline
          rows={5}
          defaultValue="..."
          variant="outlined"
        />
        <br/> <br/><br/>

<div>
    
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
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  Paper,
  Typography,
  TextField,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Container,
} from "@material-ui/core";
import {
  getLineas,
  getJornadas,
  getSolicitudes,
  getEstacionesByLinea,
  getEconomicos,  
  getInfromantes,
  getMotivos,
  getEmpresaByEco,
} from "../../helpers/DataGetters";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(2),
    minWidth: 95,
    maxWidth: 95,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const DesincorporacionComp = (props) => {
  const classes = useStyles();
  const { valuesDes, handleInputChangeDes } = props;
  // Estaciones por linea
  const [estacioneslinea,setEstacionLinea] = useState([]);
  const [empresaeconomico,setEmpresaEco] = useState([]);

  // desestructurando el values del hook
  const {
    linea,
    solicita,
    informa,
    estacion,
    economico,
    empresa,
    motivo,
    odometro,
    credencial,
    nombre,
    fecha,
    hora,
    jornada,
    observaciones,
    tipo,
    edoFolio,
  } = valuesDes;

  // Cada vez que cambie el estado de la linea, se tren todas las estaciones
  useEffect(()=>{    
    setEstacionLinea(getEstacionesByLinea(linea));    
  },[linea]);

  // Cada vez que el eco cambia de estado, busca la EO al que pertenece
  useEffect(()=>{
    setEmpresaEco(getEmpresaByEco(economico));
  },[economico]);

  // Data inputs
  const lineas = getLineas();
  const jornadas = getJornadas();
  const solicitudes = getSolicitudes();
  const infromantes = getInfromantes();
  const motivos = getMotivos();
  const economicos = getEconomicos();

  return (
    <Container className={classes.root}>
      <Grid container spancing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Paper className={classes.paper} variant="outlined">
            <Typography variant="h6" component="h4">
              Desincorporacion / Entrada
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          {/* LINEA */}
          <FormControl className={classes.formControl}>
            <InputLabel>Linea</InputLabel>            
            <Select
              native
              value={linea}
              onChange={handleInputChangeDes}                         
              inputProps={{
                name: "linea",
              }}
            >
              <option value={""}>...</option>
              {lineas.map((it) => (
                <option key={it} value={it}>
                  {it}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          {/* SOLIICITA */}
          <FormControl className={classes.formControl}>
            <InputLabel>Solicita</InputLabel>
            <Select
              native
              value={solicita}
              onChange={handleInputChangeDes}
              inputProps={{
                name: "solicita",
              }}
            >
              <option value={""}>...</option>
              {solicitudes.map((it) => (
                <option key={it} value={it}>
                  {it}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          {/* INFROMA */}
          <FormControl className={classes.formControl}>
            <InputLabel>Informa</InputLabel>
            <Select
              native
              value={informa}
              onChange={handleInputChangeDes}
              inputProps={{
                name: "informa",
              }}
            >
              <option value={""}>...</option>
              {infromantes.map((it) => (
                <option key={it} value={it}>
                  {it}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          {/* ESTACIÓN */}
          <FormControl className={classes.formControl}>
            <InputLabel>Estación</InputLabel>
            <Select
              native
              value={estacion}
              onChange={handleInputChangeDes}
              inputProps={{
                name: "estacion",
              }}
            >
              <option value={""}>...</option>
              {estacioneslinea.map((it) => (
                <option key={it} value={it}>
                  {it}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          {/* ECONÓMICO */}
          <FormControl className={classes.formControl}>
            <InputLabel>Económico</InputLabel>
            <Select
              native
              value={economico}
              onChange={handleInputChangeDes}
              inputProps={{
                name: "economico",
              }}
            >
              <option value={""}>...</option>
              {economicos.map((it) => (
                <option key={it} value={it}>
                  {it}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          {/* EMPRESA */}
          <FormControl className={classes.formControl}>
            <InputLabel>Empresa</InputLabel>
            <Select
              native
              value={empresa}
              onChange={handleInputChangeDes}
              inputProps={{
                name: "empresa",
              }}
            >
              <option value={""}>...</option>
              {
                empresaeconomico.map((it)=>(
                  <option key={it} value={it}>{it}</option>            
                ))
              }
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          {/* MOTIVO */}
          <FormControl className={classes.formControl}>
            <InputLabel>Motivo</InputLabel>
            <Select
              native
              value={motivo}
              onChange={handleInputChangeDes}
              inputProps={{
                name: "motivo",
              }}
            >
              <option value={""}>...</option>
              {motivos.map((it) => (
                <option key={it} value={it}>
                  {it}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={4}>
          {/* ODÓMETRO */}
          <FormControl className={classes.formControl}>
            <TextField
              id="standard-required"
              label="Odómetro"
              name="odometro"
              value={odometro}
              onChange={handleInputChangeDes}
            />
          </FormControl>
        </Grid>
        <Grid item lg={4}>
          {/* CREDENCIAL */}
          <FormControl className={classes.formControl}>
            <TextField
              id="standard-required"
              label="Credencial"
              name="credencial"
              value={credencial}
              onChange={handleInputChangeDes}
            />
          </FormControl>
        </Grid>
        <Grid item lg={4}>
          {/* NOMBRE */}
          <FormControl className={classes.formControl}>
            <TextField
              id="standard-required"
              label="Nombre"
              name="nombre"
              value={nombre}
              onChange={handleInputChangeDes}
            />
          </FormControl>
        </Grid>
        <Grid item lg={4}>
          {/* FECHA */}
          <FormControl className={classes.formControl}>
            <TextField
              id="date"
              name="fecha"
              label="Fecha"
              type="date"
              value={fecha}
              onChange={handleInputChangeDes}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
        </Grid>
        <Grid item lg={4}>
          {/* HORA */}
          <FormControl className={classes.formControl}>
            <TextField
              id="time"
              name="hora"
              label="Hora"
              type="time"
              value={hora}
              onChange={handleInputChangeDes}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                step: 300, // 5 min
              }}
            />
          </FormControl>
        </Grid>
        <Grid item lg={4}>
          {/* JORNADA */}
          <FormControl className={classes.formControl}>
            <InputLabel>Jornada</InputLabel>
            <Select
              native
              value={jornada}
              onChange={handleInputChangeDes}
              inputProps={{
                name: "jornada",
              }}
            >
              <option value={""}>...</option>
              {jornadas.map((it) => (
                <option key={it} value={it}>
                  {it}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={6} xs={12}>
          {/* OBSERVACIONES */}
          <FormControl fullWidth>
            <TextField
              id="outlined-multiline-static"
              onChange={handleInputChangeDes}
              label="Observaciones"
              multiline
              rows={3}
              variant="outlined"
              fullWidth
              margin="normal"
              name="observaciones"
              value={observaciones}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
        </Grid>
        <Grid item lg={3} xs={6}>
          {/* TIPO DESINCO*/}
          <FormControl className={classes.formControl}>
            <FormLabel>Tipo</FormLabel>
            <RadioGroup
              aria-label="gender"
              onChange={handleInputChangeDes}
              name="tipo"
              value={tipo}
            >
              <FormControlLabel
                value="Incumplido"
                control={<Radio />}
                label="Incumplido"
              />
              <FormControlLabel
                value="Apoyo"
                control={<Radio />}
                label="Apoyo"
              />
              <FormControlLabel
                value="Afectación"
                control={<Radio />}
                label="Afectación"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item lg={3} xs={6}>
          {/* ESTADO FOLIO */}
          <FormControl className={classes.formControl}>
            <FormLabel>Estado de foilo</FormLabel>
            <RadioGroup
              aria-label="gender"
              value={edoFolio}
              onChange={handleInputChangeDes}
              name="edoFolio"
            >
              <FormControlLabel
                value="abierto"
                control={<Radio />}
                label="Abierto"
              />
              <FormControlLabel
                value="cerrado"
                control={<Radio />}
                label="Cerrado"
              />
              <FormControlLabel
                value="cerrado sin incorporar"
                control={<Radio />}
                label="Cerrado sin incorporar"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Container>
  );
};

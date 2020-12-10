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
  getEmpresaByEco,
} from "../../helpers/DataGetters";
import { useState } from "react";
import { useEffect } from "react";
import { httpGetData } from "../../functions/httpRequest";

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
  /* 
    active1 : Dehabilita los campos de una desincorporación
    active2: Deshabilita los campos 'Tipo desincoporación'
    active3: Deshabilita los campos 'Edo folio'
  */
  const { valuesDes, handleInputChangeDes, active1=false, active2=false, active3=false } = props;
  // Estaciones por linea
  const [estacioneslinea, setEstacionLinea] = useState([]);
  const [empresaeconomico, setEmpresaEco] = useState("");  
  const [motivos, setMotivos] = useState([]);
  

  // desestructurando el values del hook
  const {
    linea,
    solicita,
    informa,
    estacion,
    economico,
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

  const handlechangeTipoFolio = (name) =>{
    if(name === "Apoyo"){
      valuesDes['edoFolio']="Cerrado";
    }
  }


  // Cada vez que cambie el estado de la linea, se tren todas las estaciones
  useEffect(() => {
    setEstacionLinea(getEstacionesByLinea(linea));
  }, [linea]);

  // Cada vez que el eco cambia de estado, busca la EO al que pertenece
  useEffect(() => {
    const empresa = getEmpresaByEco(economico)[0];
    setEmpresaEco(empresa);
    valuesDes["empresa"] = empresa;
  }, [economico]);

  useEffect(()=>{
    getMotivosList();
  },[]);

  const getMotivosList =  async () =>{
    //folios-abiertos
    const url = '/desincorporaciones/motivos-list';
    const _data = await httpGetData(url);
    if (_data.success) {
      setMotivos(_data.data);    
    }
  } 

  // Data inputs
  const lineas = getLineas();
  const jornadas = getJornadas();
  const solicitudes = getSolicitudes();
  const infromantes = getInfromantes();  
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
          <FormControl className={classes.formControl} disabled={active1}>
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
          <FormControl className={classes.formControl} disabled={active1}>
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
          <FormControl className={classes.formControl} disabled={active1}>
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
          <FormControl className={classes.formControl} disabled={active1}>
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
          <FormControl className={classes.formControl} disabled={active1}>
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
          <FormControl className={classes.formControl} disabled={active1}>
            <Typography variant="h6" component="h6">
              Empresa
            </Typography>
            <InputLabel>{empresaeconomico}</InputLabel>
          </FormControl>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          {/* MOTIVO */}
          <FormControl className={classes.formControl} disabled={active1}>
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
                <option key={it.id} value={it.motivo}>
                  {it.motivo}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={4}>
          {/* ODÓMETRO */}
          <FormControl className={classes.formControl}>
            <TextField
              disabled={active1}
              type="number"
              id="standard-required"
              label="Odómetro"
              name="odometro"
              value={odometro}
              onChange={handleInputChangeDes}
              inputProps={{
                step: 0.001,
                min: 0,
                max:90000000,                
                type: "number",
                "aria-labelledby": "input-slider",
              }}
            />
          </FormControl>
        </Grid>
        <Grid item lg={4}>
          {/* CREDENCIAL */}
          <FormControl className={classes.formControl}>
            <TextField
              disabled={active1}
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
              disabled={active1}
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
              disabled={active1}
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
              disabled={active1}
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
          <FormControl className={classes.formControl} disabled={active1}>
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
              disabled={active1}            
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
          <FormControl className={classes.formControl} disabled={active2}>
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
          {
            (active3) &&
            (
              <FormControl className={classes.formControl}>
                <FormLabel>Estado de foilo</FormLabel>
                <RadioGroup
                  aria-label="gender"
                  value={edoFolio}
                  onChange={handleInputChangeDes}
                  name="edoFolio"
                >
                  <FormControlLabel
                    value="Abierto"
                    control={<Radio />}
                    label="Abierto"
                  />
                  <FormControlLabel
                    value="Cerrado"
                    control={<Radio />}
                    label="Cerrado"
                  />
                  <FormControlLabel
                    value="Cerrado sin incorporar"
                    control={<Radio />}
                    label="Cerrado sin incorporar"
                  />
                </RadioGroup>
              </FormControl>
            )
          }          
        </Grid>
      </Grid>
    </Container>
  );
};

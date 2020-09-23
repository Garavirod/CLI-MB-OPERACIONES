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
  Container,
} from "@material-ui/core";
import {   
  getSentido, 
  getInfromantes,
  getEstaciones,
  getEconomicos,
  getEmpresas
 } from "../../helpers/DataGetters";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(3),
    minWidth: 120,
    maxWidth: 300,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const IncorporacionComp = (props) => {
  const classes = useStyles();
  const { valuesInco, handleInputChangeInc } = props;

  // desestructurando el values del hook
  const {
    informa,
    estacion,
    economico,
    empresa,        
    odometro,
    credencial,
    nombre,
    fecha,
    hora,                        
    sentido,
    entrada,
    status
  } = valuesInco;


  // Datos de los inputs  
  const sentidos = getSentido();
  const entradas = ["En tiempo", "Retrazo"];
  const statusset = ["Incorporacion", "Desincorporacion", "Remplazo"];
  const informantes = getInfromantes();
  const estaciones = getEstaciones();
  const economicos = getEconomicos();
  const empresas = getEmpresas();
  


  return (
    <Container className={classes.root}>
      <Grid container spancing={3}>
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Paper className={classes.paper} variant="outlined">
            <Typography variant="h6" component="h4">
              Incorporación / Salida
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={3} md={6} sm={6} xs={12}>
          {/* SENTIDO */}
          <FormControl className={classes.formControl}>
            <InputLabel>Sentido</InputLabel>
            <Select
              native
              value={sentido}
              onChange={handleInputChangeInc}
              inputProps={{
                name: "sentido",
              }}
            >
              {sentidos.map((it) => (
                <option key={it} value={it}>
                  {it}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid><Grid item lg={3} md={6} sm={6} xs={12}>
          {/* ENTRADA */}
          <FormControl className={classes.formControl}>
            <InputLabel>Entrada</InputLabel>
            <Select
              native
              value={entrada}
              onChange={handleInputChangeInc}
              inputProps={{
                name: "entrada",
              }}
            >
              {entradas.map((it) => (
                <option key={it} value={it}>
                  {it}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid><Grid item lg={3} md={6} sm={6} xs={12}>
          {/* STATUS */}
          <FormControl className={classes.formControl}>
            <InputLabel>Status</InputLabel>
            <Select
              native
              value={status}
              onChange={handleInputChangeInc}
              inputProps={{
                name: "status",
              }}
            >
              {statusset.map((it) => (
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
              onChange={handleInputChangeInc}
              inputProps={{
                name: "informa",
              }}
            >
              {informantes.map((it) => (
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
              onChange={handleInputChangeInc}
              inputProps={{
                name: "estacion",
              }}
            >
              {estaciones.map((it) => (
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
              onChange={handleInputChangeInc}
              inputProps={{
                name: "empresa",
              }}
            >
              {empresas.map((it) => (
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
              onChange={handleInputChangeInc}
              inputProps={{
                name: "economico",
              }}
            >
              {economicos.map((it) => (
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
              onChange={handleInputChangeInc}
            />
          </FormControl>
        </Grid>
        <Grid item lg={4}>
          {/* CREDENCIAL */}
          <FormControl className={classes.formControl}>
            <TextField
              id="standard-required"
              label="Conductor/Cred"
              name="credencial"
              value={credencial}
              onChange={handleInputChangeInc}
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
              onChange={handleInputChangeInc}
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
              onChange={handleInputChangeInc}
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
              onChange={handleInputChangeInc}
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
      </Grid>
    </Container>
  );
};

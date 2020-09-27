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
  getEmpresas,
} from "../../helpers/DataGetters";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 95,
    maxWidth: 95,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export const desactivar = (entrada) => {
  return entrada === "Retrazo" ? false : true;
};

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
    status,
    hra_retrazo,
    min_retrazo,
    seg_retrazo,
  } = valuesInco;

  // Datos de los inputs
  const sentidos = getSentido();
  const entradas = ["En tiempo", "Retrazo"];
  const statusset = ["Incorporacion", "Reincorporación", "Remplazo"];
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
        <Grid item lg={4} md={4} sm={4} xs={12}>
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
              <option value={""}>...</option>
              {sentidos.map((it) => (
                <option key={it} value={it}>
                  {it}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
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
              <option value={""}>...</option>
              {statusset.map((it) => (
                <option key={it} value={it}>
                  {it}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item lg={4} md={4} sm={4} xs={12}>
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
              <option value={""}>...</option>
              {entradas.map((it) => (
                <option key={it} value={it}>
                  {it}
                </option>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item lg={4} md={6} sm={6} xs={12}>
          {/* HRA RETRAZO */}
          <FormControl className={classes.formControl}>
            <TextField
              disabled={desactivar(entrada)}
              id="camporetrazo"
              label="Hra de retrazo"
              type="number"
              name="hra_retrazo"
              value={hra_retrazo}
              onChange={handleInputChangeInc}
              inputProps={{
                step: 1,
                min: 0,
                max: 24,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          {/* MIN RETRAZO */}
          <FormControl className={classes.formControl}>
            <TextField
              disabled={desactivar(entrada)}
              id="camporetrazo"
              label="Min de retrazo"
              type="number"
              name="min_retrazo"
              value={min_retrazo}
              onChange={handleInputChangeInc}
              inputProps={{
                step: 1,
                min: 0,
                max: 60,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
        </Grid>
        <Grid item lg={4} md={6} sm={6} xs={12}>
          {/* SEG RETRAZO */}
          <FormControl className={classes.formControl}>
            <TextField
              disabled={desactivar(entrada)}
              id="camporetrazo"
              label="Seg de retrazo"
              type="number"
              name="seg_retrazo"
              value={seg_retrazo}
              onChange={handleInputChangeInc}
              inputProps={{
                step: 1,
                min: 0,
                max: 60,
                type: "number",
                "aria-labelledby": "input-slider",
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
        </Grid>        
        <Grid item lg={3} md={6} sm={6} xs={12}>
          {/* INFORMA */}
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
              <option value={""}>...</option>
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
              <option value={""}>...</option>

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
              <option value={""}>...</option>
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
              <option value={""}>...</option>
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

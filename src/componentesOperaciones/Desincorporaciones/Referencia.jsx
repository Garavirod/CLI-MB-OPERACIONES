import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import {
  getReferencias,
  getEstacionesByReferencia,
} from "../../helpers/DataGetters";
import {
  Paper,
  Typography,
  Container,
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  viewRoot: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },

  divTree: {
    maxHeight: 200,
    overflow: "scroll",
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  colorType:{
    color:"#ffff"
  }
}));

// Esta funcion crea los destinos (desde - hasta)
const CreaDestinos = (dest) => {
  const [_p1, _p2] = dest;
  return [`${_p1} - ${_p2}`, `${_p2} - ${_p1}`];
};

export default function Referencia(props) {
  // Cargamos los estilos del los inpust y componentes
  const classes = useStyles();

  // desestructurando las propiedades del componente
  const { 
    valuesRef, //atributos del modelo referencia
    handleInputChangeRef, // fucion encargada de cambiar el edo del valuesRef
    titulo, // titulo a mostrar en el header
    color, //Color del header (cump - verder) (inc - rojo)
    flag=false //Esta bandera indica indica si serán circuitos o tramos
  } = props;

  // Desestructurando el hook del modelo Desinc dadas las props del hook
  const {
    ruta_referencia,
    ref_ida,
    ref_vuelta,
    num_vuelta,
    num_ida,
    num_regreso,
    tramo_desde,
    tramo_hasta,
  } = valuesRef;

  // Variables del componente
  const [estacionesRuta, setEstacionesRuta] = useState([]); //Carga las rutas
  const [destinosRuta, setDestinosRuta] = useState([]); //Carga los destinos

  // Carga todas las referencias que el árbol desplegará
  const referencias = getReferencias();

  // La función verifica si se ha cambiado de ruta o referencia
  const handleChangeRuta = (ref) => {
    // Se cambia la referencia en el modelo
    const target = { name: "ruta_referencia", value: ref };
    handleInputChangeRef({ target });
  };

  // La función consigue todas las estaciones de una ruta en específico
  const getDatosbyReferencia = (ref) => {
    const { estaciones, destinos } = getEstacionesByReferencia(ref);
    setEstacionesRuta(estaciones);
    setDestinosRuta(CreaDestinos(destinos));
  };

  // El hook effect asegura qeu solo cuando se cambie la ruta, debe cargar
  // las estaciones de dicha ruta seleccionada
  useEffect(() => {
    getDatosbyReferencia(ruta_referencia);
  }, [ruta_referencia]);

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item lg={12}>
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Paper className={classes.paper} variant="outlined" style={{backgroundColor:color}}>
                <Typography variant="h6" component="h4" className={classes.colorType}>
                  {titulo}
                </Typography>
              </Paper>
            </Grid>
            {/* ARBOL DE RUTAS */}
            <Grid item lg={12}>
              <div className={classes.divTree}>
                <Typography variant="h6" component="h4" style={{ margin: 6 }}>
                  Referencias
                </Typography>
                <TreeView
                  className={classes.viewRoot}
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                >
                  {referencias.map((ref) => (
                    <TreeItem key={ref.id} nodeId={ref.id} label={ref.name}>
                      {ref.rutas.map((it) => (
                        <TreeItem
                          key={it.id}
                          nodeId={it.id}
                          label={it.name}
                          onLabelClick={() => {
                            handleChangeRuta(it.id);
                          }}
                        />
                      ))}
                    </TreeItem>
                  ))}
                </TreeView>
              </div>
            </Grid>
            <Grid item lg={12} md={12} sm={12} xs={12}>
            <Typography variant="h6" component="h4" style={{ margin: 5 }}>
                Ruta de referencia sleccionada : {(ruta_referencia==="")?"Ninguna":ruta_referencia}
              </Typography> 
            </Grid>
            {/* IDA */}
            <Grid item lg={6} md={12} sm={12} xs={12}>                        
              <FormControl className={classes.formControl}>
                <InputLabel>Ida</InputLabel>
                <Select
                  native
                  value={ref_ida}
                  onChange={handleInputChangeRef}
                  inputProps={{
                    name: "ref_ida",
                  }}
                >
                  <option value={""}>...</option>
                  <option value={destinosRuta[0]}>{destinosRuta[0]}</option>
                  <option value={destinosRuta[1]}>{destinosRuta[1]}</option>
                </Select>
              </FormControl>
            </Grid>
            {/* REGRESO */}
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel>Vuelta</InputLabel>
                <Select
                  native
                  value={ref_vuelta}
                  onChange={handleInputChangeRef}
                  inputProps={{
                    name: "ref_vuelta",
                  }}
                >
                  <option value={""}>...</option>
                  <option value={destinosRuta[0]}>{destinosRuta[0]}</option>
                  <option value={destinosRuta[1]}>{destinosRuta[1]}</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12}>
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Typography variant="h6" component="h4" style={{ margin: 5 }}>
                Vueltas, idas  y regresos
              </Typography>
            </Grid>
            {/* VUELTAS */}
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <FormControl className={classes.formControl}>
                <TextField
                  id="camporetrazo"
                  label="Vueltas"
                  type="number"
                  name="num_vuelta"
                  value={num_vuelta}
                  onChange={handleInputChangeRef}
                  inputProps={{
                    step: 1,
                    min: 0,
                    max: 100,
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>
            {/* IDAS */}
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <FormControl className={classes.formControl}>
                <TextField
                  id="camporetrazo"
                  label="Idas"
                  type="number"
                  name="num_ida"
                  value={num_ida}
                  onChange={handleInputChangeRef}
                  inputProps={{
                    step: 1,
                    min: 0,
                    max: 100,
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>
            {/* REGRESOS */}
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <FormControl className={classes.formControl}>
                <TextField
                  id="camporetrazo"
                  label="Regresos"
                  type="number"
                  name="num_regreso"
                  value={num_regreso}
                  onChange={handleInputChangeRef}
                  inputProps={{
                    step: 1,
                    min: 0,
                    max: 100,
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormControl>
            </Grid>
            {/* TRAMO O CIRCUITO DESDE */}
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Typography variant="h6" component="h4" style={{ margin: 5 }}>
                {
                  (flag) ? "Circuitos" : "Tramos"
                }                
              </Typography>
            </Grid>
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel>Desde</InputLabel>
                <Select
                  native
                  value={tramo_desde}
                  onChange={handleInputChangeRef}
                  inputProps={{
                    name: "tramo_desde",
                  }}
                >
                  <option value={""}>...</option>
                  {estacionesRuta.map((it) => (
                    <option key={it.estacion} value={it.estacion}>
                      {it.estacion}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            {/* TRAMO O CIRCUITO HASTA */}
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <FormControl className={classes.formControl}>
                <InputLabel>Hasta</InputLabel>
                <Select
                  native
                  value={tramo_hasta}
                  onChange={handleInputChangeRef}
                  inputProps={{
                    name: "tramo_hasta",
                  }}
                >
                  <option value={""}>...</option>
                  {estacionesRuta.map((it) => (
                    <option key={it.estacion} value={it.estacion}>
                      {it.estacion}
                    </option>
                  ))}
                </Select>
              </FormControl>
              {/* CIRCUITOS */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

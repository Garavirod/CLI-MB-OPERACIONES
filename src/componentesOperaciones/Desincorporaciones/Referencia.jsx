import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import { getReferencias } from "../../helpers/DataGetters";
import { Paper, Typography, Container, FormControl, InputLabel, Select, Input } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  viewRoot: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },

  divTree: {
    maxHeight: 200,
    overflow: "scroll"
  },

  formControl: {
    margin: theme.spacing(3),
    minWidth: 220,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

// const renderTree = (nodes) => (
//   <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
//     {Array.isArray(nodes.children)
//       ? nodes.children.map((node) => renderTree(node))
//       : null}
//   </TreeItem>
// );


const direeciones = [
  "El caminero - indios verdes",
  "Indios verdes - El caminero",

]

export default function Referencia() {

  const [value, setValue] = React.useState(30);
  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  const referencias = getReferencias();
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        <Grid item lg={12}>
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Paper className={classes.paper} variant="outlined">
                <Typography variant="h6" component="h4">
                  Referencia
                </Typography>
              </Paper>
            </Grid>           
            {/* ARBOL DE RUTAS */}
            <Grid item lg={12}>
              <div className={classes.divTree}>
                <TreeView
                  className={classes.viewRoot}
                  defaultCollapseIcon={<ExpandMoreIcon />}
                  defaultExpandIcon={<ChevronRightIcon />}
                >
                  {
                    referencias.map((ref)=>(
                      <TreeItem key={ref.id} nodeId={ref.id} label={ref.name}>
                        {
                          ref.rutas.map((it)=>(
                            <TreeItem key={it} nodeId={it.id} label={it.name} />                        
                          ))
                        }
                      </TreeItem>
                    ))
                  }                  
                </TreeView>
              </div>
            </Grid>
             {/* IDA */}
             <Grid item lg={6} md={12} sm={12} xs={12}>
              <FormControl>
                <InputLabel>Ida</InputLabel>
                <Select
                  native
                  inputProps={{
                    name: "ida"
                  }}
                  >
                  {
                    direeciones.map((it) =>(
                      <option key={it} value={it}>
                  {it}
                </option>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            {/* REGRESO */}
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <FormControl>
                <InputLabel>Vuelta</InputLabel>
                <Select
                  native
                  inputProps={{
                    name: "regreso"
                  }}
                  >
                  {
                    direeciones.map((it) =>(
                      <option key={it} value={it}>
                  {it}
                </option>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={12}>
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <Paper className={classes.paper} variant="outlined">
                <Typography variant="h6" component="h4">
                  Incumplido /Cubierto
                </Typography>
              </Paper>
            </Grid>
            {/* VUELTAS */}
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <FormControl>
                <InputLabel id="demo-mutiple-name-label">Vueltas</InputLabel>
                <Input
                  // className={classes.input}
                  value={value}
                  margin="dense"
                  // onChange={handleInputChange}
                  onBlur={handleBlur}
                  inputProps={{
                    step: 10,
                    min: 0,
                    max: 100,
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                />
              </FormControl>
            </Grid>
            {/* IDAS */}
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <FormControl>
                <InputLabel id="demo-mutiple-name-label">Idas</InputLabel>
                <Input
                  // className={classes.input}
                  value={value}
                  margin="dense"
                  // onChange={handleInputChange}
                  onBlur={handleBlur}
                  inputProps={{
                    step: 10,
                    min: 0,
                    max: 100,
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                />
              </FormControl>
            </Grid>
            {/* REGRESOS */}
            <Grid item lg={4} md={4} sm={12} xs={12}>
              <FormControl>
                <InputLabel id="demo-mutiple-name-label">Regresos</InputLabel>
                <Input
                  value={value}
                  margin="dense"
                  // onChange={handleInputChange}
                  onBlur={handleBlur}
                  inputProps={{
                    step: 10,
                    min: 0,
                    max: 100,
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                />
              </FormControl>
            </Grid>
            {/* TRAMO DESDE */}
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <FormControl>
                <InputLabel>Desde</InputLabel>
                <Select
                  native
                  inputProps={{
                    name: "tramo_desde"
                  }}
                  >
                  {
                    direeciones.map((it) =>(
                      <option key={it} value={it}>
                  {it}
                </option>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
            {/* TRAMO HASTA */}
            <Grid item lg={6} md={12} sm={12} xs={12}>
              <FormControl>
                <InputLabel>Hasta</InputLabel>
                <Select
                  native
                  inputProps={{
                    name: "tramo_hasta"
                  }}
                  >
                  {
                    direeciones.map((it) =>(
                      <option key={it} value={it}>
                  {it}
                </option>
                    ))
                  }
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

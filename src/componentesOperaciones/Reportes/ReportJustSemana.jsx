import React, { useEffect } from "react";
import { useState } from "react";
import { httpGetData } from "../../functions/httpRequest";
import TableDataRegistros from "../Reportes/TableComponent";
import { Container, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import { GruopedDataByDate } from "../../helpers/utils";
import Alert from "@material-ui/lab/Alert";
import { PreloadData } from "../ui/PreloadData";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  rootTab: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));


// Constantes para cada elemento del tabpanel

const INCUMP = 0;
const CUMPLI = 1;
const AFECTA = 2;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

export const ReportJustSemana = () => {
  const classes = useStyles();
  const [incumplimientos, setIncumplimientos] = useState([]);
  const [cumplimientos, setCumplimientos] = useState([]);
  const [afectaciones, setAfectaciones] = useState([]);
  const [preload, setPreload] = useState(true);
  const [tab, setTab] = React.useState(INCUMP); //Estado inicial para incumplimientos 

  const handleChange = (event,newValue) => {
    setPreload(true);
    setTab(newValue);
  };

  // Incumplimientos
  useEffect(() => {
    switch (tab) {
      case INCUMP:
        getDataApoyoInucump('inc');        
        break;
      case CUMPLI:        
        getDataApoyoInucump('apo');
        break;
      case AFECTA:
        getDataApoyoInucump('afe');
        break;
      default:
        break;
    }
  }, [tab]);

  // Cumplimientos


  // Afectaciones
  const getDataApoyoInucump = async (tipo) => {
    const url = `/desincorporaciones/registros-desinc-list/${tipo}`;
    //peticion de axios genérica por url
    const _data = await httpGetData(url);
    if (_data.success) {
      if (tab===INCUMP){
        setIncumplimientos(GruopedDataByDate(_data.data));
      }else if (tab===CUMPLI){        
        setCumplimientos(GruopedDataByDate(_data.data));
      }else{
        setAfectaciones(GruopedDataByDate(_data.data,true));
      }
      setPreload(false);
    }
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <Paper className={classes.paper}>
            <Typography variant="h5" gutterBottom>
              Reportes y registros
            </Typography>
          </Paper>
        </Grid>
        <Grid item lg={12}>
          <PreloadData isVisible={preload} />
        </Grid>
        <Grid item lg={12}>
          <div className={classes.rootTab}>
            <AppBar position="static" color="default">
              <Tabs
                value={tab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="Incumplimientos" {...a11yProps(INCUMP)} />
                <Tab label="Cumpplimientos" {...a11yProps(CUMPLI)} />
                <Tab label="Afectaciones" {...a11yProps(AFECTA)} />
                <Tab label="Deducción operadores" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
              </Tabs>
            </AppBar>
            {/* INCUMPLIMIENTOS */}
            <TabPanel value={tab} index={INCUMP}>
              {incumplimientos.map((f) => (
                <Paper key={f.date} className={classes.paper}>
                  <Typography variant="h5" gutterBottom>
                    {f.date}
                  </Typography>
                  <TableDataRegistros dataRegistros={f.collection} tipoRegistro={"Incumplimiento"} />
                  <Alert severity="info"><b>KM Total : {f.kmtotal} KM</b></Alert>
                </Paper>
              ))}
            </TabPanel>
            {/* APOYOS */}
            <TabPanel value={tab} index={CUMPLI}>
            {cumplimientos.map((f) => (
                <Paper key={f.date} className={classes.paper}>
                  <Typography variant="h5" gutterBottom>
                    {f.date}
                  </Typography>
                  <TableDataRegistros dataRegistros={f.collection} tipoRegistro={"Apoyo"} />
                  <Alert severity="info"><b>KM Total : {f.kmtotal} KM</b></Alert>
                </Paper>
              ))}
            </TabPanel>
            {/* AFECTACIONES */}
            <TabPanel value={tab} index={AFECTA}>
            {afectaciones.map((f) => (
                <Paper key={f.date} className={classes.paper}>
                  <Typography variant="h5" gutterBottom>
                    {f.date}
                  </Typography>
                  <TableDataRegistros dataRegistros={f.collection} tipoRegistro={"Afectación"} />
                  <Alert severity="info"><b>KM Total : {f.kmtotal} KM</b></Alert>
                </Paper>
              ))}
            </TabPanel>
            <TabPanel value={tab} index={3}>
              Item Four
            </TabPanel>
            <TabPanel value={tab} index={4}>
              Item Five
            </TabPanel>
            <TabPanel value={tab} index={5}>
              Item Six
            </TabPanel>
            <TabPanel value={tab} index={6}>
              Item Seven
            </TabPanel>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

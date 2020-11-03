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
  // const [cumplimientos, setCumplimientos] = useState([]);
  const [tab, setTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  // Incumplimientos
  useEffect(() => {
    getDataIncumplimientos();
  }, []);

  // Cumplimientos


  // Afectaciones

  
  const getDataIncumplimientos = async () => {
    const url = "/desincorporaciones/registros-list/inc";
    //peticion de axios genérica por url
    const _data = await httpGetData(url);
    if (_data.success) {
      setIncumplimientos(GruopedDataByDate(_data.data));
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
                <Tab label="Incumplimientos" {...a11yProps(0)} />
                <Tab label="Cumpplimientos" {...a11yProps(1)} />
                <Tab label="Afectaciones" {...a11yProps(2)} />
                <Tab label="Deducción operadores" {...a11yProps(3)} />
                <Tab label="Item Five" {...a11yProps(4)} />
                <Tab label="Item Six" {...a11yProps(5)} />
                <Tab label="Item Seven" {...a11yProps(6)} />
              </Tabs>
            </AppBar>
            <TabPanel value={tab} index={0}>
              {incumplimientos.map((f) => (
                <Paper key={f.date} className={classes.paper}>
                  <Typography variant="h5" gutterBottom>
                    {f.date}
                  </Typography>
                  <TableDataRegistros dataRegistros={f.collection} />
                  <Alert severity="info">KM Total : {f.kmtotal}</Alert>
                </Paper>
              ))}
            </TabPanel>
            <TabPanel value={tab} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={tab} index={2}>
              Item Three
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

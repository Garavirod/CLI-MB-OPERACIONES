import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import {
  Container,
  Grid,
  Paper,
  Typography,
  AppBar,
  Tabs,
  Tab,
  Box,
} from "@material-ui/core";
import { TabListComponent } from "./TabListComponent";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
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

  tabroot: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
  },
}));

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

export const TabListasComponent = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Container className={classes.root}>
      <Grid container spacing={3}>
        {/* HEADER */}
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Paper className={classes.paper} variant="outlined">
            <Typography variant="h6" component="h6">
              Folios abiertos / Incumplimientos / Cumplimeintos
            </Typography>
          </Paper>
        </Grid>
        {/* TABS */}
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Grid container spacing={3}>
            <Grid item lg={12}>
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Folios abiertos" {...a11yProps(0)} />
                  <Tab label="Incumplimientos" {...a11yProps(1)} />
                  <Tab label="Cumplimientos" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
              <SwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanel value={value} index={0} dir={theme.direction}>
                  <TabListComponent typeList={"Folios abiertos"} />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                <TabListComponent typeList={"Incumplimeintos"} />                  
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                <TabListComponent typeList={"Cumplimientos"} />                  
                </TabPanel>
              </SwipeableViews>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

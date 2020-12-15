import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  Container,
  ListItemAvatar,
  Avatar,
  ListItemText,
  List,
  ListItem,
  Box,
  Paper,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import TimelineIcon from "@material-ui/icons/Timeline";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  rootList: {
    width: "100%",
    maxWidth: "100%",
    margin: 5,
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    textAlign: "center",
  },
}));

export const EstadisticasPage = () => {
  const classes = useStyles();
  return (
    <Container component="main">
      <Grid container spacing={3}>
        <Grid item lg={12}>
          <Typography variant="h3" className={classes.title}>
            Lista de estadísticas
          </Typography>
        </Grid>

        <Grid item xs={12} md={12} lg={12}>
          <List className={classes.rootList}>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <TimelineIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography>Lesionados y atropellados por semana</Typography>
                }
                secondary={
                  <Link to={"/lesionados-atropellados-chart"}>
                    ver estadísticas
                  </Link>
                }
              />
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <TimelineIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography>Colisiones por año</Typography>}
                secondary={
                  <Link to={"/colisiones-by-year"}>ver estadísticas</Link>
                }
              />
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <TimelineIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography>Responsable de colisión</Typography>}
                secondary={
                  <Link to={"/responsables-chart"}>ver estadísticas</Link>
                }
              />
            </ListItem>

            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <TimelineIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={<Typography>Colisiones por empresa al mes</Typography>}
                secondary={
                  <Link to={"/colision-empresa-chart"}>ver estadísticas</Link>
                }
              />
            </ListItem>
          </List>
        </Grid>
        {/*<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Lesionados por empresa operadora</Typography>
          <Link to={'/lesionados-atropellados-chart'}>Ver estadísticas</Link>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer sit amet egestas eros,
            vitae egestas augue. Duis vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>*/}
      </Grid>
    </Container>
  );
};

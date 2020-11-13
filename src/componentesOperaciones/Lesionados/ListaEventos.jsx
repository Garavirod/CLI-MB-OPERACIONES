import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { CustomSwalDelete } from "../../functions/customSweetAlert";
import { httpGetData } from "../../functions/httpRequest";
import { PreloadData } from "../ui/PreloadData";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { AccordionComponent } from "./AccordionComponent";
import { EventosForm } from "./EventosForm";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ListaEventos() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [preload, setPreload] = useState(true);
  useEffect(() => {
    getEventos();
  }, []);

  const getEventos = async () => {
    const url = "/lesionados/eventos";
    //peticion de axios genérica por url
    const _data = await httpGetData(url);
    if (_data.success) {
      setData(_data.data);
      setPreload(false);
    }
  };

  const deleteEvento = async (idevento) => {
    const url = `/lesionados/borra-evento/${idevento}`;
    CustomSwalDelete(url).then(() => {
      getEventos();
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item lg={12}>
        <EventosForm />
      </Grid>
      <Grid item lg={12}>
        <AccordionComponent />
      </Grid>
    </Grid>
  );
}

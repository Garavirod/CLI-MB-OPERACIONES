import React, { useEffect } from "react";
import { useState } from "react";
import { httpGetData } from "../../functions/httpRequest";
import TableDataRegistros from "../Reportes/TableComponent";
import { Container, Grid } from "@material-ui/core";

export const ReportJustSemana = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getDataDesincorporaciones();
  }, []);

  const getDataDesincorporaciones = async () => {
    const url = "/desincorporaciones/incumplimientos-list/inc";
    //peticion de axios genérica por url
    const _data = await httpGetData(url);
    if (_data.success) {      
      setData(_data.data);
    }
  };  
  {/*
    <div>
      {data.map((incp) => (
        <p key={incp.id}>{incp.fecha}</p>
      ))}
    </div>
*/}   

  return (
    <Container component="main">
      <Grid container spacing={2}>
        <Grid item lg={12}>
          <TableDataRegistros dataRegistros={data}/> 
        </Grid>
      </Grid>
    </Container>
  )
};

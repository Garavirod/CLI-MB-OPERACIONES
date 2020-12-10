import React from "react";
import { Bar } from "react-chartjs-2";
import { Container, Grid, Typography, Card, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { httpGetData } from "../../functions/httpRequest";
import { useState } from "react";


export const ColisionesByYearChart = () => {

  const [state, setState] = useState({
    labels: [],
    datasets: [
      {
        label: "Colisiones",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [],
      },
    ],
  }); ;

  useEffect(()=>{
    getData()
  },[]);


  const getData = async () => {
    const data = await httpGetData('/colisiones/colisiones-by-year');
    if(data.success){
      let labelYear = [];
      let colisions = [];
      data.data.forEach(obj => {
        labelYear.push(obj.fecha.slice(0,-20));        
        colisions.push(obj.no_colisions);                
      });
      setState({
        ...state,
        ['labels'] : labelYear,
        ['datasets']: 
          [{
            label: "Colisiones",
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: colisions,
          }]        
      });
      console.log(state);
    }
  }

  return (
    <Container component="main">
      <h1>Estadísticas</h1>
      <Link to={"/estadisticas"}>Regresar</Link>
      <Grid container spacing={3}>
        <Grid item lg={12}>
          <Card>
            <CardContent>
              <Bar
                width={800}
                height={300}
                data={state}
                options={{
                  title: {
                    display: true,
                    text: "Número de colisiones por año",
                    fontSize: 20,
                  },
                  legend: {
                    display: true,
                    position: "right",
                  },
                }}
              />
            </CardContent>
          </Card>
        </Grid>
        {/*<Grid item lg={12}>
          {//Filtros }
          <Card>
            <CardContent>
              <Typography>Filtros</Typography>
            </CardContent>
          </Card>
        </Grid>*/}
      </Grid>
    </Container>
  );
};

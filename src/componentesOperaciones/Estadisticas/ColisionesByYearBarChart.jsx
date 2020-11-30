import React from "react";
import { Bar } from "react-chartjs-2";
import { Container, Grid, Typography, Card, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
const state = {
  labels: ["2017", "2018", "2019", "2020"],
  datasets: [
    {
      label: "Colisiones",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [651, 591, 801, 810],
    },
  ],
};



export const ColisionesByYearChart = () => {
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
        <Grid item lg={12}>
          {/* Filtros */}
          <Card>
            <CardContent>
              <Typography>Filtros</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

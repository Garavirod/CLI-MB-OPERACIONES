import React from "react";
import { Pie } from "react-chartjs-2";
import { Container, Grid, Typography, Card, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";

const state = {
  labels: ["Atropellados", "Lesionados", "Total resultado"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],     
      data: [2, 48, 50],
    },
  ],
};

export const LesionAtropPieChart = () => {
  return (
    <Container component="main">
      <h1>Estadísticas</h1>
      <Link to={'/estadisticas'}>Regresar</Link>
      <Grid container spacing={3}>
        <Grid item lg={12}>
            <Card>
                <CardContent>
                    <Pie
                        width={800}
                        height={300}
                        data={state}
                        options={{
                            title: {
                            display: true,
                            text: "Número de atropellados y lesionados por semana",
                            fontSize: 30,
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

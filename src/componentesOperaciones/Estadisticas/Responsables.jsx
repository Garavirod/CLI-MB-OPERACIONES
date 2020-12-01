import React, { useEffect, useState } from 'react';
import { Pie } from "react-chartjs-2";
import { Container, Grid, Typography, Card, CardContent } from "@material-ui/core";
import { Link } from "react-router-dom";
import { httpGetData } from "../../functions/httpRequest";
import { CustomSwalError } from "../../functions/customSweetAlert";


export const Responsables = () =>{

    const [responsables, setResponsables] = useState([]);
    const [perceResp, setPerceResp] = useState([]);
    let totalCount = 0;

    function getPercentage(arrWithCounts){
        console.log("total count",totalCount);
        return arrWithCounts.map(oneRespCount => Math.round(oneRespCount * 10000 / totalCount) / 100);
    }//getPercentage

    //Se obtienen los responsables existentes en la db
    const getResponsables = async () => {
        const url = "/colisiones/responsables-list";
        //peticion de axios genérica por url
        const _data = await httpGetData(url);
        if (_data && _data.success) {
            const objArray = _data.data;
            const responsArray = objArray.map(oneObj => "% " + oneObj.paga);
            const countRespArr = objArray.map(oneRespCount => {
                totalCount += oneRespCount.countOfResp;
                return oneRespCount.countOfResp;
            });
            setResponsables(responsArray);
            const percArr = getPercentage(countRespArr);
            setPerceResp(percArr);
            console.log(responsArray);
            console.log(percArr);
        }
        else if(!_data){
            CustomSwalError();
        }
    };//getResponsables


    useEffect(() => {
        getResponsables();
    },[]);//useEffect

    const state = {
        labels: responsables,
        datasets: [
          {
            label: "Responsables",
            backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
            hoverBackgroundColor: [
              "#501800",
              "#4B5000",
              "#175000",
              "#003350",
              "#35014F",
            ],     
            data: perceResp,
          },
        ],
      };

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
                                    text: "% Responsables de las colisiones",
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
}//Responsables
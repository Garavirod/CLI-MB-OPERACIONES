import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import { httpGetData } from "../../functions/httpRequest";
import { CustomSwalError } from "../../functions/customSweetAlert";
import { Container,
    Grid,
    Card,
    CardContent,
    Select,
    FormControl,
    InputLabel, 
    CardActions,
    Button} from "@material-ui/core";
import { Link } from "react-router-dom";

export default function ColisionEmpresa(){

    const monthNames = ["enero","febrero", "marzo", "abril", "mayo","junio","julio",
                        "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    
    const currentM = new Date().getMonth();

    const [countByMonth, setCountByMonth] = useState([]);
    const usedMNames = monthNames.slice(0,currentM+1);
    const [empresas, setEmpresas] = useState([]);
    const [empresa, setEmpresa] = useState("");
    const [shEmpresa, setShEmpresa] = useState("");
    

    /*
        recibe: array con todas las colisiones de la empresa
        descr: filtra las colisiones por cada mes desde enero
            hasta el mes presente
        retorna: el array con las colisiones organizadas del mes 0 (enero)
            hasta el mes presente (currentM)
    */
    function filterByMonth(arr){
        let filtered = [currentM + 1];
        arr.map(oneCol => {
            const colsDate = new Date(oneCol.fecha);
            const oneColMonth = colsDate.getMonth();
            filtered[oneColMonth] = 
        });
        for(let i=0; i <= currentM; i++){
            const forMonthi = arr.filter(oneCol =>{
                const colsDate = new Date(oneCol.fecha);
                const oneColMonth = colsDate.getMonth();
                return oneColMonth === i
            });
            filtered.push(forMonthi);
        }//for
        return filtered;
    }//filterByMonth

    async function getData(){
        const url = `/colisiones/empresa-tiempo/${empresa}`;
        //peticion de axios genérica por url
        const data = await httpGetData(url);
        if (data && data.success) {
            const arrCols = data.data;
            console.log("arr",arrCols);
            const colsByMonth = filterByMonth(arrCols);
            console.log("filtered by Month", colsByMonth);
            const countColsByMonth = colsByMonth.map(ofOneMonth => {
                return ofOneMonth.length;
            });
            console.log("countsByMonth", countColsByMonth);
            setCountByMonth(countColsByMonth);
            setShEmpresa(empresa);
        }
        else if(!data){
            CustomSwalError();
        }
    }//getData

    //Se obtienen las empresas que han tenido colisiones
    const getEmpresas = async () => {
        const url = "/colisiones/empresas-colisionadas";
        //peticion de axios genérica por url
        const _data = await httpGetData(url);
        if (_data && _data.success) {
            setEmpresas(_data.data);
            //console.log(_data.data);
        }
        else if(!_data){
            CustomSwalError();
        }
    };//getEmpresas

    const handleChange = (event) =>{
        const value = event.target.value;
        setEmpresa(value);
    }//handleChange

    useEffect(() => {
        //getData();
        getEmpresas();
    },[]);//useEffect

    const state = {
        labels: usedMNames,
        datasets: [
          {
            label: '# Colisiones',
            backgroundColor: 'rgba(255, 48, 26, 0.92)',
            borderColor: 'rgba(1, 0, 0, 0.72)',
            borderWidth: 1,
            data: countByMonth
          }
        ]
      }

    return(

        <Container component="main">
            <h1>Estadísticas</h1>
            <Link to={"/estadisticas"}>Regresar</Link>
            <Grid container spacing={3}>
                <Grid item lg={12}>
                    {shEmpresa !== "" && (
                        <Card>
                            <CardContent>
                                <Bar
                                    data={state}
                                    width= {800}
                                    height= {300}
                                    options={{
                                        title:{
                                            display:true,
                                            text:"Colisiones de "+shEmpresa+" por mes",
                                            fontSize:20
                                        },
                                        legend:{
                                            display:true,
                                            position:'right'
                                        },
                                        maintainAspectRatio: false
                                    }}
                                />
                            </CardContent>
                        </Card>
                    )}
                </Grid>
                <Grid item lg={12}>
                    {/* Filtros */}
                    <Card>
                        <CardContent>
                            <FormControl>
                                <InputLabel>Empresa</InputLabel>
                                <Select
                                    native
                                    value={empresa}
                                    onChange={handleChange}
                                    name={"nomEmpresa"}
                                    >
                                    <option value={"Empresa"}>Empresa</option>
                                    {empresas.map((it,index) => (
                                        <option key={index} value={it.empresa}>
                                            {it.empresa}
                                        </option>
                                    ))}
                                </Select>
                            </FormControl>
                        </CardContent>
                        <CardActions>
                            <Button
                                onClick={getData}
                                type="submit"
                                size="small"
                                variant="contained"
                                color="primary"
                            >
                                Seleccionar
                            </Button>                
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}//ColisionEmpresa

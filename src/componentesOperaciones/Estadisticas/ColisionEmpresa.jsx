import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import { httpGetData } from "../../functions/httpRequest";
import { CustomSwalErrorOnLoad } from "../../functions/customSweetAlert";
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
    const currentY = new Date().getFullYear();

    const [countByMonth, setCountByMonth] = useState([]);
    const usedMNames = monthNames.slice(0,currentM+1);
    const [empresas, setEmpresas] = useState([]);
    const [empresa, setEmpresa] = useState("");
    const [shEmpresa, setShEmpresa] = useState("");
    

    /*
        recibe: array con todas las colisiones de la empresa
        descr: suma las colisiones por cada mes y se inserta dicho valor en
            la posición del array que corresponda a su mes (0-mesPresente)
        retorna: el array con la suma de colisiones por mes del mes 0 (enero)
            hasta el mes presente (currentM)
    */
    function sumByMonth(arr){
        //Crea e inicializa arr acumulador con 0
        let countsByMonth = new Array(currentM + 1).fill(0);
        arr.map(oneCol => {
            //sin el replace nos regresa un día antes al dado
            const colsDate = new Date(oneCol.Colision.fecha.replace(/-/g, '\/').replace(/T.+/, ''));
            const oneColMonth = colsDate.getMonth();
            countsByMonth[oneColMonth] += 1; 
        });
        
        return countsByMonth;
    }//sumByMonth

    async function getColisiones(){
        const url = `/colisiones/empresa-tiempo/${empresa}/${currentY}`;
        const data = await httpGetData(url);
        if (data && data.success) {
            const arrCols = data.data;
            //console.log("arr cols",arrCols);
            const countColsByMonth = sumByMonth(arrCols);
            //console.log("counts colis by Month", countColsByMonth);
            setCountByMonth(countColsByMonth);
            setShEmpresa(empresa);
        }
        else if(!data){
            CustomSwalErrorOnLoad();
        }
    }//getColisiones

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
            CustomSwalErrorOnLoad();
        }
    };//getEmpresas

    const handleChange = (event) =>{
        const value = event.target.value;
        setEmpresa(value);
    }//handleChange

    useEffect(() => {
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
                                onClick={getColisiones}
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

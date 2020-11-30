import React, { useEffect, useState } from 'react';
import {Bar} from 'react-chartjs-2';
import { useParams } from 'react-router-dom';
import { httpGetData } from "../../../functions/httpRequest";
import { CustomSwalError } from "../../../functions/customSweetAlert";

export default function ColisionEmpresa(){

    const monthNames = ["enero","febrero", "marzo", "abril", "mayo","junio","julio",
                        "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    
    const currentM = new Date().getMonth();
    console.log("currew¡nt mont", currentM);
    const {empresa} = useParams();

    const [countByMonth, setCountByMonth] = useState([]);
    const usedMNames = monthNames.slice(0,currentM+1);
    

    /*
        recibe: array con todas las colisiones de la empresa
        descr: filtra las colisiones por cada mes desde enero
            hasta el mes presente
        retorna: el array con las colisiones organizadas del mes 0 (enero)
            hasta el mes presente (currentM)
    */
    function filterByMonth(arr){
        let filtered = [];
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
            console.log(arrCols);
            const colsByMonth = filterByMonth(arrCols);
            console.log("filtered by Month", colsByMonth);
            const countColsByMonth = colsByMonth.map(ofOneMonth => {
                return ofOneMonth.length;
            });
            console.log("countsByMonth", countColsByMonth);
            setCountByMonth(countColsByMonth);
        }
        else if(!data){
            CustomSwalError();
        }
    }//getData

    useEffect(() => {
        getData();
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
        <div>
            <Bar
                data={state}
                width= {800}
                height= {300}
                options={{
                    title:{
                        display:true,
                        text:"Colisiones de "+empresa+" por mes",
                        fontSize:20
                    },
                    legend:{
                        display:true,
                        position:'right'
                    },
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
}//ColisionEmpresa

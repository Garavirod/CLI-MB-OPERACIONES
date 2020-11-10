import React from 'react';
import { useParams } from 'react-router-dom';


export const EditarFolio =()=>{
    const {idFolio} = useParams();
    return(
    <h1>Hola {idFolio}</h1>
    )
};
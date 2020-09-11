import React from 'react';
import { useParams } from 'react-router-dom';
// Components
import Ambulancia from "./Ambulancia";
import Traslado from "./TrasladoHospital";


export const FormTraslado = (req,res) =>{
    const {idAfectado, idEvento} = useParams();
    return (
        <div>
           <h4> Afectado: {idAfectado} del evento: {idEvento}</h4>
            <Ambulancia />
            <Traslado />
        </div>
    );

};
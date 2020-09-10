import React from 'react';
import { useParams } from 'react-router-dom';
// Components
import Ambulancia from "./Ambulancia";
import Traslado from "./TrasladoHospital";


export const FormTraslado = (req,res) =>{
    const {idAfectado, idEvento} = useParams();
    return (
        <div>
            Afectado: {idAfectado} del evento: {idEvento}
            <Ambulancia />
            <Traslado />

        </div>
    );

};
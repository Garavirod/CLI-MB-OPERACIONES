import { setFechaActual, setHoraActual } from "../helpers/utils";

export const ModelDesincorporacion = () =>{    
    return {        
        linea: "",
        solicita: "",
        informa: "",
        estacion: "",
        economico: "",
        empresa: "",
        motivo: "",
        odometro: "",
        credencial: "",
        nombre: "",
        fecha: setFechaActual(), // (yy/mm/dd)
        hora: setHoraActual(),
        jornada: "",
        observaciones: "",
        tipo: "Incumplido",
        edoFolio: "Abierto"      
    }
};

export const ModelIncorporacion = () =>{
    return {                      
        informa: "",
        estacion: "",
        economico: "",
        empresa: "",        
        odometro: "",
        credencial: "",
        nombre: "",
        fecha: setFechaActual(),
        hora: setHoraActual(),                        
        sentido: "",
        entrada: "",
        status: "",
        hra_retrazo:0,
        min_retrazo:0,
        seg_retrazo:0,

    }
};

// Se toma para maracar losincumplimientos o apoyos

export const ModelReferencias = () =>{
    return {
        ruta_referencia: "",
        ref_ida: "",
        ref_vuelta :"",
        num_vuelta: "0",
        num_ida: "0",
        num_regreso: "0",
        tramo_desde: "-",
        tramo_hasta:"-",
        tipo:"-",
        kilometraje:0,   
    }
}
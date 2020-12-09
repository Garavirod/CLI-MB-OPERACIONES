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
        num_vuelta: "",
        num_ida: "",
        num_regreso: "",
        tramo_desde: "-",
        tramo_hasta:"-",
        tipo:"-",
        kilometraje:0,   
    }
}
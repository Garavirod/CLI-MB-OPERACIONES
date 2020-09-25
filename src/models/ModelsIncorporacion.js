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
        fecha: "2017-05-24",
        hora: "07:30",
        jornada: "",
        observaciones: "...",
        tipo: "",
        edoFolio: "",        
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
        fecha: "2017-05-24",
        hora: "07:30",                        
        sentido: "",
        entrada: "",
        status: "",
        hra_retrazo:0,
        min_retrazo:0,
        seg_retrazo:0,

    }
};


export const ModelReferencias = () =>{
    return {
        referencia: "",
        ref_ida: "",
        ref_vuelta :"",
        num_vuelta: 0,
        num_ida: 0,
        num_regreso: 0,
        tramo_desde: "-",
        tramo_hasta:"-",
    }
}
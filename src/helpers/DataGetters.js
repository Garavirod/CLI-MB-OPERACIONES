import {httpGetData} from "../functions/httpRequest";

export const getFolios = async () =>{
    //abiertos
    
    const urlAbiertos = "/desincorporaciones/folios-abiertos";
    const resp = await httpGetData(urlAbiertos);
    if(resp.success)
    {
        const folios = [...resp.data];
        console.log(folios);
        return folios;
    }
    else
        return [];

}


/**
 * INCUMPLIMENTOS REALIZADOS
 */

export const getIncumplimientos = () =>{
    const incumplimientos = [
        {
            id: "1",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        {
            id: "2",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        {
            id: "3",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        {
            id: "4",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        {
            id: "5",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        {
            id: "6",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        {
            id: "7",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        {
            id: "8",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        {
            id: "9",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        
    ];

    return incumplimientos;
}

/**
 * CUMPLIMENTOS REALIZADOs
 */

export const getCumplimientos = () =>{
    const cumplimientos = [
        {
            id: "1",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        {
            id: "2",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        {
            id: "3",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        {
            id: "4",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        {
            id: "5",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        {
            id: "6",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        {
            id: "7",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        {
            id: "8",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        {
            id: "9",
            fecha: "23-01-12",
            ruta: "A1",
            eco: "2345",
            edo:true, //Edo del folio
        },
        
    ];

    return cumplimientos;
}


export const getJornadas = ()  =>{
    const jornadas = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15"
    ];
    return jornadas;
}


export const getSolicitudes = () =>{
    const solicitudes = [
        "Mantenimiento E.O",
        "Operaciones E.O",
        "Metrobús regulación",
        "Metrobús mantenimiento"
    ]
    return solicitudes;
}


export const getLineas = () =>{

    // Lineas
    const lineas = [
        "Linea 1",
        "Linea 2",
        "Linea 3",
        "Linea 4",
        "Linea 5",
        "Linea 6",
        "Linea 7",
    ];

  return lineas;
}


export const getSentido = () =>{
    const sentidos = [
        "S-N (117)",
        "N-S (118)",
        "O-P (121)",
        "P-O (122)",
        "N-P (123)",
        "P-N (124)"
    ]

    return sentidos;
}



export const getInfromantes = () =>{
    const informa = [
        "arce alfa",
        "ébano 1",
        "ébano 2",
        "ébano 3",
        "ébano 4",
        "ébano 5",
        "ébano 6",
        "ébano 7",
        "ébano 8",
        "ébano 9",
        "ébano 10",
        "ébano 11",
        "ébano 12",
        "ébano 13",
        "ébano 14",
        "ébano 15",
        "ébano 16",
        "ébano 17",
        "ébano 18",
        "ébano 19",
        "ébano 20",
        "ébano 21"
    ];

    return informa;
}


export const getEstacionesByLinea = (linea) =>{
    // Estaciones de la linea 1
    const estaciones = [];
    switch (linea) {
        case "Linea 1":
            for(let i =1; i<=20; i++)
                estaciones.push(`Estacion ${i} L1`);
            break;
        case "Linea 2":
            for(let i =1; i<=10; i++)
                estaciones.push(`Estacion ${i} L2`);
            break;
        default:
            for(let i =1; i<=10; i++)
                estaciones.push(`Estacion ${i} LX`);
            break;
    }    
    return estaciones;
};

export const getEconomicos = () =>{
    const economicos = [
        "2313",
        "2323",
        "2333",
        "2343",
        "2353",
        "2363",
        "2373",
        "2383",
        "2393",
        "2310",
        "2311",
        "2312",        
        "2314",
        "2315",
        "2316",
        "2317",
        "2318",
        "2319",
    ];

    return economicos;
}

export const getEstaciones = () =>{
    const estaciones = [
        "Estacion 1",
        "Estacion 2",
        "Estacion 3",
        "Estacion 4",
        "Estacion 5",
        "Estacion 6",
        "Estacion 7",
        "Estacion 8",
        "Estacion 9",
        "Estacion 10",
        "Estacion 11",
        "Estacion 12",
        "Estacion 13",
        "Estacion 14"
    ];

    return estaciones;
}


export const getEmpresaByEco = (eco) =>{
    switch (eco) {
        case "2313":
            return ["CISA"]
        case "2323":
            return ["RTP"]
        case "2333":
            return ["RECSA BI"]
        case "2343":
            return ["RTP BI"]
        case "2353":
            return ["CE4-17M BI"]
        case "":
            return []
        default:
            return ['CISA']
    }
}

export const getEmpresas = () =>{
    const empresas = [
        "Empresa 1",
        "Empresa 2",
        "Empresa 3",
        "Empresa 4",
        "Empresa 5",
        "Empresa 6",
        "Empresa 7",
        "Empresa 8",
        "Empresa 9",
        "Empresa 10",
        "Empresa 11",
        "Empresa 12",
        "Empresa 13",
        "Empresa 14"
    ];

    return empresas;
}


export const getDistanciasByRuta = (ruta) =>{

    switch (ruta) {
        case "A1":
            return {
                idRuta: "A1",
                tag_destino:"I. Verdes - Dr. Gálvez",
                vuelta_completa:39.70, //en KM
                distancias_ida :[
                    {
                        Estacion:'I. Verdes',
                        Acumulado:0.00
                    },{
                        Estacion:'Dptvo. 18 Mzo.',
                        Acumulado:1.82
                    },{
                        Estacion:'Euzkaro',
                        Acumulado:2.29
                    },{
                        Estacion:'Potrero',
                        Acumulado:3.10
                    },{
                        Estacion:'La Raza',
                        Acumulado:4.18
                    },{
                        Estacion:'Circuito',
                        Acumulado:5.02
                    },{
                        Estacion:'San Simón',
                        Acumulado:5.43
                    },{
                        Estacion:'Manuel Glz.',
                        Acumulado:5.88
                    },{
                        Estacion:'Buenavista',
                        Acumulado:7.04
                    },{
                        Estacion:'El Chopo',
                        Acumulado:7.41
                    },{
                        Estacion:'Revolución',
                        Acumulado:7.76
                    },{
                        Estacion:'Plaza de la República',
                        Acumulado:8.29
                    },{
                        Estacion:'Reforma',
                        Acumulado:8.64
                    },{
                        Estacion:'Hamburgo',
                        Acumulado:9.27
                    },{
                        Estacion:'Insurgentes',
                        Acumulado:9.70
                    },{
                        Estacion:'Durango',
                        Acumulado:10.20
                    },{
                        Estacion:'Álvaro Obregón',
                        Acumulado:10.56
                    },{
                        Estacion:'Sonora',
                        Acumulado:10.91
                    },{
                        Estacion:'Campeche',
                        Acumulado:11.30
                    },{
                        Estacion:'Chilpancingo',
                        Acumulado:11.67
                    },{
                        Estacion:'Nuevo León',
                        Acumulado:12.20
                    },{
                        Estacion:'La Piedad',
                        Acumulado:12.66
                    },{
                        Estacion:'Poliforum',
                        Acumulado:13.17
                    },{
                        Estacion:'Nápoles',
                        Acumulado:13.59
                    },{
                        Estacion:'Col. del Valle',
                        Acumulado:14.04
                    },{
                        Estacion:'Cd. de los Deportes',
                        Acumulado:14.31
                    },{
                        Estacion:'Parque Hundido',
                        Acumulado:14.63
                    },{
                        Estacion:'Félix Cuevas',
                        Acumulado:15.18
                    },{
                        Estacion:'Río Churubusco',
                        Acumulado:15.80
                    },{
                        Estacion:'Teatro Insurgentes',
                        Acumulado:16.24
                    },{
                        Estacion:'José María Velasco',
                        Acumulado:16.63
                    },{
                        Estacion:'Francia',
                        Acumulado:16.99
                    },{
                        Estacion:'Olivo',
                        Acumulado:17.42
                    },{
                        Estacion:'Altavista',
                        Acumulado:17.85
                    },{
                        Estacion:'La Bombilla',
                        Acumulado:18.31
                    },{
                        Estacion:'Dr. Gálvez',
                        Acumulado:19.01
                    },{
                        Estacion:'Retorno Dr. Gálvez',
                        Acumulado:20.51
                    },
                ],
                distancias_reg: [
                    {
                        Estacion:'Dr. Gálvez',
                        Acumulado:0.00
                    },{
                        Estacion:'La Bombilla',
                        Acumulado:0.70
                    },{
                        Estacion:'Altavista',
                        Acumulado:1.16
                    },{
                        Estacion:'Olivo',
                        Acumulado:1.58
                    },{
                        Estacion:'Francia',
                        Acumulado:2.01
                    },{
                        Estacion:'José María Velasco',
                        Acumulado:2.37
                    },{
                        Estacion:'Teatro Insurgentes',
                        Acumulado:2.76
                    },{
                        Estacion:'Río Churubusco',
                        Acumulado:3.19
                    },{
                        Estacion:'Félix Cuevas',
                        Acumulado:3.81
                    },{
                        Estacion:'Parque Hundido',
                        Acumulado:4.37
                    },{
                        Estacion:'Cd. de los Deportes',
                        Acumulado:4.69
                    },{
                        Estacion:'Col. del Valle',
                        Acumulado:5.05
                    },{
                        Estacion:'Nápoles',
                        Acumulado:5.50
                    },{
                        Estacion:'Poliforum',
                        Acumulado:5.93
                    },{
                        Estacion:'La Piedad',
                        Acumulado:6.43
                    },{
                        Estacion:'Nuevo León',
                        Acumulado:6.89
                    },{
                        Estacion:'CamChilpancingoinero',
                        Acumulado:7.41
                    },{
                        Estacion:'Campeche',
                        Acumulado:7.79
                    },{
                        Estacion:'Sonora',
                        Acumulado:8.18
                    },{
                        Estacion:'Álvaro Obregón',
                        Acumulado:8.53
                    },{
                        Estacion:'Durango',
                        Acumulado:8.89
                    },{
                        Estacion:'Insurgentes',
                        Acumulado:9.29
                    },{
                        Estacion:'Hamburgo',
                        Acumulado:9.83
                    },{
                        Estacion:'Reforma',
                        Acumulado:10.46
                    },{
                        Estacion:'Plaza de la República',
                        Acumulado:10.78
                    },{
                        Estacion:'Revolución',
                        Acumulado:11.31
                    },{
                        Estacion:'El Chopo',
                        Acumulado:11.62
                    },{
                        Estacion:'Buenavista',
                        Acumulado:12.06
                    },{
                        Estacion:'Manuel Glz.',
                        Acumulado:13.20
                    },{
                        Estacion:'San Simón',
                        Acumulado:13.66
                    },{
                        Estacion:'Circuito',
                        Acumulado:14.03
                    },{
                        Estacion:'La Raza',
                        Acumulado:14.90
                    },{
                        Estacion:'Potrero',
                        Acumulado:15.96
                    },{
                        Estacion:'Euzkaro',
                        Acumulado:16.76
                    },{
                        Estacion:'Dptvo. 18 Mzo.',
                        Acumulado:17.26
                    },{
                        Estacion:'Indios Verdes',
                        Acumulado:18.99
                    },{
                        Estacion:'Retorno Indios Verdes',
                        Acumulado:19.19
                    },
    
                ]
            }
            
        case "A20":
            return {
                idRuta: "A20",
                tag_destino:"Insurgentes - La Joya",
                vuelta_completa:35.10, //en KM
                distancias_ida :[
                    {
                        Estacion:'Insurgentes',
                        Acumulado:0.00
                    },{
                        Estacion:'Durango',
                        Acumulado:10.20
                    },{
                        Estacion:'Álvaro Obregón',
                        Acumulado:10.56
                    },{
                        Estacion:'Sonora',
                        Acumulado:10.91
                    },{
                        Estacion:'Campeche',
                        Acumulado:11.30
                    },{
                        Estacion:'Chilpancingo',
                        Acumulado:11.67
                    },{
                        Estacion:'Nuevo León',
                        Acumulado:12.20
                    },{
                        Estacion:'La Piedad',
                        Acumulado:12.66
                    },{
                        Estacion:'Poliforum',
                        Acumulado:13.17
                    },{
                        Estacion:'Nápoles',
                        Acumulado:13.59
                    },{
                        Estacion:'Col. del Valle',
                        Acumulado:14.04
                    },{
                        Estacion:'Cd. de los Deportes',
                        Acumulado:14.31
                    },{
                        Estacion:'Parque Hundido',
                        Acumulado:14.63
                    },{
                        Estacion:'Félix Cuevas',
                        Acumulado:15.18
                    },{
                        Estacion:'Río Churubusco',
                        Acumulado:15.80
                    },{
                        Estacion:'Teatro Insurgentes',
                        Acumulado:16.24
                    },{
                        Estacion:'José María Velasco',
                        Acumulado:16.63
                    },{
                        Estacion:'Francia',
                        Acumulado:16.99
                    },{
                        Estacion:'Olivo',
                        Acumulado:17.42
                    },{
                        Estacion:'Altavista',
                        Acumulado:17.85
                    },{
                        Estacion:'La Bombilla',
                        Acumulado:18.31
                    },{
                        Estacion:'Dr. Gálvez',
                        Acumulado:19.01
                    },{
                        Estacion:'Ciudad Universitaria',
                        Acumulado:21.02
                    },{
                        Estacion:'C. Cultura Universitario',
                        Acumulado:21.82
                    },{
                        Estacion:'Perisur',
                        Acumulado:23.12
                    },{
                        Estacion:'Villa Olimpica',
                        Acumulado:23.64
                    },{
                        Estacion:'Corregidora',
                        Acumulado:24.47
                    },{
                        Estacion:'Ayuntamiento',
                        Acumulado:24.87
                    },{
                        Estacion:'Fuentes Brotantes',
                        Acumulado:25.63
                    },{
                        Estacion:'Santa Úrsula',
                        Acumulado:26.16
                    },{
                        Estacion:'La Joya',
                        Acumulado:26.84
                    },{
                        Estacion:'Retorno La Joya',
                        Acumulado:27.32
                    },
                ],
                distancias_reg: [
                    {
                        Estacion:'El Caminero',
                        Acumulado:0.00
                    },{
                        Estacion:'La Joya',
                        Acumulado:0.18
                    },{
                        Estacion:'Santa Úrsula',
                        Acumulado:0.84
                    },{
                        Estacion:'Fuentes Brotantes',
                        Acumulado:1.37
                    },{
                        Estacion:'Ayuntamiento',
                        Acumulado:2.15
                    },{
                        Estacion:'Corregidora',
                        Acumulado:2.55
                    },{
                        Estacion:'Villa Olimpica',
                        Acumulado:3.36
                    },{
                        Estacion:'Perisur',
                        Acumulado:3.94
                    },{
                        Estacion:'C. Cultural Universitario',
                        Acumulado:5.15
                    },{
                        Estacion:'Ciudad Universitaria',
                        Acumulado:5.98
                    },{
                        Estacion:'Dr. Gálvez',
                        Acumulado:7.99
                    },{
                        Estacion:'La Bombilla',
                        Acumulado:8.69
                    },{
                        Estacion:'Altavista',
                        Acumulado:9.15
                    },{
                        Estacion:'Olivo',
                        Acumulado:9.57
                    },{
                        Estacion:'Francia',
                        Acumulado:10.00
                    },{
                        Estacion:'José María Velasco',
                        Acumulado:10.36
                    },{
                        Estacion:'Teatro Insurgentes',
                        Acumulado:10.75
                    },{
                        Estacion:'Río Churubusco',
                        Acumulado:11.18
                    },{
                        Estacion:'Félix Cuevas',
                        Acumulado:11.80
                    },{
                        Estacion:'Parque Hundido',
                        Acumulado:12.36
                    },{
                        Estacion:'Cd. de los Deportes',
                        Acumulado:12.68
                    },{
                        Estacion:'Col. del Valle',
                        Acumulado:13.04
                    },{
                        Estacion:'Nápoles',
                        Acumulado:13.49
                    },{
                        Estacion:'Poliforum',
                        Acumulado:13.92
                    },{
                        Estacion:'La Piedad ',
                        Acumulado:14.42
                    },{
                        Estacion:'Nuevo León',
                        Acumulado:14.88
                    },{
                        Estacion:'Chilpancingo',
                        Acumulado:15.40
                    },{
                        Estacion:'Campeche',
                        Acumulado:15.78
                    },{
                        Estacion:'Sonora',
                        Acumulado:16.17
                    },{
                        Estacion:'Álvaro Obregón',
                        Acumulado:16.52
                    },{
                        Estacion:'Durango',
                        Acumulado:16.88
                    },{
                        Estacion:'Insurgentes',
                        Acumulado:17.28
                    },{
                        Estacion:'Retorno Insurgentes',
                        Acumulado:17.48
                    },
    
                ]
            }
        default:
            return {
                idRuta: "AX",
                tag_destino:"Insurgentes-La Joya",
                vuelta_completa:35.10, //en KM
                distancias_ida :[
                    {
                        Estacion:'Insurgentes',
                        Acumulado:0.00
                    },{
                        Estacion:'Durango',
                        Acumulado:10.20
                    },{
                        Estacion:'Álvaro Obregón',
                        Acumulado:10.56
                    },{
                        Estacion:'Sonora',
                        Acumulado:10.91
                    },{
                        Estacion:'Campeche',
                        Acumulado:11.30
                    },{
                        Estacion:'Chilpancingo',
                        Acumulado:11.67
                    },{
                        Estacion:'Nuevo León',
                        Acumulado:12.20
                    },{
                        Estacion:'La Piedad ',
                        Acumulado:12.66
                    },{
                        Estacion:'Poliforum',
                        Acumulado:13.17
                    },{
                        Estacion:'Nápoles',
                        Acumulado:13.59
                    },{
                        Estacion:'Col. del Valle',
                        Acumulado:14.04
                    },{
                        Estacion:'Cd. de los Deportes',
                        Acumulado:14.31
                    },{
                        Estacion:'Parque Hundido',
                        Acumulado:14.63
                    },{
                        Estacion:'Félix Cuevas',
                        Acumulado:15.18
                    },{
                        Estacion:'Río Churubusco',
                        Acumulado:15.80
                    },{
                        Estacion:'Teatro Insurgentes',
                        Acumulado:16.24
                    },{
                        Estacion:'José María Velasco',
                        Acumulado:16.63
                    },{
                        Estacion:'Francia',
                        Acumulado:16.99
                    },{
                        Estacion:'Olivo',
                        Acumulado:17.42
                    },{
                        Estacion:'Altavista',
                        Acumulado:17.85
                    },{
                        Estacion:'La Bombilla',
                        Acumulado:18.31
                    },{
                        Estacion:'Dr. Gálvez',
                        Acumulado:19.01
                    },{
                        Estacion:'Ciudad Universitaria',
                        Acumulado:21.02
                    },{
                        Estacion:'C. Cultura Universitario',
                        Acumulado:21.82
                    },{
                        Estacion:'Perisur',
                        Acumulado:23.12
                    },{
                        Estacion:'Villa Olimpica',
                        Acumulado:23.64
                    },{
                        Estacion:'Corregidora',
                        Acumulado:24.47
                    },{
                        Estacion:'Ayuntamiento',
                        Acumulado:24.87
                    },{
                        Estacion:'Fuentes Brotantes',
                        Acumulado:25.63
                    },{
                        Estacion:'Santa Úrsula',
                        Acumulado:26.16
                    },{
                        Estacion:'La Joya',
                        Acumulado:26.84
                    },{
                        Estacion:'Retorno La Joya',
                        Acumulado:27.32
                    },
                ],
                distancias_reg: [
                    {
                        Estacion:'El Caminero',
                        Acumulado:0.00
                    },{
                        Estacion:'La Joya',
                        Acumulado:0.18
                    },{
                        Estacion:'Santa Úrsula',
                        Acumulado:0.84
                    },{
                        Estacion:'Fuentes Brotantes',
                        Acumulado:1.37
                    },{
                        Estacion:'Ayuntamiento',
                        Acumulado:2.15
                    },{
                        Estacion:'Corregidora',
                        Acumulado:2.55
                    },{
                        Estacion:'Villa Olimpica',
                        Acumulado:3.36
                    },{
                        Estacion:'Perisur',
                        Acumulado:3.94
                    },{
                        Estacion:'C. Cultural Universitario',
                        Acumulado:5.15
                    },{
                        Estacion:'Ciudad Universitaria',
                        Acumulado:5.98
                    },{
                        Estacion:'Dr. Gálvez',
                        Acumulado:7.99
                    },{
                        Estacion:'La Bombilla',
                        Acumulado:8.69
                    },{
                        Estacion:'Altavista',
                        Acumulado:9.15
                    },{
                        Estacion:'Olivo',
                        Acumulado:9.57
                    },{
                        Estacion:'Francia',
                        Acumulado:10.00
                    },{
                        Estacion:'José María Velasco',
                        Acumulado:10.36
                    },{
                        Estacion:'Teatro Insurgentes',
                        Acumulado:10.75
                    },{
                        Estacion:'Río Churubusco',
                        Acumulado:11.18
                    },{
                        Estacion:'Félix Cuevas',
                        Acumulado:11.80
                    },{
                        Estacion:'Parque Hundido',
                        Acumulado:12.36
                    },{
                        Estacion:'Cd. de los Deportes',
                        Acumulado:12.68
                    },{
                        Estacion:'Col. del Valle',
                        Acumulado:13.04
                    },{
                        Estacion:'Nápoles',
                        Acumulado:13.49
                    },{
                        Estacion:'Poliforum',
                        Acumulado:13.92
                    },{
                        Estacion:'La Piedad ',
                        Acumulado:14.42
                    },{
                        Estacion:'Nuevo León',
                        Acumulado:14.88
                    },{
                        Estacion:'Chilpancingo',
                        Acumulado:15.40
                    },{
                        Estacion:'Campeche',
                        Acumulado:15.78
                    },{
                        Estacion:'Sonora',
                        Acumulado:16.17
                    },{
                        Estacion:'Álvaro Obregón',
                        Acumulado:16.52
                    },{
                        Estacion:'Durango',
                        Acumulado:16.88
                    },{
                        Estacion:'Insurgentes',
                        Acumulado:17.28
                    },{
                        Estacion:'Retorno Insurgentes',
                        Acumulado:17.48
                    },
    
                ]
            }
    }
    

}

export const getEstacionesByReferencia = (ref) =>{
    let data = {};

    switch (ref) {
        case "A1":
            data = {
                    id: "L1",
                    destinos: ["I. Verdes", "Dr. Gálvez"],  
                    estaciones :[
                        {
                            idEstacion: "1",
                            estacion :"I. Verdes"
                        },
                        {
                            idEstacion: "2",
                            estacion :"Dptvo. 18 Mzo."
                        },
                        {
                            idEstacion: "3",
                            estacion :"Euzkaro"
                        },
                        {
                            idEstacion: "4",
                            estacion :"La Raza"
                        },
                        {
                            idEstacion: "5",
                            estacion :"Circuito"
                        },
                        {
                            idEstacion: "6",
                            estacion :"San Simón"
                        },
                        {
                            idEstacion: "7",
                            estacion :"Manuel Glz."
                        },
                        {
                            idEstacion: "8",
                            estacion :"Buenavista"
                        },
                        {
                            idEstacion: "9",
                            estacion :"El Chopo"
                        },
                        {
                            idEstacion: "10",
                            estacion :"Revolución"
                        },
                        {
                            idEstacion: "11",
                            estacion :"Plaza de la República"
                        },
                        {
                            idEstacion: "12",
                            estacion :"Reforma"
                        },
                        {
                            idEstacion: "13",
                            estacion :"Hamburgo"
                        },
                        {
                            idEstacion: "14",
                            estacion :"Insurgentes"
                        },
                        {
                            idEstacion: "15",
                            estacion :"Durango"
                        },
                        {
                            idEstacion: "16",
                            estacion :"Álvaro Obregón"
                        },
                        {
                            idEstacion: "17",
                            estacion :"Sonora"
                        },
                        {
                            idEstacion: "18",
                            estacion :"Campeche"
                        },
                        {
                            idEstacion: "19",
                            estacion :"Chilpancingo"
                        },
                        {
                            idEstacion: "20",
                            estacion :"Nuevo León"
                        },
                        {
                            idEstacion: "21",
                            estacion :"La Piedad"
                        },
                        {
                            idEstacion: "22",
                            estacion :"Poliforum"
                        },
                        {
                            idEstacion: "23",
                            estacion :"Nápoles"
                        },
                        {
                            idEstacion: "24",
                            estacion :"Col. del Valle"
                        },
                        {
                            idEstacion: "25",
                            estacion :"Cd. de los Deportes"
                        },
                        {
                            idEstacion: "26",
                            estacion :"Parque Hundido"
                        },
                        {
                            idEstacion: "27",
                            estacion :"Félix Cuevas"
                        },
                        {
                            idEstacion: "28",
                            estacion :"Río Churubusco"
                        },
                        {
                            idEstacion: "29",
                            estacion :"Teatro Insurgentes"
                        },
                        {
                            idEstacion: "30",
                            estacion :"José María Velasco"
                        },
                        {
                            idEstacion: "31",
                            estacion :"Francia"
                        },
                        {
                            idEstacion: "32",
                            estacion :"Olivo"
                        },
                        {
                            idEstacion: "33",
                            estacion :"Altavista"
                        },
                        {
                            idEstacion: "34",
                            estacion :"La Bombilla"
                        },
                        {
                            idEstacion: "35",
                            estacion :"Dr. Gálvez"
                        },        
                    ]
                }
            break;           
        case "A20":
            
            data = {
                    id: "L1",
                    destinos: ["Insurgentes", "La Joya"],  
                    estaciones :[
                        {
                            idEstacion: "1",
                            estacion :"Insurgentes"
                        },
                        {
                            idEstacion: "2",
                            estacion :"Durango"
                        },
                        {
                            idEstacion: "3",
                            estacion :"Álvaro Obregón"
                        },
                        {
                            idEstacion: "4",
                            estacion :"Sonora"
                        },
                        {
                            idEstacion: "5",
                            estacion :"Campeche"
                        },
                        {
                            idEstacion: "6",
                            estacion :"Chilpancingo"
                        },
                        {
                            idEstacion: "7",
                            estacion :"Nuevo León"
                        },
                        {
                            idEstacion: "8",
                            estacion :"La Piedad"
                        },
                        {
                            idEstacion: "9",
                            estacion :"Poliforum"
                        },
                        {
                            idEstacion: "10",
                            estacion :"Nápoles"
                        },
                        {
                            idEstacion: "11",
                            estacion :"Col. del Valle"
                        },
                        {
                            idEstacion: "12",
                            estacion :"Cd. de los Deportes"
                        },
                        {
                            idEstacion: "13",
                            estacion :"Parque Hundido"
                        },
                        {
                            idEstacion: "14",
                            estacion :"Félix Cuevas"
                        },
                        {
                            idEstacion: "15",
                            estacion :"Río Churubusco"
                        },
                        {
                            idEstacion: "16",
                            estacion :"Teatro Insurgentes"
                        },
                        {
                            idEstacion: "17",
                            estacion :"José María Velasco"
                        },
                        {
                            idEstacion: "18",
                            estacion :"Francia"
                        },
                        {
                            idEstacion: "19",
                            estacion :"Olivo"
                        },
                        {
                            idEstacion: "20",
                            estacion :"Altavista"
                        },
                        {
                            idEstacion: "21",
                            estacion :"La Bombilla"
                        },
                        {
                            idEstacion: "22",
                            estacion :"Dr. Gálvez"
                        },
                        {
                            idEstacion: "23",
                            estacion :"Ciudad Universitaria"
                        },
                        {
                            idEstacion: "24",
                            estacion :"C. Cultura Universitario"
                        },
                        {
                            idEstacion: "25",
                            estacion :"Perisur"
                        },
                        {
                            idEstacion: "26",
                            estacion :"Villa Olimpica"
                        },
                        {
                            idEstacion: "27",
                            estacion :"Corregidora"
                        },
                        {
                            idEstacion: "28",
                            estacion :"Ayuntamiento"
                        },
                        {
                            idEstacion: "29",
                            estacion :"Fuentes Brotantes"
                        },
                        {
                            idEstacion: "30",
                            estacion :"Santa Úrsula"
                        },
                        {
                            idEstacion: "31",
                            estacion :"La Joya"
                        },
        
                    ]
                }
                break;     
        default:
            data = {
                id: "L1",
                destinos: ["Inicio", "Destino"],  
                estaciones :[
                    {
                        idEstacion: "1",
                        estacion :"Estacion test 1"
                    },
                    {
                        idEstacion: "2",
                        estacion :"Estacion test 2"
                    },
                    {
                        idEstacion: "3",
                        estacion :"Estacion test 3"
                    },
                    {
                        idEstacion: "4",
                        estacion :"Estacion test 4"
                    },
                    {
                        idEstacion: "5",
                        estacion :"Estacion test 5"
                    },
    
                ]
            }
        break;
            
    }
    return data;
}


export const getReferencias = () =>{

    const referenias = [
        {
            id: "L1",
            name : "L01 - Linea 1 - Corredor Insurgentes (33)",
            rutas :[
                {
                    id: "A1",
                    name : "01-101 A1",                                      
                }, 
                // {
                //     id: "A2",
                //     name : "01-102 A2",
                    
                // }, 
                // {
                //     id: "A3",
                //     name : "01-103 A3",
                    
                // }, 
                {
                    id: "A20",
                    name : "01-120 A20",
                    
                },                            
            ]

        },
        {
            id: "L2",
            name : "L02 - Linea 2 - Eje 4 sur (34)",
            rutas :[
                // {
                //     id: "C1",
                //     name : "02-201 C1",
                    
                // }, 
                // {
                //     id: "C2",
                //     name : "02-202 C2",
                    
                // }, 
                // {
                //     id: "C3",
                //     name : "02-203 C3",
                    
                // }, 
                // {
                //     id: "C4",
                //     name : "02-204 C4",
                    
                // },                            
            ]

        },
        {
            id: "L4",
            name : "L04 - Linea 4 - Buenavista San Lazaro Aeropuerto",
            rutas :[
                // {
                //     id: "L41",
                //     name : "04-401 E1 Norte",
                    
                // }, 
                // {
                //     id: "L42",
                //     name : "04-402 E2 Sur",
                    
                // }, 
                // {                        
                //     id: "L43",
                //     name : "04-403 E3 Norte",
                    
                // },                                    
            ]

        },
    ]

    return referenias;
}

// Datos de una desincorporacion

export const getDatosByFolio = (folio) =>{
    return {        
            linea: "Linea 1",
            solicita: "Mantenimiento E.O",
            informa: "ébano 2",
            estacion: "Estacion 1 L1",
            economico: "2343",
            empresa: "RTP",
            motivo: "Motivo 1",
            odometro: "1234.45",
            credencial: "MBCRED123",
            nombre: "Carlos Rivera",
            fecha: "2020-01-12", // (yy/mm/dd)
            hora: "11:45",
            jornada: "5",
            observaciones: "Observación de prueba",
            tipo: "Apoyo",
            edoFolio: "Abierto"         
        }    
}


export const getIncumplimientosByFolio = (folio) =>{
    return{
            ruta_referencia: "A1",
            ref_ida: "El caminero - Indios Verdes",
            ref_vuelta :"Indios Verdes - El caminero",
            num_vuelta: 2,
            num_ida: 1,
            num_regreso: 1,
            tramo_desde: "El caminero",
            tramo_hasta:"Estacion 2",
            kilometraje:12.34
        }        
}


export const getCumplimientosByFolio = (folio) =>{
    return{
            ruta_referencia: "A20",
            ref_ida: "Insurgentes - La Joya",            
            num_vuelta: 4,
            num_ida: 2,
            num_regreso: 2,
            tramo_desde: "Estacion 1",
            tramo_hasta:"Estacion 2",
            kilometraje:23.4
        }        
}

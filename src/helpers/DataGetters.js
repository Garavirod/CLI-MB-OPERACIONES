export const getFolios = () =>{
    const folios = [
        "Oliver Hansen",
        "Van Henry",
        "April Tucker",
        "Ralph Hubbard",
        "Omar Alexander",
        "Carlos Abbott",
        "Miriam Wagner",
        "Bradley Wilkerson",
        "Virginia Andrews",
        "Kelly Snyder",
        
    ];

    return folios;
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


export const getEconomicos = () =>{    
    const economicos = [
        "Económico 1",
        "Económico 2",
        "Económico 3",
        "Económico 4",
        "Económico 5",
        "Económico 6",
        "Económico 7",
        "Económico 8",
        "Económico 9",
        "Económico 10",
        "Económico 11",
        "Económico 12",
        "Económico 13",
        "Económico 14"
    ];

    return economicos;
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

export const getEstacionesbyRuta = (ruta) =>{
    
};



export const getDistancias = (ruta) =>{

    return [
        {
            idRuta: "A1",
            tag_destino:"Insurgentes-La Joya",
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
        },
        {
            
        }
    ]


}

export const getReferencias = () =>{

    const referenias = [
        {
            id: "L1",
            name : "L01 - Linea 1 - Corredor Insurgentes (33)",
            rutas :[
                {
                    id: "L11",
                    name : "01-101 A1",
                    ida_destino: ["El caminero - IV", "Iv El"],
                    children: []
                }, 
                {
                    id: "L12",
                    name : "01-102 A2",
                    children: []
                }, 
                {
                    id: "L13",
                    name : "01-103 A3",
                    children: []
                }, 
                {
                    id: "L14",
                    name : "01-104 A1",
                    children: []
                },                            
            ]

        },
        {
            id: "L2",
            name : "L02 - Linea 2 - Eje 4 sur (34)",
            rutas :[
                {
                    id: "L21",
                    name : "02-201 C1",
                    children: []
                }, 
                {
                    id: "L22",
                    name : "02-202 C2",
                    children: []
                }, 
                {
                    id: "L23",
                    name : "02-203 C3",
                    children: []
                }, 
                {
                    id: "L24",
                    name : "02-204 C4",
                    children: []
                },                            
            ]

        },
        {
            id: "L4",
            name : "L04 - Linea 4 - Buenavista San Lazaro Aeropuerto",
            rutas :[
                {
                    id: "L41",
                    name : "04-401 E1 Norte",
                    children: []
                }, 
                {
                    id: "L42",
                    name : "04-402 E2 Sur",
                    children: []
                }, 
                {
                    id: "L43",
                    name : "04-403 E3 Norte",
                    children: []
                },                                    
            ]

        },
    ]

    return referenias;
}

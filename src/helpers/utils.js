import {getDistanciasByRuta} from './DataGetters';

export const setFechaActual = () =>{
    const f = new Date();
    let day = (f.getDate()).toString();
    let month = (f.getMonth()+1).toString();
    let year = (f.getFullYear()).toString();

    if( parseInt(day) <10 ){
        day = `0${day}`;
    }else if (parseInt(month) <10){
        month = `0${month}`;
    }

    return `${year}-${month}-${day}`;
}


export const setHoraActual = () =>{
    const f = new Date();
    let hr = (f.getHours()).toString();
    let min = (f.getMinutes()).toString();

    if( parseInt(hr) <10 ){
        hr = "0"+hr;
    }else if (parseInt(min) < 10){
        min = "0"+min;
    }

    return `${hr}:${min}`;

}


const kilometrajeByTramos = (tramo1,tramo2, distancias) =>{
    // El incumplimiento o cumplimiento fue por tramos
    let [_distE1] = distancias.filter(e=> e['Estacion'] === tramo1);
    let [_distE2] = distancias.filter(e=> e['Estacion'] === tramo2);
    console.log("OBJ E1",_distE1);
    console.log("OBJ E2",_distE2);       
    // Si la estacion es la ultima (penúltima array), se considera la distancia del retorno (última array)
    if (_distE2 === distancias[distancias.length - 2]){

        _distE2 = distancias[distancias.length - 1] 
    }

    return Math.abs(_distE2['Acumulado'] - _distE1['Acumulado']);
}

export const setKilometrajeCalculado = (referencia) =>{    
    // Desestructuramos datos de la referecnia
    const {
        ruta_referencia,
        num_vuelta,
        ref_ida,
        tramo_desde,
        tramo_hasta
    } = referencia;
    // Kilometraje a retornar
    let kilometraje = 0;
    // Extraemos las distancias de la ruta seleccionada de ida y vuelta
    const distanciasData = getDistanciasByRuta(ruta_referencia);
    // Desestructuramos el obj de las distancias
    const {
        tag_destino,
        vuelta_completa,
        distancias_ida,
        distancias_reg
    } = distanciasData;
    
    // Extramos las distancias de ida o vuelta según la referencia de ida
    const distancias = (ref_ida === tag_destino) ? distancias_ida : distancias_reg;
    
    if(parseInt(num_vuelta)===0){
        // El incumplimiento o cumplimiento fue por tramos        
        kilometraje = kilometrajeByTramos(tramo_desde,tramo_hasta,distancias);
    }else if(parseInt(num_vuelta)!==0 && tramo_desde !== "-" && tramo_hasta !== "-"){
        // Kilometraje pir vueltas en circuito
        kilometraje = num_vuelta * kilometrajeByTramos(tramo_desde,tramo_hasta,distancias)
    }
    else{
        // Fue por vuleta completa en un aruta
        // Se calcula el kilometraje por numero de vuletas completas
        kilometraje = num_vuelta*vuelta_completa;
    }

    return parseFloat(kilometraje.toFixed(3));
}
import {getDistanciasByRuta} from './DataGetters';

export const setFechaActual = () =>{
    const f = new Date();
    let day = (f.getDate()).toString();
    let month = (f.getMonth()+1).toString();
    let year = (f.getFullYear()).toString();

    if( parseInt(day) < 10 ){
        day = `0${day}`;
    }if (parseInt(month) < 10){
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
    }if (parseInt(min) < 10){
        min = "0"+min;
    }

    return `${hr}:${min}`;

}

/**
 * Retorna el kilometraje por trammos o circuitos
 * @param {estación origen} tramo1 
 * @param {estación destino} tramo2 
 * @param {array de distancias segun la dirección} distancias 
 */
const kilometrajeByTramos = (tramo1,tramo2, distancias) =>{
    // El incumplimiento o cumplimiento fue por tramos
    let [_distE1] = distancias.filter(e=> e['Estacion'] === tramo1);
    let [_distE2] = distancias.filter(e=> e['Estacion'] === tramo2);
    /* console.log("OBJ E1",_distE1);
    console.log("OBJ E2",_distE2);   */     
    // Si la estacion es la ultima (penúltima array), se considera la distancia del retorno (última array)
    if (_distE2 === distancias[distancias.length - 2]){
        console.log("??",distancias[distancias.length - 1]);
        _distE2 = distancias[distancias.length - 1] 
    }
    // Retorna la direferecnia de los kilometrajes de la estacion origen y destino
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
    
    // si fue por vuelta complet no importan los tramos (sólo vaidamos num_vueltas)
    if(parseInt(num_vuelta)===0 || num_vuelta === ""){
        // El incumplimiento o cumplimiento fue por tramos        
        kilometraje = kilometrajeByTramos(tramo_desde,tramo_hasta,distancias);
    }else if((parseInt(num_vuelta)!==0 || num_vuelta !== "")&& tramo_desde !== "-" && tramo_hasta !== "-"){
        // Kilometraje por vueltas en circuito ya que se marcarón vueltas y estacion de circuito
        kilometraje = num_vuelta * kilometrajeByTramos(tramo_desde,tramo_hasta,distancias)
    }
    else{
        // Fue por vuleta completa en un ruta
        // Se calcula el kilometraje por numero de vuletas completas
        kilometraje = num_vuelta*vuelta_completa;
    }

    return parseFloat(kilometraje.toFixed(3));
}


/* 
    Esta funcion recibe un conjunto de registros entre
    cumplientos e incmplimientos.

    Retorna los registros agrupados por fechas
*/


export const GruopedDataByDate = (data, afectacion) =>{
    let values = [];
    let dateRef = data[0].fecha;
    let collections = [data[0]];
    // let km = data[0].Cumplimiento_Incumplimientos[0].kilometraje;
    console.log(data);
    for (let idx = 1; idx < data.length; idx++) {
        if(data[idx].fecha === dateRef){      
            collections.push(data[idx]);                 
            // if(afectacion && data[idx].Cumplimiento_Incumplimientos.length>1){
            //     let km1 = data[idx].Cumplimiento_Incumplimientos[0].kilometraje; 
            //     let km2 = data[idx].Cumplimiento_Incumplimientos[1].kilometraje; 
            //     km =  Math.abs(km2-km1);                

            // }else{
            //     km += data[idx].Cumplimiento_Incumplimientos[0].kilometraje;      

            // }
            if(idx===data.length-1){
                const obj = {
                    date: dateRef,
                    collection : collections,
                    // kmtotal: parseFloat((Math.abs(km)).toFixed(3))
                }
                values.push(obj);
            }               
        }  
        else{
            const obj = {
                date: dateRef,
                collection : collections,
                // kmtotal: parseFloat((Math.abs(km)).toFixed(3))
            }
            values.push(obj);
            dateRef = data[idx].fecha;
            collections = [data[idx]];
            // km = data[idx].Cumplimiento_Incumplimientos[0].kilometraje;  
            if(idx===data.length-1){

                // if(afectacion && data[idx].Cumplimiento_Incumplimientos.length>1){
                //     let km1 = data[idx].Cumplimiento_Incumplimientos[0].kilometraje; 
                //     let km2 = data[idx].Cumplimiento_Incumplimientos[1].kilometraje; 
                //     km =  Math.abs(km2-km1);                
                // }

                const obj = {
                    date: dateRef,
                    collection : collections,
                    // kmtotal: parseFloat((Math.abs(km)).toFixed(3))
                }
                values.push(obj);
            }
        }      
        
    }    
    return values

};

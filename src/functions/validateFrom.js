/**
 *  esta función verifica si los elementos de un objeto ligado a un fromulario
 *  estan vacios
 * @param {object} objectData 
 */

export const validateForm = (objectData) =>{
    let isValid = true;
    for (const item of Object.values(objectData)){
        if(item === ""){
            isValid = false;
            break;
        }
    }
    return isValid;
};


// Valida un modelo a excepción de algunos de sus atr que pueden quedar vacios
export const validateFormExcept = (obj, arr) =>{
    let isValid = true;     
    for (const prop in obj){
        // console.log(`${prop} : ${obj[prop]}`);
        if(!arr.includes(`${prop}`)){
            if(obj[prop]===""){
                isValid = false;
                break;
            }
        }
    }
    return isValid;
}

/* 
    Vaida si una desincorporación es por tamos o vueltas
*/

export const validateIncumByTramos = (obj) =>{
    /* Si ambos están llenos */
    if(
        (obj['tramo_desde']!=="-" || obj['tramo_hasta']!=="-")
        &&
        (
            obj['num_vuelta']!=="" ||
            obj['num_ida'] !== "" || 
            obj['num_regreso'] !== ""
        )
    ){
        return true;
    }
    return false;

}


export const validateRefApoInc = (obj) =>{
    if(
        (
            (obj['ruta_referencia']!=="") &&
            (obj['ref_ida']!=="") &&
            (obj['tipo']!=="")
        )
        &&
        (
            (

                (obj['tramo_desde']==="-" || obj['tramo_hasta']==="-") &&
                (
                    obj['num_vuelta']!=="" &&
                    obj['num_ida'] !== "" &&
                    obj['num_regreso'] !== ""
                )
            )
            ||
         
            (
                (obj['tramo_desde']!=="-" && obj['tramo_hasta']!=="-")
                &&
                (
                    obj['num_vuelta']==="" ||
                    obj['num_ida'] === "" || 
                    obj['num_regreso'] === ""
                )
            )
        )
        
    ){
        return true;
    }
    return false;

}
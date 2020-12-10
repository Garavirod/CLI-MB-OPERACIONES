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
    Verifica si tanto los campos de tramos y los campos 
    de vuletas están llenos.
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
        if (
            (
    
                (obj['tramo_desde']!=="-" && obj['tramo_hasta']!=="-") &&
                (
                    parseInt(obj['num_vuelta']) === 0 &&
                    parseInt(obj['num_ida']) === 0 &&
                    parseInt(obj['num_regreso']) === 0
                )
            )
        ){
            return false;
        }
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

            ||

            (
                (obj['tramo_desde']!=="-" && obj['tramo_hasta']!=="-")
                &&
                (
                    obj['num_vuelta']!=="" &&
                    obj['num_ida'] !== "" &&
                    obj['num_regreso'] !== ""
                )
            )

             
        )
        
    ){        
        return true;
    }else{

        return false;
    }

}




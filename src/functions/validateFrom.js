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
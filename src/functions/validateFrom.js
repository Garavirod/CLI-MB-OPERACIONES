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
import { useState } from "react";

export const useHookForm = (initialstate={})=>{
    const [values,setValues] =  useState(initialstate);

    const reset = () =>{
        setValues(initialstate);
    }

    const handleInputChange = ({target}) =>{

        let val = (target==="hora") ? (target.value+":00") : (target.value);
        setValues({
            ...values,
            [target.name]: val
        });                
    }
    return [values, handleInputChange, reset];
};
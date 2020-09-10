import { useState } from "react";

export const useHookForm = (initialstate={})=>{
    const [values,setValues] =  useState(initialstate);

    const reset = () =>{
        setValues(initialstate);
    }

    const handleInputChange = ({target}) =>{
        setValues({
            ...values,
            [target.name]: target.value
        })
    }
    return [values, handleInputChange, reset];
};
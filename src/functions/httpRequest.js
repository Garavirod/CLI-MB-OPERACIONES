import axios from 'axios';

/**
 * En esye archivo se tienen todas las petciones http de axios
 * para vitar repeticion de codigo en otros archivos.
 * simplemente utilizando el endpoint.
 * @param {*} endpoint 
 */


// Peticiones get 
export const  httpGetData = async(endpoint) =>{
    const response = await axios.get(endpoint)
    .then(res=>{
        return {success:true, data: res.data.data};
    })
    .catch(err=>{
        console.log("Eror al cargar los datos de >: "+endpoint+" error "+err);
        return {success:false};
    });

    return response;
};

// Peticiones post

export const httpPostData = async (endpoint, data) =>{
    const response = await axios.post(endpoint,data)
    .then(res=>{
        console.log("Datos mandados", res);                        
        return true;
    })
    .catch(err=>{
        console.log("Hubo un error al guardar la infromacion en >: "+endpoint+" error "+err);
        return false;
    });
    return response;
};


// Peticiones delete

export const httpDeleteData = async (endpoint) =>{
    const response = await axios.delete(endpoint)
    .then((res) => {
        console.log("delete: " + res);
        return true;        
    })
    .catch(err=>{
        console.log("Error en el endpoint >: "+endpoint+" error >: "+err);
        return false;
    });

    return response;
}
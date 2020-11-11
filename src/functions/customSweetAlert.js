import swal from 'sweetalert';
import { httpDeleteData } from './httpRequest';

export const CustomSwalDelete= async (endpoint)=>{    
    await swal({
        title: "¿Seguro que deseas borrar la información?",
        text: "Una vez eliminada no se podrá recuperar",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            const r = httpDeleteData(endpoint);
            if(r){
              swal("Información eliminada", {icon: "success"});  
            }else{              
              CustomSwalError();
            }                                     
        } else {
          swal("Información salvada");          
        }
      });       
}


export const CustomSwalSave = () =>{    
    swal({
        title: "Información grabada",
        text: "Los cambios han sido grabados exitosamente",
        icon: "success",
        buttons: true,
        dangerMode: false,
      });      
}


export const CustomSwalError = () =>{    
    swal({
        title: "Error al grabar cambios",
        text: "Los cambios no fueron grabados exitosamente",
        icon: "error",
        buttons: true,
        dangerMode: true,
      });      
}


export const CustomSwalErrorOnLoad = () =>{    
  swal({
      title: "Error al cargar los datos",
      text: "Intente nuevamente",
      icon: "error",
      buttons: true,
      dangerMode: true,
    });      
}

export const CustomSwalEmptyFrom = () =>{    
    swal({
        title: "Aún hay campos vacios",
        text: "Verifique que se llenó el fromulario por completo",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });      
}
import swal from 'sweetalert';
import axios from 'axios';

export const CustomSwalDelete=(endpoint)=>{    
    swal({
        title: "¿Seguro que deseas borrar la información?",
        text: "Una vez eliminado no se podrá recuperar la infromación",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
            axios.delete(endpoint)
            .then(res =>{
                swal("Infromación eliminada", {icon: "success",});              
            }).catch(err=>{
                CustomSwalError();
            });                    
          
        } else {
          swal("Infromación salvada");          
        }
      });      
}


export const CustomSwalSave = () =>{    
    swal({
        title: "Infromación grabada",
        text: "Los cambios han sido grbados exitosamente",
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


export const CustomSwalEmptyFrom = () =>{    
    swal({
        title: "Aun hay campos vacios",
        text: "Verifique que se llenó el fromulario por completo",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      });      
}
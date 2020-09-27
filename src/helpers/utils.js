export const setFechaActual = () =>{
    const f = new Date();
    let day = (f.getDate()).toString();
    let month = (f.getMonth()).toString();
    let year = (f.getFullYear()).toString();

    if( parseInt(day) <10 ){
        day = "0"+day;
    }else if (parseInt(month) < 10){
        month = "0"+month;
    }

    return `${year}-${month}-${day}`;
}
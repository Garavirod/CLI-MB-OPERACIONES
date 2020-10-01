export const setFechaActual = () =>{
    const f = new Date();
    let day = (f.getDate()).toString();
    let month = (f.getMonth()+1).toString();
    let year = (f.getFullYear()).toString();

    if( parseInt(day) <10 ){
        day = `0${day}`;
    }else if (parseInt(month) <10){
        month = `0${month}`;
    }

    return `${year}-${month}-${day}`;
}


export const setHoraActual = () =>{
    const f = new Date();
    let hr = (f.getHours()).toString();
    let min = (f.getMinutes()).toString();

    if( parseInt(hr) <10 ){
        hr = "0"+hr;
    }else if (parseInt(min) < 10){
        min = "0"+min;
    }

    return `${hr}:${min}`;

}
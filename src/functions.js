const axios = require("axios")

export const hasRole = (token) => {
    const Role = JSON.parse(token).Role;
    console.log("Role: "+Role);
    return Role;
}

export const isLogin = () => {
    
    if(localStorage.getItem('usertoken'))
        return true;
    else
        return false;
}

export const isRole = (ROLE) => {
    if(ROLE == hasRole(localStorage.getItem('usertoken')))
        return true; 
    else
        return false;
}

export const Logout = () => {
    if(localStorage.getItem('usertoken'))
    {
        localStorage.removeItem('usertoken');
        window.location.reload(false);
    }
}



import React, { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { CardSection } from "../../ui/CardSection";
import {Paper, Select} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { httpGetData } from "../../../functions/httpRequest";
import { CustomSwalError } from "../../../functions/customSweetAlert";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  }));




export default function SelectChart(){

    const classes = useStyles();
    const [empresas, setEmpresas] = useState([]);
    const [empresa, setEmpresa] = useState("Empresa");
    /* 
        Se obtienen las empresas que han tenido colisiones
    */
    const getEmpresas = async () => {
        const url = "/colisiones/empresas-colisionadas";
        //peticion de axios genérica por url
        const _data = await httpGetData(url);
        if (_data && _data.success) {
            setEmpresas(_data.data);
            console.log(_data.data);
        }
        else if(!_data){
            CustomSwalError();
        }
    };

    const handleChange = (event) =>{
        const value = event.target.value;
        setEmpresa(value);
    }//handleChange

    useEffect(()=>{
        getEmpresas();
    },[]);//useEffect

    return(
        <Container maxWidth="lg">
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item lg={12} xs={12} md={12} className="animate__animated animate__fadeInDown">
                        <Paper className={classes.paper}>
                            <div>
                                <CardSection
                                    tagName={"Colisiones Empresas"}
                                    description={"Colisiones por mes por empresa"}
                                    imageName="crash"
                                    path= {`/test-chart/${empresa}`}
                                />
                            </div>
                            <div>
                            <Select
                                native
                                value={empresa}
                                onChange={handleChange}
                                name={"nomEmpresa"}
                                >
                                <option value={"Empresa"}>Empresa</option>
                                {empresas.map((it,index) => (
                                    <option key={index} value={it.empresa}>
                                        {it.empresa}
                                    </option>
                                ))}
                            </Select>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </Container> 
    );
}//SelectChart

import React from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { useHookForm } from "../../hooks/hookFrom";
import { validateForm } from "../../functions/validateFrom";
import { CustomSwalSave, CustomSwalError, CustomSwalEmptyFrom } from "../../functions/customSweetAlert";
import { Link} from "react-router-dom";
import { httpPostData } from "../../functions/httpRequest";

const useStyles = makeStyles((theme) => ({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));

function DatosEconomicoColision(props){

    const classes = useStyles();
    //idColision
    const {idEvento} = props;

    const initial_datosEconomico= {
      empresa: "",
      economico: "",
    };

    // Usando el hook personalizado
    const [values, handleInputChange] = useHookForm(initial_datosEconomico);
    // Desestructurando el response del hook
    const {
        empresa,
        economico
    } = values;

    // Valida el fromulario y de no haber campos vacios manda la infromacion al servidor
  const sendData = (e) => {
    //Evita que la petición sea mandada por defecto en GET
    e.preventDefault();
    // Url de la API
    const url = `/colisiones/datos-economico/${idEvento}`;
    if (validateForm(values)) {
      // Petición axios, manda la data ya vlidada al url definido
      httpPostData(url, values)
        .then(resp =>{
            if(resp && resp.success)
              CustomSwalSave();
            else
              CustomSwalError();
        });//then
    } else {
      CustomSwalEmptyFrom();
    }
  };

    return (
        <Container component="main">
            <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={sendData}
            >
                <div className={classes.gridRoot}>
                    <Grid container spacing={4}>
                        <Grid item lg={4}>
                            <TextField
                                id="empresa"
                                label="Empresa"
                                value={empresa}
                                name="empresa"
                                onChange={handleInputChange}
                            />
                        </Grid>

                        <Grid item lg={4}>
                            <TextField
                                id="economico"
                                label="Económico"
                                value={economico}
                                name="economico"
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="red"
                                className={classes.bgPDF}
                                startIcon={<AddIcon />}
                            >
                                Agregar Económico
                            </Button>
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <Link to={`/economicoColisiones/${idEvento}`}> ver registros Económico</Link>
                        </Grid>
                    </Grid>
                </div>
            </form>
        </Container>
    );
}//DatosEconomicoColision

export default DatosEconomicoColision;
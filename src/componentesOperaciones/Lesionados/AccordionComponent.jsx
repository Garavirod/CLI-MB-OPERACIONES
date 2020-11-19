import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Grid} from "@material-ui/core";
import FormPropsTextFields from "./Afectado";
import { FormDatosSeguro } from "./DatosSeguro";
import { FormDatosAmbulancia } from "./Ambulancia";
import { useEffect } from "react";
import { httpGetData, httpDeleteData } from "../../functions/httpRequest";
import { PreloadData } from "../ui/PreloadData";
import { useState } from "react";
import { EventosForm } from "./EventosForm";
import DeleteIcon from "@material-ui/icons/Delete";
import swal from 'sweetalert';
import { CustomSwalError } from "../../functions/customSweetAlert";
import ListaAfectados from "./ListaAfectados";



const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  ScrollList: {
    backgroundColor: theme.palette.background.paper,
    overflowY: "scroll",
    overflowX: "hidden",
    maxHeight: 300,
    maxWidth: "100%",
    padding: 0,
    margin: 0,
  },
}));

export const AccordionComponent = () => {
 
  const [data, setData] = useState([]);
  const [preload, setPreload] = useState(true);
  const [realodEventos,setRealoadEventos] = useState(false);
  const [reloadAfectado, setReloadAfectado] = useState(false);

  useEffect(() => {
    getEventos();
  }, [realodEventos]);

  const getEventos = async () => {
    const url = "/lesionados/eventos";
    //peticion de axios genérica por url
    setPreload(true);
    const _data = await httpGetData(url);
    if (_data.success) {
      setData(_data.data);
      setPreload(false);
    }
  };

  const DeleteEvento = async (idEvento) =>{
    const url = `/lesionados/borra-evento/${idEvento}`;
    await swal({
      title: "¿Seguro que deseas borrar la información?",
      text: "Una vez eliminada no se podrá recuperar",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {        
          const r = httpDeleteData(url);
          if(r){
            swal("Información eliminada", {icon: "success"});
            setRealoadEventos(callback=>!callback);  
          }else{                          
            CustomSwalError();
          }                                     
      } else {
        swal("Información salvada");          
      }
    });   
    setRealoadEventos(callback=>!callback);                
  };
  
  console.log(realodEventos);
  const tipoIncident = (incident) => {
    return incident === true ? "Autobús" : "Estación";
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <EventosForm setRealoadEventos={setRealoadEventos}/>
      <PreloadData isVisible={preload} />
      {data.map((eve) => (
        <Accordion key={eve.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1c-content"
            id="panel1c-header"
          >
            <div className={classes.column}>
              <Typography className={classes.heading}>Id: {eve.id}</Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                Fecha:{" "}
                {eve.fecha.substr(8, 2) +
                  "-" +
                  eve.fecha.substr(5, 2) +
                  "-" +
                  eve.fecha.substr(0, 4)}
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                Hora: {eve.hora.substr(0, 5)}
              </Typography>
            </div>
            <div className={classes.column}>
              <Typography className={classes.secondaryHeading}>
                Incidente : {eve.incidente}
              </Typography>
            </div>
            <div className={classes.column}>
            <Button 
              size="small" 
              color="primary" 
              startIcon={<DeleteIcon />}
              onClick={()=>DeleteEvento(eve.id)}>
              Eliminar
            </Button>  
            </div>
          </AccordionSummary>
          <AccordionDetails className={classes.details}>
            {/* Detalles */}
            <Grid container spacing={3}>
              <Grid item lg={12}>
                <Typography>
                  Tipo de Incidente: {tipoIncident(eve.tipo_incidente)}
                </Typography>
                <Typography>Tramo: {eve.tramo}</Typography>
                <Typography>Operador: {eve.operador}</Typography>
                <Typography>Bitácora: {eve.bitacora}</Typography>
                <Typography>Descripción: {eve.descripcion}</Typography>
              </Grid>
              {/* Formularios */}
              <Grid item lg={6}>
                <FormPropsTextFields idEvento={eve.id} setReloadAfectado={setReloadAfectado}/>
              </Grid>
              <Grid item lg={6}>
                <FormDatosSeguro idEvento={eve.id} />
              </Grid>
              <Grid item lg={12}>
                <FormDatosAmbulancia idEvento={eve.id} />
              </Grid>
              <Grid item lg={12}>
                <ListaAfectados idEvento={eve.id} reloadAfectado={reloadAfectado} setReloadAfectado={setReloadAfectado}/>                                
              </Grid>
              {/* Detalles del evento */}
              {/* <Grid item lg={4}>
                      <Grid container spacing={2}>                             
                        <Grid item lg={12}>
                          <Card>
                            <CardContent>
                              <Typography>Lista de ambulancias</Typography>
                              <div className={classes.ScrollList}>
                                <ListaAmbulancia idEvento={2} />
                              </div>
                            </CardContent>
                          </Card>
                        </Grid>
                      </Grid>
                    </Grid> */}
            </Grid>
          </AccordionDetails>
          <Divider />         
        </Accordion>
      ))}   
    </div>
  );
};

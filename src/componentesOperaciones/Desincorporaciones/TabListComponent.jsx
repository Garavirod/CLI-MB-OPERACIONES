import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import FolderIcon from "@material-ui/icons/Folder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import {httpGetData} from "../../functions/httpRequest";
import {CustomSwalError} from "../../functions/customSweetAlert";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    overflow: "scroll",
    maxHeight: 500,
    maxWidth: "100%",
    padding: 0,
    margin: 0,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

const urlAbiertos = "/desincorporaciones/folios-abiertos";

export function TabListComponent(props){

  const [data, setData] = useState([]);
  const [tag, setTag] = useState("");

  // Carga los datos dependiendo la etiqueta (folios/incump/cumpl)
  const getDatabyLabel = async (label) => {
    //let data = null;
    switch (label) {
      case "Folios abiertos":
        setTag("Folio");
        const resp = await httpGetData(urlAbiertos);
        if(resp.success)
        {
          const folios = [...resp.data];
          console.log(folios);
          setData(folios);
        }
        else
          CustomSwalError();
        break;
      case "Incumplimeintos":
        setTag("Incumplimiento");
        //data = getIncumplimientos();
        break;
      case "Cumplimientos":
        setTag("Cumplimiento");
        //data = getCumplimientos();
        break;
      default:
        break;
    }//switch
  };//getDatabyLabel

  function sendCerrarFolio(folio){
    console.log(folio);
    localStorage.setItem("folio",JSON.stringify(folio));
    window.location.replace("/cerrar-folio");
  }//cerrarFOlio
  
  const { typeList, valueToRefr } = props;
  useEffect(() => {
    getDatabyLabel(typeList);
  }, [valueToRefr]);

  const classes = useStyles();

  return (
    <Grid item lg={12}>
      <div className={classes.demo}>
        <List dense={false}>
          {data.map((it) => (
            <ListItem key={it.id}>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              {/* <ListItemText
                primary={`${tag} - ${it.id}`}
                secondary={`Fecha de registro: ${it.fecha} Ruta: ${it.ruta}`}                
              /> */}
              <ListItemText>
                <p>
                  <b>{`${tag} - ${it.id}`}</b>
                </p>
                <p>Detalles</p>
                <ul>
                  <li>{`Linea : ${it.linea}`}</li>
                  <li>{`Fecha de creacion : ${it.fecha}`}</li>
                  <li>{`Económico : ${it.economico}`}</li>
                </ul>
              </ListItemText>
              {(typeList === "Folios abiertos") ? (
                <ListItemSecondaryAction>
                  <Link className="" onClick={()=>{sendCerrarFolio(it)}}>
                    <IconButton edge="end" aria-label="delete">
                      <VisibilityIcon />
                    </IconButton>
                  </Link>
                </ListItemSecondaryAction>
              ) : null}
            </ListItem>
          ))}
        </List>
      </div>
    </Grid>
  );
};

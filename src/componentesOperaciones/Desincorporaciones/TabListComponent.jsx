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
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { httpGetData, httpDeleteData } from "../../functions/httpRequest";
import { swal } from "sweetalert";
import { CustomSwalError, CustomSwalDelete } from "../../functions/customSweetAlert";

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
const urlCumIncum = "/desincorporaciones/cumplimiento-incumplimiento-folio/";

export function TabListComponent(props) {

  const [data, setData] = useState([]);
  const [tag, setTag] = useState("");
  const [reload, setReaload] = useState(false);

  // Carga los datos dependiendo la etiqueta (folios/incump/cumpl)
  const getDatabyLabel = async (label) => {
    //let data = null;
    switch (label) {
      case "Folios abiertos":
        setTag("Folio");
        const resp = await httpGetData(urlAbiertos);
        if (resp.success) {
          const folios = [...resp.data];
          console.log(folios);
          setData(folios);
        } else swal("Error", "Error al obtener Folios", "error");
        break;
      case "Incumplimeintos":
        setTag("Incumplimiento");
        break;
      case "Cumplimientos":
        setTag("Cumplimiento");
        break;
      default:
        break;
    } //switch
  }; //getDatabyLabel

  const getCumpIncum = async (idFolio) => {
    const urlConFolio = urlCumIncum + idFolio;
    const resp = await httpGetData(urlConFolio);
    if (resp.success) {
      //es un array con su cumplimiento o incumpmimiento (ambos si fue una afectación)
      return resp.data;
    } else
      swal(
        "Error",
        "Error al obtener Cumplimientos o Incumplimientos",
        "error"
      );
  }; //getCumplimiento

  async function sendCerrarFolio(folio) {
    console.log(folio);
    localStorage.setItem("folio", JSON.stringify(folio));
    await getCumpIncum(folio.id).then((cumpIncums) => {
      /*sólo deben haber máximo 2 por Folio;
      cuando fue afectación y hubo cumpl e incum*/
      cumpIncums.map((oneCumIncum) => {
        const { tipo } = oneCumIncum;
        if (tipo === "Incumplido")
          localStorage.setItem("incumplido", JSON.stringify(oneCumIncum));
        else localStorage.setItem("apoyo", JSON.stringify(oneCumIncum));
      }); //map
    }); //then
    window.location.replace("/cerrar-folio");
  } //cerrarFOlio

  // elimina el folio de la lsta de folios abiertos
  const DeleteFolio = async (idfolio) =>{       
    const url = `desincorporaciones/delete-folio/${idfolio}`;
    CustomSwalDelete(url).then(()=>{
      // window.location.replace("/BitacoraDR");
      setReaload(call=>!call);
    })
  }

  const { typeList, valueToRefr } = props;
  useEffect(() => {
    getDatabyLabel(typeList);
  }, [valueToRefr]);

  useEffect(() => {
    getDatabyLabel(typeList);
  }, [reload]);

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
              <ListItemText>
                <p>
                  <b>{`${tag} - ${it.id}`}</b>
                </p>
                <p>Detalles</p>
                <ul>
                  <li>{`Linea : ${it.linea}`}</li>
                  <li>{`Fecha : ${it.fecha.slice(0,10)}`}</li>
                  <li>{`Económico : ${it.economico}`}</li>
                </ul>
              </ListItemText>
              {typeList === "Folios abiertos" ? (
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      sendCerrarFolio(it);
                    }}
                  >
                    <VisibilityIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => {
                      DeleteFolio(it.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              ) : null}
            </ListItem>
          ))}
        </List>
      </div>
    </Grid>
  );
}

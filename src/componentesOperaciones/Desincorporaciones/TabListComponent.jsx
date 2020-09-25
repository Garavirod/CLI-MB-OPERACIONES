import React from "react";
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
import VisibilityIcon from '@material-ui/icons/Visibility';
import { getFolios, getIncumplimientos, getCumplimientos } from "../../helpers/DataGetters";


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
    padding:0,
    margin:0
    
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

// Carga los datos dependiendo la etiqueta (folios/incump/cumpl)
const getDatabyLabel = (label) =>{
    let tag = null;
    let data = null;
    switch (label) {
        case "Folios abiertos":
            tag="Folio";
            data=getFolios();
            break;            
        case "Incumplimeintos":
            tag="Incumplimiento";
            data= getIncumplimientos();
            break;
        case "Cumplimientos":
            tag="Cumplimiento";
            data= getCumplimientos();   
            break;     
        default:
            break;
    }

    return [tag,data];
}


export const TabListComponent = (props) => {
  const {typeList} = props;

  const [tag,data] = getDatabyLabel(typeList);

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
                  <p><b>{`${tag} - ${it.id}`}</b></p>
                  <p>Detalles</p>                                    
                  <ul>
                    <li>{`Ruta : ${it.ruta}`}</li>
                    <li>{`Fecha de creacion : ${it.fecha}`}</li>
                    <li>{`Económico : ${it.eco}`}</li>
                  </ul>
              </ListItemText>
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <VisibilityIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </div>
    </Grid>
  );
};

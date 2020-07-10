import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import ReportIcon from '@material-ui/icons/Report';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (

    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction 
      label="Colisiones" 
      icon={<DriveEtaIcon />} 
      a href="/Colisiones"
      />
      <BottomNavigationAction 
      label="Lesionados y Atropellados" 
      icon={<LocalHospitalIcon />}
      a href="/lesionados"
      />
      <BottomNavigationAction 
      label="Reportes" 
      icon={<ReportIcon />}
      a href="/pruebas"
      />
      <BottomNavigationAction 
      label="Editar, borrar registros y eventos" 
      icon={<EditIcon />}
      a href="/"
      />
    </BottomNavigation>
    
  );
}

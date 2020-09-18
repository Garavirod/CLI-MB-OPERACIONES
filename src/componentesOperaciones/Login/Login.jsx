import React, { useRef, Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import swal from 'sweetalert';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import { useState } from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import pic1 from './image/mb1.jpg'
import pic2 from './image/mb2.jpg'
import pic3 from './image/mb3.jpg'
import pic4 from './image/mb4.jpg'
import axios from 'axios'
import { hasRole } from './../../functions';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.metrobus.cdmx.gob.mx/">
        Metrobús
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const pictureArray = [pic1, pic2, pic3, pic4];
const randomIndex = Math.floor(Math.random() * pictureArray.length);
const selectedPicture = pictureArray[randomIndex];
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${selectedPicture})`, //'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide() {
  const classes = useStyles();

  const [user] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    user[e.target.name] = e.target.value;
    console.log(user);
  };

  const sendData = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("usertoken");
    console.log("EL TOKEN ", token);
    const url = "users/login";
    if (user.email !== "" && user.password !== "") {
      axios
        .post(url, user, {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        })
        .then((res) => {
          if (res.data.success === true) {
            const datos = JSON.stringify(res.data.data);
            swal("Acceso permitido", "Bienvenido", "success"); 
            localStorage.setItem('usertoken',datos);
            if(hasRole(datos) == "Operaciones")
            setInterval(function(){
                window.location.replace("/Bienvenida");
            }, 1000);
             
             
                                         
          } else {
            swal("Acceso denegado", "Verifica tus credenciales", "error");
            console.log(res.data);
          }
        })
        .catch((err) => {
          console.log("SERVER ERROR >: " + err);
        });
    } else {
      alert("Empty fields!!");
    }
  };

  return (
    <div>
        <Grid container component="main" className={classes.root}>
          <CssBaseline />
          <Grid item xs={false} sm={5} md={7} className={classes.image} />
          <Grid
            item
            xs={13}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <DirectionsBusIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Iniciar Sesión
              </Typography>
              <form className={classes.form} noValidate onSubmit={sendData}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Correo electrónico o Usuario"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={handleInputChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleInputChange}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Recuerdame"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Iniciar Sesión
                </Button>
                <Grid container>
                  <Grid item xs>
                  
                  </Grid>   
                  <Grid item>
                  </Grid>
                  <Link href="/registro" variant="body2">
                      {"¿No tienes una cuenta? Regístrate"}
                    </Link>
                </Grid>
                <Box mt={5}>
                  <Copyright />
                </Box>
              </form>
            </div>
          </Grid>
        </Grid>
    </div>
  );
}

import React from "react";
// material ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
// Prps
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  divClass:{
    margin:'auto',
    textAlign:'center'
  }
});

export const CardSection = (props) => {

  const {imageName, description, tagName, path} = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>        
        <CardContent>
            <div className={classes.divClass}>
                <img src={`./assets/${imageName}.png`}/>
            </div>
          <Typography gutterBottom variant="h5" component="h2">
            {tagName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>      
      <CardActions>
        <Link to={path}>
          Ir a la sección
        </Link>       
      </CardActions>
    </Card>
  );
};
CardSection.propTypes ={
    imageName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    tagName: PropTypes.string.isRequired,
    path:PropTypes.string.isRequired
};
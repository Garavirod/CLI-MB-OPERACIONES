import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 400,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
}));

function renderRow(props) {
  const { index, style,incumplimiento } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
  incumplimiento: PropTypes.string.isRequired,
};

export default function VirtualizedList(props) {
    const {
        incumplimiento
    }=props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FixedSizeList height={400} width={500} itemSize={46} itemCount={10}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}

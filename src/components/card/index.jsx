import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MaterialCard from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginLeft: 100,
    marginRight: 100,
    marginTop: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function Card({MenuList, Input, subheading2, CCY}) {
  const classes = useStyles();

  return (
    <MaterialCard className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        {MenuList}
        </Typography>
        <Typography variant="body2" component="p">
          {CCY}
        </Typography>
        <Typography variant="body2" component="p">
          {Input}
          <br />
          {subheading2}
        </Typography>
      </CardContent>
      <CardActions>
      </CardActions>
    </MaterialCard>
  );
}

export {Card}
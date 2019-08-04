import React from 'react';

import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from '@material-ui/core/CardMedia';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";



import { getTransferDetails } from '../../redux/actions/transferDetails';

const formatNumber = number =>
  number.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

const useStyles = makeStyles({
  card: {
    width: 500
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  pos: {
    marginBottom: 12
  }
});

function DonationDialog(props) {
  const rows = [
    {
      title: 'Transfer amount',
      target: `${props.destCurrencySymbol} ${formatNumber(
        props.destTransferAmount
      )}`,
      origin: `${props.originCurrencySymbol} ${formatNumber(
        props.originTransferAmount
      )}`
    },
    {
      title: "Donation Amount",
      target: `${props.destCurrencySymbol} ${formatNumber(
        props.destDonationAmount
      )}`,
      origin: `${props.originCurrencySymbol} ${formatNumber(
        props.originDonationAmount
      )}`
    },
    {
      title: 'Total Amount',
      target: `${props.destCurrencySymbol} ${formatNumber(props.destTotal)}`,
      origin: `${props.originCurrencySymbol} ${formatNumber(props.originTotal)}`
    }
  ];

  const classes = useStyles();

  return (
    <div>
      <div style={{ display:'flex', justifyContent:'center', padding: 50 }}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Congratulations!
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              You've earned 80 points from your transfer.
            </Typography>
            <Typography variant="body2" component="p">
              Your donation is on the way to help education in Nigeria.
            </Typography>
          </CardContent>
          <CardMedia
              className={classes.media}
              image={require ("./nigeria_classroom.jpg")}
          />
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>

      <Container maxWidth="sm" />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right">Your Target Currency</TableCell>
            <TableCell align="right">Origin Currecy</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.target}</TableCell>
              <TableCell align="right">{row.origin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state.transferDetails
});

const mapDispatchToProps = { getTransferDetails };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonationDialog);

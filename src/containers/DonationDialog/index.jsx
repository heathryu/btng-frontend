import React from 'react';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { getTransferDetails } from '../../redux/actions/transferDetails';

const formatNumber = number =>
  number.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

function DonationDialog(props) {
  React.useEffect(() => {
    // TODO: Make Proper call
    props.getTransferDetails('GBP', 'NGN', 5200.322, 4095100.518421);
  }, []);
  console.log('props', props);
  const rows = [
    {
      title: 'Your transfer amount',
      target: `${props.destCurrencySymbol} ${formatNumber(
        props.destTransferAmount
      )}`,
      origin: `${props.originCurrencySymbol} ${formatNumber(
        props.originTransferAmount
      )}`
    },
    {
      title: "We'll be donating",
      target: `${props.destCurrencySymbol} ${formatNumber(
        props.destDonationAmount
      )}`,
      origin: `${props.originCurrencySymbol} ${formatNumber(
        props.originDonationAmount
      )}`
    },
    {
      title: 'Your total will be',
      target: `${props.destCurrencySymbol} ${formatNumber(props.destTotal)}`,
      origin: `${props.originCurrencySymbol} ${formatNumber(props.originTotal)}`
    }
  ];

  return (
    <div>
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
      <Button color="secondary">No, Thank you</Button>
      <Button color="primary">Of Course!</Button>
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

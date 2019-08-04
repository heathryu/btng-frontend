import React from 'react';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import isEqual from 'lodash/isEqual'
import { getTransferDetails } from '../../redux/actions/transferDetails';

const formatNumber = number =>
  number.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

class  DonationDialog extends React.Component {

  
  componentDidMount(){
    if(this.props.location.transferDetails){
      console.log("this.props", this.props.location.transferDetails.props)

      const {CCY1,CCY2, amount1, amount2} = this.props.location.transferDetails.props
      console.log("ajds", CCY1,CCY2, amount1, amount2)


      // send in currencies and amounts1 and amounts2 
      this.props.getTransferDetails(CCY1, CCY2, amount1, amount2);
    }   
  }


  componentDidUpdate(prevProps){
    if(!isEqual(prevProps, this.props)){
      console.log("this", this.props)
    }
  }



  rowsFunc = () => [
    {
      title: 'Your transfer amount',
      target: `${this.props.destCurrencySymbol} ${formatNumber(
        this.props.destTransferAmount
      )}`,
      origin: `${this.props.originCurrencySymbol} ${formatNumber(
        this.props.originTransferAmount
      )}`
    },
    {
      title: "We'll be donating",
      target: `${this.props.destCurrencySymbol} ${formatNumber(
        this.props.destDonationAmount
      )}`,
      origin: `${this.props.originCurrencySymbol} ${formatNumber(
        this.props.originDonationAmount
      )}`
    },
    {
      title: 'Your total will be',
      target: `${this.props.destCurrencySymbol} ${formatNumber(this.props.destTotal)}`,
      origin: `${this.props.originCurrencySymbol} ${formatNumber(this.props.originTotal)}`
    }
  ];

  render(){
    console.log("this.props", this.props.destCurrencySymbol)
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
            {this.rowsFunc().map(row => (
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
}

const mapStateToProps = state => ({
  ...state.transferDetails
});

const mapDispatchToProps = { getTransferDetails };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DonationDialog);

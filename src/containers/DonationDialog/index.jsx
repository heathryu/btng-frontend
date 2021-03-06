import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

import { connect } from 'react-redux';

import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import DonationPrompt from '../DonationPrompt';
import { getTransferDetails } from '../../redux/actions/transferDetails';

const formatNumber = number =>
  number.toLocaleString('en-GB', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 10px 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 400px;
  margin: 0 auto;
`;

class DonationDialog extends React.Component {
  componentDidMount() {
    if (this.props.location.transferDetails) {
      const {
        CCY1,
        CCY2,
        amount1,
        amount2
      } = this.props.location.transferDetails.props;
      this.props.getTransferDetails(
        CCY1,
        CCY2,
        Number(amount1),
        Number(amount2)
      );
    }
  }

  navigateTo = () => {
    this.props.history.push('/transfer-result')
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
      title: "You'll be donating",
      target: `${this.props.destCurrencySymbol} ${formatNumber(
        this.props.destDonationAmount
      )}`,
      origin: `${this.props.originCurrencySymbol} ${formatNumber(
        this.props.originDonationAmount
      )}`
    },
    {
      title: 'Your total will be',
      target: `${this.props.destCurrencySymbol} ${formatNumber(
        this.props.destTotal
      )}`,
      origin: `${this.props.originCurrencySymbol} ${formatNumber(
        this.props.originTotal
      )}`
    }
  ];

  render() {
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

        <TextWrapper>
          Would you like to participate in Round up and Boost?
        </TextWrapper>
        <ButtonWrapper>
          <Button color="secondary">No, Thank you</Button>
          <Button color="primary" onClick={this.navigateTo}>Of Course!</Button>
        </ButtonWrapper>
        <DonationPrompt />
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

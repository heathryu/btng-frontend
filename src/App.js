import React from 'react';
import './App.css';

import { Card } from './components/card';
import InputForm from './containers/input-form';
import {Button} from './components/Button'
import MenuListComposition from './containers/drop-down-menu'
import {Input} from './components/input'
import {PriceCard} from './containers/card'
import {Conversion} from './components/conversion'
import {getDestinationAmount} from './redux/actions/destinationAmount'
import {conversion} from './utils'
import {connect} from 'react-redux'
const GBPUSD = conversion(1.233)
class App extends React.Component {
  
  state = {
    CCY1: "GBP",
    CCY2: "USD",
    amount1: 0,
    amount2: 0,
  }

 
  
  // list state
  getCCY1 = CCY1 => this.setState({CCY1})
  getCCY2 = CCY2 => this.setState({CCY2})

  getAmountCCY1 = amount => this.setState({
    amount1: amount,
    amount2: GBPUSD(amount).toFixed(2)}
  )
  getAmountCCY2 = amount => this.setState({
    amount1: GBPUSD(amount).toFixed(2),
    amount2: amount
  })

  send = () => this.props.getDestinationAmount(this.state.CCY1, this.state.CCY2, this.state.amount1)

  render(){
    const {CCY1, CCY2, amount1, amount2} = this.state
    const {destinationAmount} = this.props  
    return (
      <div className="App">
        <div className="App2">
          <PriceCard value={amount1} CCY={CCY1} getCCY={this.getCCY1} getAmountCCY={this.getAmountCCY1}/>
          <PriceCard value={destinationAmount.destinationAmount} CCY={CCY2} getCCY={this.getCCY2} getAmountCCY={this.getAmountCCY2}/>
        </div>
        <Button 
          title= {this.props.destinationAmount.loading ? "loading" : "Send"}
          disabled = {this.props.destinationAmount.loading ? true : false} 
          onClick={this.send} 
        />
      </div>
    );
  }
}

const mapStateToProps = ({destinationAmount}) => ({destinationAmount})
const mapDispatchToProps = {getDestinationAmount}
export default connect(mapStateToProps, mapDispatchToProps)(App);

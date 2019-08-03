import React from 'react';
import './App.css';

import { Card } from './components/card';
import InputForm from './containers/input-form';
import {Button} from './components/Button'
import MenuListComposition from './containers/drop-down-menu'
import {Input} from './components/input'
import {PriceCard} from './containers/card'
class App extends React.Component {
  
  state = {
    CCY1: "GBP",
    CCY2: "USD"
  }
  
  // list state
  getCCY1 = CCY1 => this.setState({CCY1})
  getCCY2 = CCY2 => this.setState({CCY2})
  render(){
    const {CCY1, CCY2} = this.state
    return (
      <div className="App">
        <div className="App2">
          <PriceCard value="100" CCY={CCY1} getCCY={this.getCCY1}/>
          <PriceCard value="200" CCY={CCY2} getCCY={this.getCCY2}/>
        </div>
        <Button title="Send" />
      </div>
    );
  }
}

export default App;

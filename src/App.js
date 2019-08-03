import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button'
import {Card} from './components/card'
import InputForm from './containers/input-form'
function App() {
  return (
    <div className="App">
      <Card 
        heading="Team"
        subheading1="Send Money"
        subheading2="Make a donaton"
      />
      <InputForm />
    </div>
  );
}

export default App;

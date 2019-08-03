import React from 'react';
import './App.css';

import { Card } from './components/card';
import InputForm from './containers/input-form';
import {Button} from './components/Button'
import MenuListComposition from './containers/drop-down-menu'
import {Input} from './components/input'
function App() {
  return (
    <div className="App">
    
      <div className="App2">
      <Card
        heading={ <MenuListComposition />}
        subheading1={ <Input />}
      />
              <Card
        heading={ <MenuListComposition />}
        subheading1={ <Input />}
      />
      </div>
      <Button title="Send" />
    </div>
  );
}

export default App;

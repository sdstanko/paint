import React, {useState} from 'react';
import './App.css';
import Actions from './components/Actions/Actions';
import Field from './components/Field/Field';
import Tools from './components/Tools/Tools';

function App() {

  return (
    <div className="App">
      <Actions 
        filename={'Untitled'} 
      />
      <Tools/>
      <Field/>
    </div>
  );
}

export default App;

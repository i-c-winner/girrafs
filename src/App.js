import React from 'react';
import './App.css';
import Aside from './blocks/aside/Aside'
import Main from './blocks/main/Main'

function App() {
  return (
    <div className="App container-fuild">
      <div className='row'>
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;

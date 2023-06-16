import React from 'react';
import './App.css';
import CardContainer from './components/cardContainer';
import AddCardButton from './components/addCardButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CardContainer />
      </header>
    </div>
  );
}

export default App;

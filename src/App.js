import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Square from './square.js'
import Board from './board.js'

class App extends Component {
  render() {
    return (
      <div className="App">
     
     
       <Board />
     
      </div>
      
    );
  }
}

export default App;

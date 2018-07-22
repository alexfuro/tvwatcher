import React, { Component } from 'react';
import './App.css';
import ShowList from './showlist';

const sample = [
  {
    title: "Juni Taisen",
    status: true
  },{
    title: "Mirai Nikki",
    status: true
  },{
    title: "Boku no Hero",
    status: false
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Watchlist!</h1>
        </header>
        <ShowList shows={sample} />
      </div>
    );
  }
}

export default App;

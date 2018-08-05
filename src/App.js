import React, { Component } from 'react';
import './App.css';
import ShowManager from './showmanager';
import firebase from 'firebase';
import firebaseui from 'firebaseui';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">The Watchlist!</h1>
        </header>
        <ShowManager />
      </div>
    );
  }
}

export default App;

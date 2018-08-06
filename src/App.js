import React, { Component } from 'react';
import './App.css';
import ShowManager from './showmanager';
import firebase from 'firebase';

class App extends Component {
  render() {
    if (this.props.user) {
      return (
        <div className="app">
          <header className="app-header">
            <h1 className="app-title">The Watchlist!</h1>
            <button onClick={ () => firebase.auth().signOut() }>Sign Out</button>
          </header>
          <ShowManager user={this.props.user.uid} db={this.props.db}/>
        </div>
      );
    } else {
      return (
        <div className="app">
          <header className="app-header">
            <h1 className="app-title">The Watchlist!</h1>
          </header>
        </div>
      );
    }    
  }
}

export default App;

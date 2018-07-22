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
  constructor(props){
    super(props);
    this.state = {shows: sample};
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }
  save(shows) {
    this.setState({shows});
  }
  removeFromList(showId){
    const shows = this.state.shows;
    shows.splice(showId,1);
    this.save(shows);
  }
  toggleStatus(showId){
    const shows = this.state.shows;
    const show  = shows[showId];
    show.status? show.status = false : show.status = true;

    this.save(shows);
  }
  handleDelete(showId){
   this.removeFromList(showId);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Watchlist!</h1>
        </header>
        <ShowList shows={this.state.shows} onDelete={this.handleDelete} toggleStatus={this.toggleStatus} />
      </div>
    );
  }
}

export default App;

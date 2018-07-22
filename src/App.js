import React, { Component } from 'react';
import './App.css';
import ShowList from './showlist';
import ShowForm from './showform';

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }
  save(shows) {
    this.setState({shows});
  }
  newShow(event){
    const title = event.target.children[2].value;
    const status = event.target.children[4].checked;

    return { title, status };
  }
  clearForm(event){
    event.target.children[2].value    = "";
    event.target.children[4].checked = false;
  }
  addToList(show){
    const shows = this.state.shows;
    shows.push(show);
    this.save(shows);
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
  handleSubmit(event){
    event.preventDefault();

    const show = this.newShow(event);

    if(show) {
      this.addToList(show);
      this.clearForm(event);
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">The Watchlist!</h1>
        </header>
        <ShowList shows={this.state.shows} onDelete={this.handleDelete} toggleStatus={this.toggleStatus} />
        <ShowForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;

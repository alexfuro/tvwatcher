import React, { Component } from 'react';
import './showmanager.css';
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

class ShowManager extends Component {
  constructor(props){
    super(props);
    this.state = {shows: this.load()};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }
  save(shows) {
    this.setState({shows});
    localStorage.setItem("shows", JSON.stringify(shows));
  }
  load() {
    if (localStorage.getItem("shows") == null) {
      return sample;
    }else{
      const shows = JSON.parse(localStorage.getItem("shows"));
      return shows;
    }
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
      <div className="show-manager">
        <ShowList shows={this.state.shows} onDelete={this.handleDelete} toggleStatus={this.toggleStatus} />
        <ShowForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default ShowManager;

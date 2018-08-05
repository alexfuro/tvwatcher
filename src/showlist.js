import React, { Component } from 'react';
import './showlist.css';
import Show from './show';

class WatchList extends Component {
  render() {
    const shows = this.props.shows;
    return (
      <div className="watch-list">
        <h2>My List</h2>
          {shows.map((show,index)=>(
              <Show show={show} key={index} id={index}
              onDelete={this.props.onDelete} onToggleStatus={this.props.toggleStatus}/>
              ))}
      </div>
    );
  }
}

export default WatchList;

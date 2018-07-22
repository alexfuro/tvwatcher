import React, { Component } from 'react';
import './showlist.css';
import Show from './show';

class WatchList extends Component {
  render() {
    const shows = this.props.shows;
    return (
      <div className="watchlist">
      <table>
            <thead>
            <tr>
                <th>Title</th>
                <th>Watch Status</th>
                <th>Watch/Unwatched</th>
                <th>Remove</th>
            </tr>
            </thead>
            <tbody>
            {shows.map((show,index)=>(
                <Show show={show} key={index} id={index}
                onDelete={this.props.onDelete} onToggleStatus={this.props.toggleStatus}/>
                ))}
            </tbody>
        </table>
      </div>
    );
  }
}

export default WatchList;

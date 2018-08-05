import React, { Component } from 'react';
import './show.css';

class Show extends Component {
  render() {
    const {show} = this.props;
    return (
      <div className="show">
        <span>{show.title}</span>
        <ul class="show-edits">
          <li>
            {show.status? "watched" : "unwatched"}
          </li>
          <li>
            <button onClick={() => this.props.onToggleStatus(this.props.id)}>Change Status</button>
          </li>
          <li>
            <button onClick={() => this.props.onDelete(this.props.id)}className="deleteAction">Delete Show</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Show;

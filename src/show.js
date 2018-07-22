import React, { Component } from 'react';
import './show.css';

class Show extends Component {
  render() {
    const {show} = this.props;
    return (
      <tr>
        <td>{show.title}</td>
        <td>{show.status? "watched" : "unwatched"}</td>
        <td><button onClick={() => this.props.onToggleStatus(this.props.id)}>Change Status</button></td>
        <td><button onClick={() => this.props.onDelete(this.props.id)}className="deleteAction">Delete Show</button></td>
      </tr>
    );
  }
}

export default Show;

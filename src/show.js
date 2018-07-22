import React, { Component } from 'react';
import './show.css';

class Show extends Component {
  render() {
    const {show} = this.props;
    return (
      <tr>
        <td>{show.title}</td>
        <td>{show.status? "watched" : "unwatched"}</td>
        <td><button>Change Status</button></td>
        <td><button>Delete Show</button></td>
      </tr>
    );
  }
}

export default Show;

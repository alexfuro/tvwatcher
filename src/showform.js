import React, { Component } from 'react';
import './showform.css';

class ShowForm extends Component {
  render() {
    return (
      <form className="show-form" onSubmit={this.props.onSubmit}>
         <legend>Add to Watchlist</legend>
         <label>Title:</label>
         <input type="text" name="title" placeholder="title" />

         <label>Watched?</label>
         <input type="checkbox" name="status" />

         <input type="submit" id="submitShowForm" name="submitShow" value="Save" />
       </form>
    );
  }
}

export default ShowForm;

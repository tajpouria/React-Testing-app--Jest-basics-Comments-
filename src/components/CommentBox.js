import React, { Component } from "react";

export default class extends Component {
  state = {
    comment: ""
  };
  handleChange = event => {
    this.setState({ comment: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    // TODO call and action creator
    // save the comment

    this.setState({ comment: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4> Add a comment </h4>
        <textarea onChange={this.handleChange} value={this.state.comment} />
        <div>
          <button>Add</button>
        </div>
      </form>
    );
  }
}

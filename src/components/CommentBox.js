import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions";

class CommentBox extends Component {
  componentDidMount() {
    this.shouldLeave();
  }

  componentDidUpdate() {
    this.shouldLeave();
  }

  shouldLeave() {
    if (!this.props.auth) {
      return console.log("I SHOULD LOG OUT!");
    }
  }

  state = {
    comment: ""
  };
  handleChange = event => {
    this.setState({ comment: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({ comment: "" });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4> Add a comment </h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Add</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>
          Fetch Comments
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(CommentBox);

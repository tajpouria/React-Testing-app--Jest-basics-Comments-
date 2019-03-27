import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  renderList() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>;
    });
  }
  render() {
    return (
      <div>
        <ul>{this.renderList()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments
  };
};

export default connect(mapStateToProps)(CommentList);

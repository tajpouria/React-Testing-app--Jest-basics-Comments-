import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import * as action from "actions";

class App extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={this.handleSignClick.bind(this)}>Sign Out</button>
      );
    } else {
      return <button onClick={this.handleSignClick.bind(this)}>Sign In</button>;
    }
  }

  handleSignClick() {
    const { auth, changeAuth, history } = this.props;
    if (auth) {
      changeAuth(false);
      history.push("/");
    } else {
      changeAuth(true);
      history.push("/post");
    }
  }

  renderHeader() {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post A Comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
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
  action
)(App);

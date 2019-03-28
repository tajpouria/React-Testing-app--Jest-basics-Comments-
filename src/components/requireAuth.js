import React, { Component } from "react";

export default childComponent => {
  class ComposedComponent extends Component {
    render() {
      return <childComponent />;
    }
  }
  return ComposedComponent;
};

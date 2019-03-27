import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "reducers";

export default ({ children, initialState = {} }) => {
  return (
    <Provider store={createStore(reducer, initialState)}>{children}</Provider>
  );
};

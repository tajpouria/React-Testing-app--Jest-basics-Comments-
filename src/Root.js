import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "reducers";
import stateValidate from "middlewares/stateValidate";
import async from "middlewares/async";

export default ({ children, initialState = {} }) => {
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(async, stateValidate)
  );
  return <Provider store={store}>{children}</Provider>;
};

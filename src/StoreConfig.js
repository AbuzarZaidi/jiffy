import { createStore, compose, applyMiddleware } from "redux";

import thunkMiddleware from "redux-thunk";

import rootReducer from "./reducers";

// import { composeWithDevTools } from "redux-devtools-extension";

// Store config
export default function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunkMiddleware)
    // compose(applyMiddleware(thunkMiddleware), composeWithDevTools())
  );
  return store;
}
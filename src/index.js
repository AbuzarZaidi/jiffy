import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "./StoreConfig";
import reportWebVitals from './reportWebVitals';
import Root from "./Components/Root.jsx";
import "react-datepicker/dist/react-datepicker.css";

const store = configureStore();

ReactDOM.render(
  
    <Provider store={store}>
      <Router>
        <Root />
      </Router>
    </Provider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

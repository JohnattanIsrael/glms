import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route, BrowserRouter } from "react-router-dom";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension(): f => f)(createStore)));

import "./style/main.scss";
import history from './history';

import App from "./components/app";
import Dashboard from './components/dashboard';

import Login from './components/login';
import Cards from './components/journey/cards/cards';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter
      history={history}
      >
        <App>
          <Switch>
            <Route path='/' exact component={Login}/>
            <Route path='/dashboard' exact component={Dashboard}/>
            <Route path='/cards' exact component={Cards}/>
          </Switch>
        </App>
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);

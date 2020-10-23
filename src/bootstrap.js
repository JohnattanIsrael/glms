import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import { Router, Switch, Route } from "react-router-dom";

import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(compose((window.devToolsExtension ? window.devToolsExtension(): f => f)(createStore)));

import "./style/main.scss";
import history from './history';

import App from "./components/app";
import Reception from './components/reception/reception';
import Dashboard from './components/dashboard';
import SignIn from './components/reception/sign-in/signIn';
import SignUp from './components/reception/sign-up/signUp';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router
      history={history}
      >
        <App>
          <Switch>
            <Route path='/' exact component={Reception}/>
            <Route path='/dashboard' exact component={Dashboard}/>
            <Route path='/signin' exact component={SignIn}/>
            <Route path='/signup' exact component={SignUp}/>
          </Switch>
        </App>
      </Router>
    </Provider>,
    document.querySelector(".app-wrapper")
  );
}

document.addEventListener("DOMContentLoaded", main);

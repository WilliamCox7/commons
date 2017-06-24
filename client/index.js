/* PACKAGES */
import React from "react";
import { render } from "react-dom";
import { Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, hashHistory } from "react-router";
import rootReducer from './rootReducer';

/* COMPONENTS */
import App from './App.js';
import Login from './components/Login/Login';
import IsLoggedIn from './components/IsLoggedIn/IsLoggedIn';
import Welcome from './components/Welcome/Welcome';
import Create from './components/Create/Create';
import Hobbies from './components/Hobbies/Hobbies';
import Attributes from './components/Attributes/Attributes';
import Activities from './components/Activities/Activities';
import Upload from './components/Upload/Upload';
import Feed from './components/Feed/Feed';

/* STORE - REDUX */
let store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

/* ROUTES */
render (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route component={App}>
        <Route path="/login" component={Login} />
        <Route path="/create" component={Create} />
        <Route component={IsLoggedIn}>
          <Route path="/" component={Welcome} />
          <Route path="/hobbies" component={Hobbies} />
          <Route path="/attributes" component={Attributes} />
          <Route path="/activities" component={Activities} />
          <Route path="/upload" component={Upload} />
          <Route path="/feed" component={Feed} />
        </Route>
      </Route>
    </Router>
  </Provider>
  , document.getElementById('root')
);

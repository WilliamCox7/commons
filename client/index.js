import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { createStore } from 'redux';
import rootReducer from './redux/rootReducer';

import App from './App';
import Login from './Components/Auth/Login/Login';
import Create from './Components/Auth/Create/Create';
import Welcome from './Components/Walkthrough/Welcome/Welcome';
import Hobbies from './Components/Walkthrough/Hobbies/Hobbies';
import Defines from './Components/Walkthrough/Defines/Defines';
import Activity from './Components/Walkthrough/Activity/Activity';
import Upload from './Components/Walkthrough/Upload/Upload';
import Home from './Components/Home/Home';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute path="/login" component={Login} />
        <Route path="/create" component={Create} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/hobbies" component={Hobbies} />
        <Route path="/defines" component={Defines} />
        <Route path="/activity" component={Activity} />
        <Route path="/upload" component={Upload} />
        <Route path="/home" component={Home} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);

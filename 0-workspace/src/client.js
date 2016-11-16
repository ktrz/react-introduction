import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';
import MyComponent from './components/MyComponent';
import MyOtherComponent from './components/MyOtherComponent';
// import Archives from './pages/Archives';
// import Featured from './pages/Featured';
// import Layout from './pages/Layout';
// import Settings from './pages/Settings';

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MyComponent}>

    </Route>
    <Route path="/other" component={MyOtherComponent}>

    </Route>
  </Router>,
  app);

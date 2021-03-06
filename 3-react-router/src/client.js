import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Archives from './pages/Archives';
import Featured from './pages/Featured';
import Layout from './pages/Layout';
import Settings from './pages/Settings';

const app = document.getElementById('root');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Featured}></IndexRoute>
      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
  app);

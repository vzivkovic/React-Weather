var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={ Main }>
      <IndexRoute component={ Weather } />
      <Route path="About" component={ About } />
      <Route path="Examples" component={ Examples } />
    </Route>
  </Router>,
  document.getElementById('app')
);

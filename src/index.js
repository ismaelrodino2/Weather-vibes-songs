import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './templates/Home';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { Data } from './templates/Data';
import { Menu } from './components/Menu';

ReactDOM.render(
  <BrowserRouter>
    <Menu />
    <Switch>
      <Route exact path="/saved-data" component={Data} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

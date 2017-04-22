/**
 * Created by maxcher on 21/04/2017.
 */
import React from 'react';
// import Router from 'react-router';
import {Route} from 'react-router-dom';
import Game from './game/game';
import Home from './Home'
import Settings from './settings/Settings';

let routes = (
  <div>
<Route exact path="/" component={Home} />
<Route path="/game" component={Game} />
<Route path="/settings" component={Settings} />
  </div>
);

module.exports = routes;
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Game from '../pages/Game';
import EndGame from '../pages/EndGame';
import Ranking from '../pages/Ranking';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/game" exact component={Game} />
    <Route path="/endgame" exact component={EndGame} />
    <Route path="/ranking" exact component={Ranking} />
  </Switch>
);

export default Routes;

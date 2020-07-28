import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import EmptyArtboard from './containers/EmptyArtboard';
import EmptyArtboard1 from './containers/EmptyArtboard1';
import EmptyArtboard2 from './containers/EmptyArtboard2';
import EmptyArtboard3 from './containers/EmptyArtboard3';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={EmptyArtboard} />
      <Route path="/empty-artboard-1" component={EmptyArtboard1} />
      <Route path="/empty-artboard-2" component={EmptyArtboard2} />
      <Route path="/empty-artboard-3" component={EmptyArtboard3} />
    </Switch>
  </BrowserRouter>
);

export default App;

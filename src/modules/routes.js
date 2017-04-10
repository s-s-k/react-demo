import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App from './App';
import Video from './Video/Video';
import AnalogInstruction from './AnalogInstruction';

// import About from './About';
// import Repos from './Repos';
// import Repo from './Repo';
// import Home from './Home';


const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Video} />
    <Route path="/video" component={Video} />
    <Route path="/analog" component={AnalogInstruction} />
  </Route>
);
export default routes;
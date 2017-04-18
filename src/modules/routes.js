import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App from './App';
import Video from './Video/Video';
import AnalogInstruction from './AnalogInstruction';
import Detail from './Detail';
import CarList from './CarList';

// import About from './About';
// import Repos from './Repos';
// import Repo from './Repo';
// import Home from './Home';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={CarList} />
    <Route path="/detail" component={Detail}/>
    <Route path="/carlist" component={CarList} />
    <Route path="/video" component={Video} />
    <Route path="/analog" component={AnalogInstruction} />
  </Route>
);
export default routes;
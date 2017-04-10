
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './modules/routes';
import { AppContainer } from 'react-hot-loader';
import 'normalize.css';

// AppContainer is a necessary wrapper component for HMR


const render = () => {
  ReactDOM.render(
    <AppContainer>
    <Router routes={routes} history={browserHistory}>

    </Router>
    </AppContainer>,
    document.getElementById('root')
  );
};
render();

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./index', () => {
    render();
  });
}
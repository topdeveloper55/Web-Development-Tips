import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './routes.jsx';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-68652696-2');
function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}


class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory} onUpdate={logPageView} routes={routes}/>
    );
  }
}

export default AppRoutes;

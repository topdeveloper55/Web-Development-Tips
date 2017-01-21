import React from 'react';
import { Router, browserHistory } from 'react-router';
import routes from './routes.jsx';

class AppRoutes extends React.Component {
  render() {
    return (
      <Router history={browserHistory} routes={routes}/>
    );
  }
}

export default AppRoutes;

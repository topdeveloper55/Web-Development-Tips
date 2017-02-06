import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes.jsx';
require('./static/css/base.scss');
require('./static/js/prism.js');
window.onload = () => {
  ReactDOM.render(<AppRoutes/>,document.getElementById('container'));
}

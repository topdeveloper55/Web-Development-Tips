import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes.jsx';
require('./static/css/base.scss');
require('./static/js/prism.js');
window.onload = () => {
  var loader = document.querySelector('.loader');
  loader.className += " loaderDone";
  ReactDOM.render(<AppRoutes/>,document.getElementById('container'));
}

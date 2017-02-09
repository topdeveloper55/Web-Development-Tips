import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './components/AppRoutes.jsx';
require('./static/css/base.scss');
require('./static/js/prism.js');
require('../node_modules/aos/dist/aos.css')
import AOS from 'aos';
window.onload = () => {
  AOS.init({
    disable: 'mobile'
  });
  ReactDOM.render(<AppRoutes/>,document.getElementById('container'));
}

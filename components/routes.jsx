import React from 'react';
import Layout from './layout.jsx';
import Home from './home.jsx';
import Posts from './posts.jsx';
import PostPage from './post.jsx';
import About from './about.jsx';
import Contact from './contact.jsx';
import NotFound from './404.jsx';

import {Route, IndexRoute} from 'react-router';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute componenet={Home}/>
    <Route path="posts">
      <IndexRoute component={Posts}/>
      <Route path=":id" component={PostPage}/>
    </Route>
    <Route path="about" component={About}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={NotFound}/>
  </Route>
)

export default routes;

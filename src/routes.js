import React from 'react';
import Layout from './components/layout.jsx';
import Home from './components/home.jsx';
import Posts from './components/posts.jsx';
import PostPage from './components/post.jsx';
import {TagsPage} from './components/tags.jsx';
import TagPage from './components/tag.jsx';
import About from './components/about.jsx';
import Contact from './components/contact.jsx';
import Search from './components/search.jsx';
import NotFound from './components/404.jsx';

import {Route, IndexRoute} from 'react-router';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="posts">
      <IndexRoute component={Posts}/>
      <Route path=":name" component={PostPage}/>
    </Route>
    <Route path="tags">
      <IndexRoute component={TagsPage}/>
      <Route path=":name" component={TagPage}/>
    </Route>
    <Route path="search" component={Search}/>
    <Route path="about" component={About}/>
    <Route path="contact" component={Contact}/>
    <Route path="*" component={NotFound}/>
  </Route>
)

export default routes;

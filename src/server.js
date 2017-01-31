import path from 'path';
import { Server } from 'http';
import express from 'express';
import sm from 'sitemap';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFound from './components/404.jsx';
const app = new express()
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(__dirname + "/static"))
app.use(express.static(__dirname + "videos/"))
//app.use(express.static("images"))
app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      if (err) {
        markup = renderToString(<NotFound/>);
        return res.status(500).send(err.message);
      }
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      let markup;
      if (renderProps) {
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        markup = renderToString(<NotFound/>);
        res.status(404);
      }
      return res.render('index', { markup });
    }
  );
});

var sitemap = sm.createSitemap({
  hostname: 'http://websitedevtips.com',
  cacheTime: 60000,
  urls: [
    {url: '/posts/', changefreq: 'daily', priority: 0.1},
    {url: '/about/', changefreq: 'weekly', priority: 0.7},
    {url: '/contact/', changefreq: 'weekly', priority: 0.7},
    {ulr: '/tags/', changefreq: 'daily', priority: 0.2}
  ]
})

app.get('/sitemap.xml', (req, res) => {
  sitemap.toXML((err, xml) => {
    if(err) {
      return res.status(500).end();
    }
    res.header('Content-Type', 'application/xml');
    res.send(xml);
  })
})

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});

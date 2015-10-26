require("babel/register");

var express = require('express');
var babel = require('babel');
var React = require('react');
var path = require('path');
var fs = require('fs');
var logger = require('morgan');
var debug = require('debug')('intern-blog-sample:Server');
var bodyParser = require('body-parser');
var app = express();

// Prepare Server Render
var ClientApp = require('./scripts/components/App.js');
var ClientContainer = fs.readFileSync(path.resolve(__dirname, '_index.html'), {
  encoding: 'utf8'
});

// Routes
var Routes = {
  articles: require('./api/routes/articles.js')
};

// Get Server Render
var renderPage = function (url) {
  var html = React.renderToString(React.createElement(ClientApp, {
    path: url
  }));
  return ClientContainer.replace(/<!--Render Content-->/, html);
};

// Binder
module.exports = function (app) {
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(express.static(path.join(__dirname, '../build')));

  // Handle Server Render
  app.use(function (req, res, next) {
    if (req.url.match(/\/(index\.html?)?$/)) {
      res.send(renderPage(req.url));
    } else {
      next();
    }
  });

  // API Route
  app.use(function (req, res, next) {
    req.url = req.url.replace(/^\/api/, '');
    next();
  });

  app.use('/articles',Routes.articles);

  // Fallback to index.html
  app.use(function (req, res) {
    res.send(renderPage(req.url));
  });

  return app;
};

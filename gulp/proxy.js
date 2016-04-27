'use strict';

var express = require('express');
var proxy   = require('express-http-proxy');
var url     = require('url');

var allowedHeaders = [
  'Accept',
  'Authorization',
  'AuthTicket',
  'Content-Type',
  'Origin',
  'Referer',
  'User-Agent',
  'X-Mindflash-SessionID',
  'X-Requested-With',
].toString();

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', allowedHeaders);

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
};

function createProxy(port, proxyUrl) {

  var proxyParams = {
    forwardPath: function(req, res) {
      var parsedPath = url.parse(req.url).path;

      return parsedPath;
    },
    intercept: function(rsp, data, req, res, callback) {
      // rsp - original response from the target
      // data = JSON.parse(data.toString('utf8'));

      res.header('Access-Control-Allow-Origin', req.headers.origin);
      res.header('X-Frame-Options', 'ALLOWALL');
      if (res._headers['set-cookie']) {
        for (var i = 0; i < res._headers['set-cookie'].length; i++) {
          res._headers['set-cookie'][i] = res._headers['set-cookie'][i].replace(/domain=\.?domain\.com;?\s?/gi, '');
        }
      }
      callback(null, data);
    },
  }

  var middlewareProxy = express();
  middlewareProxy.use(allowCrossDomain);
  middlewareProxy.all('/*', proxy(proxyUrl, proxyParams));
  middlewareProxy.listen(port);
}

createProxy(5000, 'https://api.github.com')

module.exports = function() {
  return [];
};

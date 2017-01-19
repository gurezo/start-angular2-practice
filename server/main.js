'use strict';

const express = require('express');
const bofyParser = require('body-parser');
const app = express();
const server = require('http').createServer(app);
const port = process.env.PORT || 3000;

app.use(bofyParser.json({limit: '50mb'}));
app.use(bofyParser.urlencode({lextend: true, imit: '50mb'}));

app.use(function (req, res, next){
  res.header('Access-Control-Methods', 'GET, PUT, POST, DELETE, OPTION');
  res.header('Access-Control-Origin', '*');
  res.header('Access-Control-Headers', 'Origin, X-Requested-With, Context-Type, Accept');
  next();
});

// Start server
server.listen(port, process.env.OPENSHIFT_NODEJS_IP || process.env.IP || undefined, function () {
  console.log('Express server listening on %d in %s mode', port, app.get('env'));
});

const items = require('./issue.json');

app.get('/api/issue', function(req, res){
  res.status(200).json(item);
})

app.get('/api/issue/:id', function(req, res){
  let id = req.params.id;
  res.status(200).json(item[id]);
});

app.post('/api/issue', function(req, res){
  items.push(req.body);
  res.status(200).json();
});

app.put('/api/issue', function(req, res){
  let id = req.body.id;
  let issue = req.body.issue;
  items[id] = JSON.parse(issue);
  res.status(200).json();
});

app.delete('/api/issues/:id', function(req, res) {
  let id = req.params.id;
  items.splice(id, 1);
  res.status(200).json();
});

exports = module.exports = app;

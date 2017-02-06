'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.use(bodyParser.json());



app.use('/api/classifieds', require('./routes/classifieds'))

app.use(express.static(path.join(__dirname, 'app/public')))
//wildcard
app.use('*', function(req, res, next) {
  res.sendFile('index.html', {root: path.join(__dirname, 'app/public')})
})

app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use(function(err, req, res, next) {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  console.log(err)
  res.status(err.status || 500)
  res.json(err)
})

// const port = process.env.PORT || 3000;

// app.listen(port, () => {
//     console.log('Listening on port', port);
// });

module.exports = app;
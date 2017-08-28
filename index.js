'use strict';

const express = require('express');
const bodyParser = require('body-parser');
var port = process.env.PORT || 8000;

const restService = express();

restService.use(bodyParser.urlencoded({
  extended: true
}));

restService.use(bodyParser.json());

restService.post('/echo', function(req, res) {
  var speech = req.body.result && req.body.result.parameters && req.body.result.parameters.echoText ? req.body.result.parameters.echoText : "Seems like some problem. Speak again."
  return res.json({
    speech: speech,
    displayText: speech,
    source: 'webhook-echo-sample'
  });
});

restService.listen((port), function() {
  console.log("Server up and listening", port);
});

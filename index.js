'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const songsData = require('./data').songsData;

var port = process.env.PORT || 8000;

/**
 * @template T
 * @param {Array<T>} array The array to get a random value from
 */
const getRandomValue = array => array[Math.floor(Math.random() * array.length)];

/** @param {Array<string>} messages The messages to concat */
const concat = messages => messages.map(message => message.trim()).join(' ');

const restService = express();

restService.use(bodyParser.urlencoded({
  extended: true
}));

restService.use(bodyParser.json());

restService.post('/', function(req, res) {
  //get from local file
  let song = getRandomValue(songsData.list).link;

  let songsAudioTag = "<audio src='" + song + "'> That's all for now</audio>";
  let songText = `<speak>${concat([songsAudioTag])}</speak>`;

  return res.json({
    speech: songText,
    displayText: songText,
    source: 'webhook-song-sample'
  });
});

restService.listen((port), function() {
  console.log("Server up and listening", port);
});

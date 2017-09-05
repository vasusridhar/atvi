'use strict';

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const jsonData = require('./jsonData.json');

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
  //get random link from local file
  //let song = getRandomValue(songsData.list).link;
  let songs = jsonData.songsList;
  let songTitle = "kinchit.org-"+jsonData.whereAmI;
  let song = songs.find(o => o.title.includes(songTitle)).link;
  let songsAudioTag = "<audio src='" + song + "'> That's all for now</audio>";
  let songText = `<speak>${concat([songsAudioTag])}</speak>`;
  console.log(`playing song ${jsonData.whereAmI}: ${song}`);
  //update index
  jsonData.whereAmI = jsonData.whereAmI +1;
  fs.writeFileSync('./jsonData.json', JSON.stringify(jsonData));
  return res.json({
    speech: songText,
    displayText: song,
    source: 'webhook-song-sample'
  });
});

restService.listen((port), function() {
  console.log("Server up and listening", port);
});

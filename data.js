const deepFreeze = require('deep-freeze');

const songsData = {
	list: [{
    "title" : "Sharadhe karuna",
    "link" : "https://storage.googleapis.com/mystic-73626.appspot.com/Sharade%20Karunanidhe%20-%20Hameer%20Kalyani%20by%20M.%20Shruthi.mp3"
	},{
    "title" : "Jayadev",
    "link" : "https://storage.googleapis.com/mystic-73626.appspot.com/Jayadeva%20Bhajan.mp3"
	},{
    "title" : "Mahamantra-HHMurali",
    "link" : "https://storage.googleapis.com/mystic-73626.appspot.com/001-MAHA-MANTRA-KIRTAN.mp3"
	},{
    "title" : "Mahamantra-Kalpana",
    "link" : "https://storage.googleapis.com/mystic-73626.appspot.com/Mahamantra%20Kirtan.mp3"
	}]
};


// Use deepFreeze to make the constant objects immutable so they are not unintentionally modified
module.exports = deepFreeze({
  songsData
});
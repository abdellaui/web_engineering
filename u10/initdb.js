var request = require('request');
var model = require('./model.js');

// Daten abfragen
request('https://jsonplaceholder.typicode.com/photos', {json:true}, (err, resp, body) => {
	if(err)
	  return console.log(err);
	// Ausgewählte Daten in die Datenbank schreiben
	for (var entry of body){
		model.Photo.create({
			albumRef: entry.albumId,
			photoNr: entry.id,
			title: entry.title,
			url: entry.url,
			thumbnailUrl: entry.thumbnailUrl
		});
	}
});

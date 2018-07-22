var request = require('request');
var model = require('./model.js');


// Daten abfragen
request('https://jsonplaceholder.typicode.com/users', {
	json: true
}, (err, resp, body) => {
	if (err)
		return console.log(err);
	flattened = body.map(element => [element.id, element.name, element.address.street, element.address.city, element.company.name]);
	/*
	 * An dieser Stelle sollen die Daten in das Modell überfürhrt werden.
	 * Nach erfolgreichem Anlegen eines Eintrags soll in der Konsole
	 * die Ausgabe "<user.name> wurde erfolgreich erstellt" erfolgen.
	 */

	flattened.forEach(element => {

		model.sequelize.sync().then(() => model.user.create({
			id: element[0],
			name: element[1],
			street: element[2],
			city: element[3],
			company: element[4]
		})).then(() => {
			console.log(element[1] + " wurde erfolgreich erstellt");
		});

	});


});
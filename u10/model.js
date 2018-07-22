module.exports = (function() {
	// Sequelize initialisieren
	const Sequelize = require('sequelize');
	this.sequelize = new Sequelize('web_eng', 'root', '666666', {
		host: 'localhost',
		dialect: 'mysql',

		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000
		},

		//storage: './db.sqlite',

		operatorsAliases: false
	});


	this.Photo = sequelize.define('photo', {
		albumRef: Sequelize.INTEGER,
		photoNr: Sequelize.INTEGER,
		title: Sequelize.STRING,
		url: Sequelize.STRING,
		thumbnailUrl: Sequelize.STRING
	});

	this.Comment = sequelize.define('comment', {
		content: Sequelize.STRING,
		timestamp: {
			type: Sequelize.DATE,
			defaultValue: Sequelize.NOW
		}
	});

	this.Photo.hasMany(Comment);
	// Hier Assoziationen zwischen Photo und Comment definieren

	// Mit DB synchronisieren
	sequelize.sync();

	return this;
})();

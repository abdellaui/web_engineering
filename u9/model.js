module.exports = (function () {
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
		operatorsAliases: false
	});

	this.user = sequelize.define('user', {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: Sequelize.STRING,
		street: Sequelize.STRING,
		city: Sequelize.STRING,
		company: Sequelize.STRING

	});

	// Mit DB synchronisieren
	sequelize.sync();

	return this;
})();
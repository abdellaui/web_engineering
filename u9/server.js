var http = require('http');
var url = require('url');
var fs = require('fs');
var AsciiTable = require('ascii-table');
var model = require('./model.js');


http.createServer(function (request, response) {
	// URL auslesen
	var url = request.url.split('/');

	if (request.method == 'GET') {
		switch (url[1]) {
			// index.html anzeigen
			case 'index':
				fs.readFile('./public/index.html', function (error, file) {
					response.writeHead(200, {
						"Content-Type": "text/html"
					});
					response.write(file);
					response.end();
				});
				break;
			case 'users':

				if (url.length > 2) {
					model.user.findById(url[2]).then((result) => {
						var data = result.dataValues;

						switch (request.headers['accept']) {
							case 'text/plain':
								response.writeHead(200, {
									"Content-Type": "text/plain"
								});
								var table = new AsciiTable('Ausgabe');
								table.setHeading('id', 'name', 'street', 'city', 'company');
								table.addRow(data.id, data.name, data.street, data.city, data.company);
								response.end(table.toString());
								break;
							case 'application/json':
								response.writeHead(200, {
									"Content-Type": "application/json"
								});
								response.end(JSON.stringify(data));
								break;
							default:
								response.writeHead(200, {
									"Content-Type": "text/plain"
								});
								response.end(JSON.stringify(data));
								break;
						}
					}).catch((err) => {

						response.writeHead(501, {
							"Content-Type": "text/plain"
						});
						response.end('error:' + err);
					});


					break;
				}

			default:
				response.writeHead(405, {
					"Content-Type": "text/plain"
				});
				response.end('Method not allowed');
		}
	}

}).listen(8080, '127.0.0.1');

console.log('server running...');
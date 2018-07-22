var request = require('request');
var fs = require('fs');
var http = require('http');

var index = fs.readFileSync('index_stud.html');
var client_js = fs.readFileSync('client_stud.js');

http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  if (req.method == 'GET') {
    // serve index.html on /
    if (req.url === '/') {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(index);
    }
    // serve client.js on /client_js
    if (req.url === '/client_js') {
      res.writeHead(200, {'Content-Type': 'application/javascript'});
      res.end(client_js);
    }
    // serve user info on /users
    if (req.url === '/users') {
      res.writeHead(
        200,
        {'Content-Type': 'application/json; charset=utf-8'}
      );

      request('https://jsonplaceholder.typicode.com/users', function (error_, res_, body) {

          var fullArr = JSON.parse(body);
          var returnArr = [];
          fullArr.map(currItem =>{
              var tempItem = {};
              tempItem.id = currItem.id;
              tempItem.name = currItem.name;
              tempItem.street = currItem.address.street;
              tempItem.city = currItem.address.city;
              tempItem.companyName = currItem.company.name;
              returnArr.push(tempItem);
          });
          res.end(JSON.stringify(returnArr));
      });

    }
  }
}).listen(8080, '127.0.0.1');

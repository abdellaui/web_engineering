var http = require('http');
var url = require('url');
http.createServer(function (request, response) {

    response.setHeader('content-type', 'text/plain; charset=utf-8');

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    /*response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    response.setHeader('Access-Control-Allow-Credentials', true);*/

    var urlString = url.parse(request.url, true);

    switch (request.method) {
        case 'GET':
            var paths = urlString.path.split("/");
            console.log(paths);
            if(paths.length>1){
                if(paths[1]==="users"){
                    response.statusCode = 200;

                    var request2 = require('request');
                    request2('https://jsonplaceholder.typicode.com/users', function (error, res, body) {

                        var fullArr = JSON.parse(body);
                        var returnArr = [];
                        fullArr.map(currItem =>{
                            var tempItem = {};
                            tempItem.id = currItem.id;
                            tempItem.name = currItem.name;
                            tempItem.city = currItem.address.city;
                            tempItem.companyName = currItem.company.name;
                            returnArr.push(tempItem);
                        });
                        response.end(JSON.stringify(returnArr));
                    });
                    break;
                }
            }
        default:
            response.statusCode = 405;
            response.end('Method not allowed');
    }

}).listen(8080, '127.0.0.1');

console.log('Server läuft..');
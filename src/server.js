
var express = require('express');
var server = express();
var request = require('request');
var bodyParser = require('body-parser');
var domain = require('domain').create();
var http = require('http');

server.use( bodyParser.json() );
server.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

domain.on('error', function (err) {
});

server.use(express.static(__dirname + '/public'));


//-------- Business Transactions ----------------------

server.get('/products', function(serverRequest, res) {
  productsCall('GET', '', serverRequest, res)
});

server.get('/delete', function(serverRequest, res) {
  params = JSON.stringify(serverRequest.query);
  productsCall('DELETE', params, serverRequest, res);
});

server.get('/update', function(serverRequest, res) {
   params = JSON.stringify(serverRequest.query);

  productsCall('PUT', params, serverRequest, res)

});

server.post('/add', function(serverRequest, res) {
  params = JSON.stringify(serverRequest.body.params);
  productsCall('POST', params, serverRequest, res);
});

function productsCall(method, params, serverRequest, res){
  var id = "";
  if (method !== "POST" && method !== "GET") {
    id = serverRequest.query["id"];
  }

  data = {
    method: method,
    url: "http://ec2-52-35-106-103.us-west-2.compute.amazonaws.com:8080/SampleApp/products/" + id,
    body: params,
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': params.length
    }
  };

  request(data, function(error, apiResponse, body) {
    if (apiResponse && body) {
      res.send(body);
    } else {
      res.send(params);
    }
  });
}

//-------- Exceptions ----------------------

//This endpoint doesn't exist on Java backend
server.get('/exception', function (serverRequest, response) {
  domain.run(function () {
    throw new Error('User triggered exception!');
  });
  response.send("[]");
});


server.listen(3000, '0.0.0.0', function () {
  console.log('Node Server Started');
  console.log('Open your browser to: http://localhost:3000')
});

server.on('error', function (e) {
  console.log('Node Server Failed');
  console.log(e);
});

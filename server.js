var http = require('http'),
    fs = require('fs'),
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

// Your request handler should send listingData in the JSON format if a GET request is sent to the '/listings' path.
// Otherwise, it should send a 404 error.
var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);

  // If the desired url is requested, return a 200 status code and show JSON data
  if(parsedUrl.pathname === '/listings'){
    response.writeHead(200, {'Content-Type': 'application/json'});
    response.write(listingData);
    response.end();
  }
  // Else, return a 404 status code and show Bad gateway error
  else {
    response.writeHead(404, {'Content-Type': 'text/html'});
    response.write('Bad gateway error');
    response.end();
  }

};

server = http.createServer(requestHandler);

// This callback function should save the data in the listingData variable, then start the server.
fs.readFile('listings.json', 'utf8', function(err, data) {

    // If there's an error, throw the error
    if(err){
      throw err;
    }

    // Else, set listingData to the data read in from the file
    listingData = data;

    // Starting server and setting it to listen to port 8080 on localhost
    server.listen(port, function(){
      console.log('Server listening on: http://localhost:' + port);
    });

});

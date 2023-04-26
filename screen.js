#!/usr/bin/node

const url = require('url');
const http = require('http');
const os = require('os');
const interfaces = os.networkInterfaces();
const addresses = [];

for (const interface in interfaces) {
  for (const subinterface of interfaces[interface]) {
    if (subinterface.family === 'IPv4' && !subinterface.internal) {
      addresses.push(subinterface.address);
    }
  }
}

const ipAddress = addresses[0]

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
    // Set a response type of plain text for the response
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send back a response and end the connection
    res.end('Screen commands ready\n');

	const { exec } = require("child_process");

	const path = url.parse(req.url).path;

	if (path == '/sleep') {
		exec("./screen_sleep.sh", (error, stdout, stderr) => {});
	}

	if (path == '/wake') {
		exec("./screen_wake.sh", (error, stdout, stderr) => {});
	}
});

app.listen(3000, ipAddress);
console.log('Node server running...');

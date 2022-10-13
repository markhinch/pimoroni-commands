const url = require('url');
const http = require('http');

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

app.listen(3000);
console.log('Node server running...');

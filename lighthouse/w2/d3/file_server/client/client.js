const net = require('net');
const stdin = process.stdin;
//We need to specify the address and the port to connect to
const client = net.createConnection({
  host: 'localhost',
  port: 3000
});
//We need the encoding to tell the server and the client what kind of data are we transfering
stdin.setEncoding('utf8');
client.setEncoding('utf8');
//When I, the client finally connect...........
client.on('connect', function() {
  client.write('Knock Knock! who ther? The lucky guy!');
});

stdin.on('data', (input) => {
  client.write(`${input}`);
});

const request = require('request');
request('', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
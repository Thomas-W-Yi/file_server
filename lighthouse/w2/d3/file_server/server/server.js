const net = require('net');
const stdin = process.stdin;

const server = net.createServer();
// when someone connects,
// the parameter inside the callback
// is a client that connected
server.on('connection', (client) => {
  //Set encoding just like on the client
  client.setEncoding('utf8');
  //when one of the connections sends data and we recieve it.............
  client.on('data', (data) => {
    console.log("connected user says:", data);
    client.write('How can I help you?');
  });
  console.log("someone has connected");
});

server.listen(3000, (err) => {
  if (!err) console.log('server is up running on port 3000!');
});
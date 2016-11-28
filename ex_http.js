const http = require('http');
const fs = require('fs');
const PORT = 1337;

// create http server 
const server = http.createServer((req, res) => {
  fs.readFile('./index.html', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write('Not Found!');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    }
  });
});

server.listen(PORT, '127.0.0.1');
console.log(`Server listening on port ${ PORT }`);
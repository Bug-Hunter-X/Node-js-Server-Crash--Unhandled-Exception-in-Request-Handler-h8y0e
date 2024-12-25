const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Simulate an error that may happen in real request handling
    const invalidData = JSON.parse('{invalid json}');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(JSON.stringify(invalidData));
  } catch (err) {
    console.error('Error handling request:', err);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
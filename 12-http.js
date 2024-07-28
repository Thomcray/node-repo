//http
const http = require("http");
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.end("Welcome to our Home Page");
    return;
  }
  if (request.url === "/about") {
    response.end("Welcome to our About Page");
    return;
  }

  response.end(`
    <h1>Oops! </h1>
    <p>We don't seem to find the page you are looking for</p>

    <a href="/"> back home </a>
    `);
});

// listen to port 5000
server.listen(5000);

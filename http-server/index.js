const http = require("http");

const server = http.createServer((req, res) => {
  if ((req.url == "/hello")) {
    console.log("hello",req.url);
  }
  if ((req.url == "/world")) {
    console.log("world",req.url);
  }

});

server.listen(3000, () => {
  console.log("server is created");
});

const http = require("http"); // http module in core module

const port = 3000; // 브라우저 port 번호 지정

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello Wolrd!</h1>");
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

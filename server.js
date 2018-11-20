const https = require("https"); // module for https
const fs = require("fs"); // required to read certs and keys

const options = {
  key: fs.readFileSync("./ssl/server.key"),
  cert: fs.readFileSync("./ssl/server.crt"),
  ca: fs.readFileSync("./ssl/ca.crt"),
  requestCert: true,
  rejectUnauthorized: false
};

https
  .createServer(options, function(req, res) {
    if (req.client.authorized) {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end('{"status":"approved"}');
    } else {
      res.writeHead(401, { "Content-Type": "application/json" });
      res.end('{"status":"denied"}');
    }
  })
  .listen(8443);

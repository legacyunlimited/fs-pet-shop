const http = require("http");
const fs = require("fs");
const port = 3000;
console.log("hi");
const server = http.createServer((req, res) => {
  //   console.log(req.url);
  //   res.write("testing");
  //   res.end();
  fs.readFile("pets.json", "UTF-8", (err, data) => {
    const pets = JSON.parse(data);
    const index = parseInt(req.url.slice(6));
    if (err) {
      console.error(err);
    } else if (req.method === "GET" && req.url === "/pets") {
      var petsJSON = JSON.stringify(pets);
      res.writeHead(200), { "content-type": "applications/JSON" };
      res.end(petsJSON);
    } else if (req.method === "GET" && req.url === "/pets/0") {
      var petsJSONZero = JSON.stringify(pets[0]);
      res.writeHead(200), { "content-type": "applications/JSON" };
      res.end(petsJSONZero);
    }
  });
});

server.listen(port, (error) => {
  if (error) {
    console.error("error");
  } else {
    console.log(`Server is running ${port}`);
  }
});

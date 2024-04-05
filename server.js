const express = require("express");
const router = require("./controller/routes.js")

// Setup
const path = require("path");
const app = express();
const PORT = 4525;

// Middleware
app.use(express.static("public"));

const requestHandler = (request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });

  response.end("Hello World!\n");
};

const nflTeams = [
  { name: "Arizona Cardinals", city: "Glendale", state: "Arizona" },
  { name: "Atlanta Falcons", city: "Atlanta", state: "Georgia" },
  { name: "Baltimore Ravens", city: "Baltimore", state: "Maryland" },
  { name: "Buffalo Bills", city: "Orchard Park", state: "New York" },
];

// const first = http.createServer((req, res) => {
//     res.setHeader('Content-Type', 'application/json');

//     if (req.url === '/teams') {
//         res.statusCode = 200;
//         res.end(JSON.stringify(nflTeams));
//     } else {
//         res.statusCode = 404;
//         res.end(JSON.stringify({ error: 'Not Found' }));
//     }
// });

// Routes
app.use(router);





app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});

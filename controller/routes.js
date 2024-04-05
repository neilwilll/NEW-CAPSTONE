const express = require('express');
const router = express.Router();
const path = require("path");

router.get("/", (request, response) => {
  console.log("Hit /");
  response.sendFile(path.join(__dirname, "../views/signup.html"));
});

router.get("/favorite", (request, response) => {
  console.log("Hit /favorite");
  response.sendFile(path.join(__dirname, "../views/favorite.html"));
});

router.get("/draft", (request, response) => {
  console.log("Hit /draft");
  response.sendFile(path.join(__dirname, "../views/draft.html"));
});

router.get("/shop", (request, response) => {
  console.log("Hit /shop");
  response.sendFile(path.join(__dirname, "../views/shop.html"));
});

router.post('/api/data', (req, res) => {
  // Handle the POST request
  // Retrieve data from the request body
  const requestData = req.body;
  console.log(requestData)
  // Save the data to the database or perform any other action
  // Return a response indicating the success or any relevant data
  res.json({ message: 'POST request handled', data: requestData });
});


module.exports = router;
import {Router} from 'express';
import path from "path";
import { fileURLToPath } from 'url';
import { Jersey } from '../models/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = Router()



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

router.post('/allJerseys', async (req, res) => {
  console.log(req.body)
  const jerseys = await Jersey.findAll({});

  res.json({jerseys: jerseys})
})


export default router;
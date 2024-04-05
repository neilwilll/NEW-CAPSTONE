const express = require('express');
const router = express.Router();
const tableController = require('../controllers/tableController');
const seedData = require('../seeds/seedData');

// GET endpoint
router.get('/', tableController.getAllItems);

// POST endpoint
router.post('/', tableController.createItem);

// Seed endpoint
router.post('/seed', async (req, res) => {
  try {
    // Call the seedData function to populate the table
    await seedData();

    res.json({ message: 'Seed data created' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

fetch('/api/data')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Request failed');
    }
  })
  .then(data => {
    // Handle the response data
    console.log(data);
    // Perform further actions with the data
  })
  .catch(error => {
    // Handle any errors that occurred during the request or response
    console.error(error);
  });


module.exports = router;



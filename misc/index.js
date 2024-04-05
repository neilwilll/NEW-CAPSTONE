const express = require('express');
const app = express();
const tableRoutes = require('./routes/tableRoutes');

// Middleware to parse JSON request bodies
app.use(express.json());

// Mount the routes
app.use('/api/table', tableRoutes); // Use a base URL, e.g., /api/table

// Start the server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});

const sequelize = require('./config/database');
const Table = require('./models/Table');

// Sync the model with the database
sequelize.sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

  const axios = require('axios');

const postData = async () => {
  try {
    const response = await axios.post('http://localhost:4000/api/table/seed');
    console.log('Seed data created:', response.data);
  } catch (error) {
    console.error('Error seeding data:', error.message);
  }
};

postData();

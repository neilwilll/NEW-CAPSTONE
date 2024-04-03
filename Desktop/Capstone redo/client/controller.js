const { Table } = require('../models'); // Import the Sequelize model for your table

// GET endpoint and handler function
const getAllItems = async (req, res) => {
  try {
    // Fetch all items from the table
    const items = await Table.findAll();

    // Return the items as a response
    res.json(items);
  } catch (error) {
    // Handle any errors that occur during the request
    res.status(500).json({ error: 'Internal server error' });
  }
};

// POST endpoint and handler function
const createItem = async (req, res) => {
  try {
    // Extract the item data from the request body
    const { property1, property2 } = req.body;

    // Create a new item in the table
    const newItem = await Table.create({ property1, property2 });

    // Return the newly created item as a response
    res.json(newItem);
  } catch (error) {
    // Handle any errors that occur during the request
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Export the controller functions
module.exports = {
  getAllItems,
  createItem,
};

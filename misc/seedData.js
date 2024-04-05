const Table = require('../models/Table');

const seedData = async () => {
  try {
    // Create multiple items using the create method
    await Table.bulkCreate([
      { property1: 'Item 1', property2: 10 },
      { property1: 'Item 2', property2: 20 },
      { property1: 'Item 3', property2: 30 },
    ]);

    console.log('Seed data created');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

module.exports = seedData;

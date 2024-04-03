function showPopup() {
    var team = document.getElementById("team").value;
    if (team) {
        document.getElementById("message").style.display = "block";
    }
    // routes.js or controllers.js
app.get('/api/data', (req, res) => {
    // Handle the GET request
    // Retrieve data from the database or any other source
    // Return the data as a response
    res.json({ message: 'GET request handled' });
  });
  // routes.js or controllers.js
app.post('/api/data', (req, res) => {
    // Handle the POST request
    // Retrieve data from the request body
    const requestData = req.body;
    // Save the data to the database or perform any other action
    // Return a response indicating the success or any relevant data
    res.json({ message: 'POST request handled', data: requestData });
  });
  // seed.js
const seedData = [
    // Define the initial data to be seeded into the database
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    { name: 'Item 3', price: 30 },
  ];
  
  // Function to seed the database
  const seedDatabase = () => {
    // Save the seed data to the database using Sequelize or any other ORM/library
    // Perform any additional seeding tasks if necessary
    console.log('Database seeded');
  };
  
  // Call the seed function to populate the database
  seedDatabase();
  
}

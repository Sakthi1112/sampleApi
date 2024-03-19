const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Add this line to import cors

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to enable CORS
app.use(cors());

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Example data (you can replace this with your own data source)
const userData = [
  {
    name: "John Doe",
    date: "2024-03-19",
    phoneNumber: "+1234567890",
    email: "john@example.com",
    address: "123 Main St, Anytown, USA",
    age: 30,
  },
  {
    name: "Alice Smith",
    date: "2024-03-20",
    phoneNumber: "+1987654321",
    email: "alice@example.com",
    address: "456 Elm St, Somewhereville, USA",
    age: 25,
  },
  {
    name: "Bob Johnson",
    date: "2024-03-21",
    phoneNumber: "+1122334455",
    email: "bob@example.com",
    address: "789 Oak St, Nowhere City, USA",
    age: 40,
  },
  {
    name: "Emily Brown",
    date: "2024-03-22",
    phoneNumber: "+1555098765",
    email: "emily@example.com",
    address: "321 Pine St, Elsewhere Town, USA",
    age: 35,
  },
  {
    name: "Michael Davis",
    date: "2024-03-23",
    phoneNumber: "+1443322110",
    email: "michael@example.com",
    address: "654 Birch St, Anotherplace, USA",
    age: 28,
  },
];

// GET endpoint to retrieve user data
app.get("/user", (req, res) => {
  res.json(userData);
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

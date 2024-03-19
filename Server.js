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
const userData = {
  name: "John Doe",
  date: "2024-03-19",
  phoneNumber: "+1234567890",
};

// GET endpoint to retrieve user data
app.get("/user", (req, res) => {
  res.json(userData);
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

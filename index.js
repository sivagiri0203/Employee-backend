const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Test API
app.get("/", (req, res) => {
  res.send("API Running Successfully");
});

// Employee API
app.get("/api/employees", (req, res) => {
  res.json([
    {
      name: "Sivagiri",
      email: "siva@gmail.com",
      phone: "9876543210",
    },
  ]);
});

// Server Running
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`API is running on port ${PORT}`);
});
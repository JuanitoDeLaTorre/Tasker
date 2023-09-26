// Import required dependencies
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();

// Create an Express application
const app = express();

// Define the port for your server
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection URL
const mongoURI = process.env.MONGO_DB_URI;

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB! 😀");
  })
  .catch((err) => {
    console.error("🤬 Error connecting to MongoDB:", err);
  });

// Define a MongoDB schema and model (example)
const Schema = mongoose.Schema;
const TaskSchema = new Schema({
  taskName: String,
  importance: Number,
  timesAccomplished: Number,
});

const TaskModel = mongoose.model("Task", TaskSchema);

// Example API endpoints

// Get all items
app.get("/api/getTasks", (req, res) => {
  TaskModel.find()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      console.error("Error fetching tasks:", err);
      res.status(500).json({ error: "Internal server error" });
    });
});

// Create a new item
app.post("/api/addTask", (req, res) => {
  const newTask = new TaskModel({
    taskName: req.body.taskName,
    importance: req.body.importance,
    timesAccomplished: req.body.timesAccomplished,
  });

  newTask
    .save()
    .then((task) => {
      res.json(task);
    })
    .catch((err) => {
      console.error("Error creating task:", err);
      res.status(500).json({ error: "Internal server error" });
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

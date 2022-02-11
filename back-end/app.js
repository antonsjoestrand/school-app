const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

// routes
const students = require("./routes/api/students");

const app = express();

// Connect Database
connectDB();

// Cors
app.use(cors({ origin: true, credentials: true }));

// Init middleware
app.use(express.json({ extended: false }));

// use routes
app.use("/api/students", students);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

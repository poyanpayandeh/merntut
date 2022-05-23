const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3002;

const app = express();

// routes
app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => console.log(`Server running on ${port}`));

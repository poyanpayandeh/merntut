const express = require("express");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 3002;
const { errorHandler } = require("./middleware/errorMiddleware");

connectDB();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extented: false }));

// routes
app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on ${port}`));

/**
 * This module defines the Express application for the project.
 * @module app
 */
const express = require("express");
const PersonRouter = require("./routes/person.route");
require("./config/db/connect");
const app = express();

app.use(express.json());
app.use("/api", PersonRouter);

// Middleware function to handle routes that don't exist
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

// Error handling middleware function
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;

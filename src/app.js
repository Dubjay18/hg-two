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

module.exports = app;

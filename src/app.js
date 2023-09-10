const express = require("express");
const PersonRouter = require("./routes/person.route");
require("./config/db/connect");
const app = express();

app.use(express.json());
app.use("/api", PersonRouter);

module.exports = app;

const { default: mongoose } = require("mongoose");
const JLogger = require("../../utils/logger");
const { DB_URI } = require("../constants");

/**
 * Connects to the MongoDB database using Mongoose.
 * @function
 * @param {string} DB_URI - The URI of the MongoDB database.
 * @returns {Promise<void>} - A Promise that resolves when the connection is established.
 */
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

/**
 * Logs a message to the console when the database connection is established.
 * @function
 * @param {string} message - The message to log.
 */
JLogger("Connected correctly");

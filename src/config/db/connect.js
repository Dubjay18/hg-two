const { default: mongoose } = require("mongoose");
const JLogger = require("../../utils/logger");
const { DB_URI } = require("../constants");

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
JLogger("Connected correctly");

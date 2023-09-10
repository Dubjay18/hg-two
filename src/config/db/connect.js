const { default: mongoose } = require("mongoose");
const JLogger = require("../../utils/logger");
const { DB_URI } = require("../constants");

mongoose.connection.on("connected", () => {
  // Plugins later
  // Log db connected
  JLogger(
    `${mongoose.connections[0].name} db connected with mongoose`
  );
});

mongoose.connection.on("disconnect", () => {
  // Plugins later
  // Log db connected
  JLogger(`${mongoose.connections[0].name} disconnected!`);
});

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));
JLogger("Connected correctly");

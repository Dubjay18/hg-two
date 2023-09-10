const PORT = process.env.PORT || 8000;
const DB_URI =
  process.env.DB_URI ||
  "mongodb://127.0.0.1:27017/person-api";
module.exports = { PORT, DB_URI };

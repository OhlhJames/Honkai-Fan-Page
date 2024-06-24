const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

mongoose.connect(process.env.Honkai_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;

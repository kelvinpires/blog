const mongoose = require("mongoose");

function connectDb() {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", (err) => console.log(err));
  db.once("open", () => console.log("Database is online"));
}

module.exports = { connectDb };

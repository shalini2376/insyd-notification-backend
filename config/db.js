const mongoose = require("mongoose");

async function connectDB() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI missing in .env");
  await mongoose.connect(uri, {
    // modern Mongoose doesn’t require extra options
  });
  console.log("✅ MongoDB connected");
}

module.exports = connectDB;

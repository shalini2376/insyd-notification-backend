
const mongoose = require("mongoose");

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("MONGODB_URI is not defined in environment variables");
  process.exit(1);
}

console.log("MongoDB URI:", process.env.MONGODB_URI);
mongoose
  .connect(uri)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));

module.exports = mongoose;

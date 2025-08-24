const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    default: () => new mongoose.Types.ObjectId().toString(), // Auto-generate
  },
  username: String,
  email: String,
  preferences: {
    type: [String], // Example: ["email", "sms"]
    default: [],
  },
});

module.exports = mongoose.model("User", userSchema);

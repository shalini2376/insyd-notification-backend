const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  notificationId: {
    type: String,
    default: () => new mongoose.Types.ObjectId().toString(),
  },
  userId: String, 
  type: String,
  content: String,
  status: { type: String, default: "unread" },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Notification", notificationSchema);

const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  eventId: {
    type: String,
    default: () => new mongoose.Types.ObjectId().toString(),
  },
  type: String, // like, comment, follow
  sourceUserId: String,
  targetUserId: String,
  data: Object,
  timestamp: { type: Date, default: Date.now },
});


module.exports = mongoose.model("Event", eventSchema);

const express = require("express");
const mongoose = require("mongoose");
const Event = require("../models/Event");
const Notification = require("../models/Notification");

const router = express.Router();

// 🆕 POST /events - Create a new event
router.post("/", async (req, res) => {
  try {
    const { type, sourceUserId, targetUserId } = req.body;

    // Create a dynamic message
    let message = "";
    if (type === "follow") {
      message = `${sourceUserId} followed ${targetUserId}`;
    } else if (type === "like") {
      message = `${sourceUserId} liked ${targetUserId}'s post`;
    } else {
      message = `${sourceUserId} triggered ${type} event`;
    }

    // Add `data` field with message, eventId, timestamp
    const event = new Event({
      type,
      sourceUserId,
      targetUserId,
      data: {
        message,
        eventId: new mongoose.Types.ObjectId(),
        timestamp: new Date()
      }
    });

    await event.save();

    // Create a notification for the target user
    const notification = new Notification({
      userId: targetUserId,
      type,
      content: message, // use same message
    });
    await notification.save();

    res.status(201).json({
      message: "Event created & notification sent!",
      event
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

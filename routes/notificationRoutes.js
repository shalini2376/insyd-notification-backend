const express = require("express");
const Notification = require("../models/Notification");

const router = express.Router();

// 🔍 GET /notifications/:userId - Get notifications for a user
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    // Fetch notifications for this user, latest first
    const notifications = await Notification.find({ userId }).sort({ timestamp: -1 });
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

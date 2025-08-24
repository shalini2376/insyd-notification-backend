const express = require("express");
const Notification = require("../models/Notification");

const router = express.Router();

// 🔍 GET /notifications/:userId - Get notifications for a user
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    console.log("Fetching notifications for user:", userId);
    // Fetch notifications for this user, latest first
    const notifications = await Notification.find({ userId }).sort({ timestamp: -1 }).lean();
    console.log("Notifications found:", notifications.length);
    res.json(notifications);
  } catch (error) {
    console.error("Error in GET /notifications/:userId:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
